@echo off
chcp 65001 >nul
echo ========================================================
echo   Wysyłanie projektu Polski Test Polityczny na GitHub
echo ========================================================
echo.
git push -u origin main
echo.
echo Gotowe!
pause
