import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { resolveSafeUploadPath, inferMimeType } from '../../../server/db';

export const GET: APIRoute = async ({ params, request, url }) => {
  const relPath = params.path || '';
  const absPath = resolveSafeUploadPath(relPath);

  if (!absPath || !fsSync.existsSync(absPath)) {
    return new Response('Archivo no encontrado', { status: 404 });
  }

  const stat = await fs.stat(absPath);
  if (!stat.isFile()) {
    return new Response('Recurso inválido', { status: 400 });
  }

  const fileName = path.basename(absPath);
  const mimeType = inferMimeType(fileName);
  const forceDownload = url.searchParams.get('download') === '1';
  const disposition = forceDownload
    ? `attachment; filename="${encodeURIComponent(fileName)}"`
    : `inline; filename="${encodeURIComponent(fileName)}"`;

  const range = request.headers.get('range');
  if (range && mimeType.startsWith('video/')) {
    const fileSize = stat.size;
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;

    const fileHandle = await fs.open(absPath, 'r');
    const chunk = Buffer.alloc(chunkSize);
    await fileHandle.read(chunk, 0, chunkSize, start);
    await fileHandle.close();

    return new Response(chunk, {
      status: 206,
      headers: {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': String(chunkSize),
        'Content-Type': mimeType,
        'Content-Disposition': disposition,
      },
    });
  }

  const buffer = await fs.readFile(absPath);
  return new Response(buffer, {
    status: 200,
    headers: {
      'Content-Type': mimeType,
      'Content-Length': String(buffer.byteLength),
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=3600',
      'Content-Disposition': disposition,
    },
  });
};

export const HEAD: APIRoute = GET;
