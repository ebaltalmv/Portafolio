import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIST_CLIENT = path.join(ROOT, 'dist', 'client');
const DIST_SERVER = path.join(ROOT, 'dist', 'server', 'entry.mjs');
const DATA_UPLOADS = path.join(ROOT, 'data', 'uploads');
const OUT_DIR = path.join(ROOT, 'gh-pages-dist');

const RAW_BASE = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : '/Portafolio';
const BASE_PATH = RAW_BASE === '/' ? '' : RAW_BASE.replace(/\/+$/, '');
const PORT = 4399;
const ORIGIN = `http://127.0.0.1:${PORT}`;

const SECTIONS = [
  'academic-projects',
  'hackathons',
  'collaborations',
  'expos',
  'personal-projects',
  'certifications',
  'community-service',
  'articles',
];

function rewriteHtmlForBasePath(html, basePath) {
  if (!basePath) return html;

  return html
    .replace(
      /\b(href|src|action|data-src|data-pdf-url)="\/([^"]*)"/g,
      (_match, attr, rest) => {
        if (rest.startsWith('/')) return `${attr}="/${rest}"`;
        const cleanBase = basePath.replace(/^\/+/, '');
        if (rest === cleanBase || rest.startsWith(`${cleanBase}/`)) {
          return `${attr}="/${rest}"`;
        }
        return `${attr}="${basePath}/${rest}"`;
      }
    );
}

async function copyDirRecursive(src, dest) {
  if (!fsSync.existsSync(src)) return;
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const item of entries) {
    const srcPath = path.join(src, item.name);
    const destPath = path.join(dest, item.name);
    if (item.isDirectory()) {
      await copyDirRecursive(srcPath, destPath);
    } else if (item.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function waitForServer(url, maxRetries = 40) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // wait
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`El servidor SSR no respondió en ${url}`);
}

async function main() {
  console.log(`[1/4] Preparando directorio estático para GitHub Pages (base: "${BASE_PATH || '/'}")...`);
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUT_DIR, { recursive: true });

  console.log('[2/4] Copiando bundles cliente (_astro) y archivos de evidencia (data/uploads)...');
  await copyDirRecursive(DIST_CLIENT, OUT_DIR);
  await copyDirRecursive(DATA_UPLOADS, path.join(OUT_DIR, 'api', 'uploads'));
  await fs.writeFile(path.join(OUT_DIR, '.nojekyll'), '', 'utf-8');

  console.log('[3/4] Iniciando servidor SSR temporal para pre-renderizar todas las rutas en Vista Solo Visualización...');
  const serverProc = spawn(process.execPath, [DIST_SERVER], {
    env: {
      ...process.env,
      HOST: '127.0.0.1',
      PORT: String(PORT),
      PUBLIC_READONLY_BUILD: 'true',
    },
    stdio: 'pipe',
  });

  try {
    await waitForServer(`${ORIGIN}/api/entries`);

    const entriesRes = await fetch(`${ORIGIN}/api/entries`);
    const entriesData = await entriesRes.json();
    const entries = (entriesData.entries || []).filter((e) => !e.draft);

    // Asegurar que cualquier archivo recién inicializado por seed también se copie
    await copyDirRecursive(DATA_UPLOADS, path.join(OUT_DIR, 'api', 'uploads'));

    const routes = ['/', '/404'];
    for (const sec of SECTIONS) {
      routes.push(`/${sec}`);
    }
    for (const entry of entries) {
      routes.push(`/${entry.section}/${entry.slug}`);
    }

    console.log(`[4/4] Renderizando ${routes.length} páginas estáticas...`);
    for (const route of routes) {
      const res = await fetch(`${ORIGIN}${route}`);
      if (!res.ok && route !== '/404') {
        throw new Error(`Error al renderizar ${route}: HTTP ${res.status}`);
      }
      const rawHtml = await res.text();
      const finalHtml = rewriteHtmlForBasePath(rawHtml, BASE_PATH);

      if (route === '/') {
        await fs.writeFile(path.join(OUT_DIR, 'index.html'), finalHtml, 'utf-8');
      } else if (route === '/404') {
        await fs.writeFile(path.join(OUT_DIR, '404.html'), finalHtml, 'utf-8');
      } else {
        const cleanRoute = route.replace(/^\/+|\/+$/g, '');
        const routeDir = path.join(OUT_DIR, cleanRoute);
        await fs.mkdir(routeDir, { recursive: true });
        await fs.writeFile(path.join(routeDir, 'index.html'), finalHtml, 'utf-8');
      }
    }

    console.log(`✓ Exportación para GitHub Pages completada en: ${OUT_DIR}`);
  } finally {
    serverProc.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
