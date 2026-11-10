@echo off
chcp 65001 >nul
title Portafolio EBL - Servidor Web Local
cd /d "%~dp0"
echo ============================================================
echo   PORTAFOLIO EMMANUEL BALTAZAR LOPEZ (ASTRO FULLSTACK)
echo   Vista Visitante:     http://localhost:4321/
echo   Vista Admin/Editor:  http://localhost:4321/admin/login
echo   Clave por defecto:   umad-ebl-2026
echo ============================================================
echo.
start "" "http://localhost:4321/"
npm run dev
pause
