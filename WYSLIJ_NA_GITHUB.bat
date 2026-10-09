@echo off
chcp 65001 >nul
echo ========================================================
echo   Wysyłanie najnowszego kodu na GitHub...
echo ========================================================
echo.
git push -f origin main
echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo   SUKCES! Wszystkie zmiany zostaly zapisane na GitHubie!
    echo ========================================================
) else (
    echo ========================================================
    echo   Wystapil problem z autoryzacja. Sprawdz logowanie.
    echo ========================================================
)
echo.
pause
