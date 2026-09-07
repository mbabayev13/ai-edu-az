@echo off
setlocal
title AI.edu.az local server
cd /d "%~dp0"
set "PATH=C:\Users\mahammad.a.babayev\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;C:\Users\mahammad.a.babayev\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback;%PATH%"

echo.
echo Starting AI.edu.az...
echo When you see Ready, open http://127.0.0.1:3200/
echo Keep this window open while viewing the website.
echo.

"C:\Users\mahammad.a.babayev\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" ".\node_modules\next\dist\bin\next" dev -H 127.0.0.1 -p 3200

echo.
echo The website stopped or an error occurred.
pause
