@echo off
chcp 65001 >nul
echo ========================================
echo   同济现代名仁中医眼科 - 本地服务器启动
echo ========================================
echo.
echo 正在检测可用的服务器...
echo.

REM 检测 Python
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo [√] 检测到 Python
    set PYTHON_AVAILABLE=1
) else (
    echo [×] 未检测到 Python
    set PYTHON_AVAILABLE=0
)

REM 检测 Node.js
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo [√] 检测到 Node.js
    set NODE_AVAILABLE=1
) else (
    echo [×] 未检测到 Node.js
    set NODE_AVAILABLE=0
)

REM 检测 PHP
php --version >nul 2>&1
if %errorlevel% == 0 (
    echo [√] 检测到 PHP
    set PHP_AVAILABLE=1
) else (
    echo [×] 未检测到 PHP
    set PHP_AVAILABLE=0
)

echo.
echo ========================================
echo 请选择运行方式：
echo ========================================
if %PYTHON_AVAILABLE%==1 echo 1. Python HTTP Server (推荐)
if %NODE_AVAILABLE%==1 echo 2. Node.js http-server
if %PHP_AVAILABLE%==1 echo 3. PHP 内置服务器
echo.
set /p choice=请输入选项 (1-3): 

if "%choice%"=="1" (
    if %PYTHON_AVAILABLE%==0 (
        echo 错误：未安装 Python，请先安装 Python
        pause
        exit /b 1
    )
    echo.
    echo 正在使用 Python 启动服务器...
    echo 访问地址: http://localhost:8000/pages/index.html
    echo 按 Ctrl+C 停止服务器
    echo.
    python -m http.server 8000
) else if "%choice%"=="2" (
    if %NODE_AVAILABLE%==0 (
        echo 错误：未安装 Node.js，请先安装 Node.js
        pause
        exit /b 1
    )
    echo.
    echo 正在使用 Node.js 启动服务器...
    echo 访问地址: http://localhost:8000/pages/index.html
    echo 按 Ctrl+C 停止服务器
    echo.
    http-server -p 8000
) else if "%choice%"=="3" (
    if %PHP_AVAILABLE%==0 (
        echo 错误：未安装 PHP，请先安装 PHP
        pause
        exit /b 1
    )
    echo.
    echo 正在使用 PHP 启动服务器...
    echo 访问地址: http://localhost:8000/pages/index.html
    echo 按 Ctrl+C 停止服务器
    echo.
    php -S localhost:8000
) else (
    echo 无效选项，尝试使用 Python...
    if %PYTHON_AVAILABLE%==1 (
        python -m http.server 8000
    ) else (
        echo 错误：未找到可用的服务器，请安装 Python、Node.js 或 PHP
        pause
        exit /b 1
    )
)

