@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================================
echo   POLITICAL COMPASS - SYNCHRONIZACJA Z GITHUB
echo ========================================================
echo.
echo [1/3] Dodawanie plikow...
git add -A

echo [2/3] Sprawdzanie zmian...
git diff-index --quiet HEAD --
if %errorlevel% neq 0 (
    git commit -m "Aktualizacja projektu: test polityczny"
) else (
    echo Brak nowych zmian - Twoje pliki sa juz w pelni zapisane.
)

echo [3/3] Wysylanie na GitHub (branch main)...
git push origin main

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo   SUKCES! Repozytorium GitHub jest w 100%% aktualne!
    echo ========================================================
) else (
    echo ========================================================
    echo   Wystapil blad podczas wysylania na GitHub.
    echo ========================================================
)
echo.
pause
