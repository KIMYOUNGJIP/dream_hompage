@echo off
chcp 65001 > nul
echo ===================================================
echo   2026 연성초 꿈마당 GitHub 푸시 및 배포
echo ===================================================
echo.
echo 깃허브(KIMYOUNGJIP/dream_hompage)로 전송을 시작합니다.
echo 브라우저 로그인 창이 뜨면 승인(Sign in)을 눌러주세요.
echo.
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ===================================================
    echo   성공적으로 깃허브에 업로드되었습니다!
    echo ===================================================
) else (
    echo   오류가 발생했습니다. 위의 메시지를 확인해주세요.
)
echo.
pause
