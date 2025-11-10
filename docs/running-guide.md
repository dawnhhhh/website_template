# 项目运行指南

## 为什么需要本地服务器？

由于项目使用了 `fetch` API 来动态加载公共组件（Header、Footer），直接双击打开 HTML 文件会因为浏览器的 CORS 安全策略而无法正常工作。因此需要使用本地服务器来运行项目。

## 运行方式

### 方式一：VS Code Live Server（推荐）

**优点**：最简单，自动刷新

**步骤**：
1. 安装 VS Code（如果还没有）
2. 在 VS Code 中打开项目文件夹
3. 安装 "Live Server" 插件：
   - 按 `Ctrl+Shift+X` 打开扩展面板
   - 搜索 "Live Server"
   - 点击安装（作者：Ritwick Dey）
4. 安装完成后：
   - 右键点击 `pages/index.html`
   - 选择 "Open with Live Server"
   - 或者点击 VS Code 右下角的 "Go Live" 按钮

**访问地址**：通常是 `http://127.0.0.1:5500/pages/index.html`

---

### 方式二：Python HTTP Server

**优点**：Python 通常已安装，无需额外工具

**步骤**：
1. 打开命令行（CMD 或 PowerShell）
2. 进入项目根目录：
   ```bash
   cd E:\website_tongji
   ```
3. 运行 Python 服务器：
   
   **Python 3.x**：
   ```bash
   python -m http.server 8000
   ```
   
   **Python 2.x**（如果只有 Python 2）：
   ```bash
   python -m SimpleHTTPServer 8000
   ```
4. 在浏览器中访问：`http://localhost:8000/pages/index.html`

**停止服务器**：在命令行中按 `Ctrl+C`

---

### 方式三：Node.js http-server

**优点**：功能强大，支持自动刷新

**步骤**：
1. 安装 Node.js（如果还没有）：https://nodejs.org/
2. 全局安装 http-server：
   ```bash
   npm install -g http-server
   ```
3. 在项目根目录运行：
   ```bash
   http-server -p 8000
   ```
4. 在浏览器中访问：`http://localhost:8000/pages/index.html`

**停止服务器**：在命令行中按 `Ctrl+C`

---

### 方式四：PHP 内置服务器

**优点**：如果已安装 PHP，无需额外安装

**步骤**：
1. 打开命令行
2. 进入项目根目录：
   ```bash
   cd E:\website_tongji
   ```
3. 运行 PHP 服务器：
   ```bash
   php -S localhost:8000
   ```
4. 在浏览器中访问：`http://localhost:8000/pages/index.html`

**停止服务器**：在命令行中按 `Ctrl+C`

---

## 快速启动脚本（Windows）

为了方便启动，可以创建批处理文件：

### 创建 start.bat

在项目根目录创建 `start.bat` 文件，内容如下：

```batch
@echo off
echo 正在启动本地服务器...
echo.
echo 请选择运行方式：
echo 1. Python HTTP Server (推荐)
echo 2. Node.js http-server
echo 3. PHP 内置服务器
echo.
set /p choice=请输入选项 (1-3): 

if "%choice%"=="1" (
    echo 使用 Python 启动服务器...
    python -m http.server 8000
) else if "%choice%"=="2" (
    echo 使用 Node.js 启动服务器...
    http-server -p 8000
) else if "%choice%"=="3" (
    echo 使用 PHP 启动服务器...
    php -S localhost:8000
) else (
    echo 无效选项，使用 Python 启动...
    python -m http.server 8000
)
```

双击 `start.bat` 即可启动服务器。

---

## 访问页面

启动服务器后，在浏览器中访问：

- **首页**：`http://localhost:8000/pages/index.html`
- **走进名仁**：`http://localhost:8000/pages/about.html`
- **新闻中心**：`http://localhost:8000/pages/news.html`
- **名医团队**：`http://localhost:8000/pages/doctors.html`
- **核心疗法**：`http://localhost:8000/pages/therapies.html`
- **健康管理**：`http://localhost:8000/pages/health-management.html`
- **康复案例**：`http://localhost:8000/pages/cases.html`
- **健康科普**：`http://localhost:8000/pages/health-education.html`
- **联系我们**：`http://localhost:8000/pages/contact.html`

---

## 常见问题

### Q: 为什么页面显示空白或组件没有加载？

**A**: 确保使用本地服务器运行，而不是直接双击打开 HTML 文件。检查浏览器控制台（F12）是否有 CORS 错误。

### Q: 如何修改端口号？

**A**: 
- Python: `python -m http.server 8080`（将 8000 改为 8080）
- Node.js: `http-server -p 8080`
- PHP: `php -S localhost:8080`

### Q: 页面样式没有加载？

**A**: 检查 CSS 文件路径是否正确，确保使用相对路径 `../assets/css/main.css`

### Q: JavaScript 功能不工作？

**A**: 打开浏览器开发者工具（F12），查看 Console 标签页是否有错误信息。

---

## 开发建议

1. **使用 VS Code Live Server**：最方便，支持自动刷新
2. **保持浏览器开发者工具打开**：方便调试和查看错误
3. **定期检查控制台**：及时发现 JavaScript 错误
4. **测试不同浏览器**：确保兼容性

---

## 生产环境部署

项目完成后，可以部署到：
- 静态网站托管服务（GitHub Pages、Netlify、Vercel 等）
- 传统 Web 服务器（Apache、Nginx 等）
- CDN 服务

部署时只需要上传所有文件到服务器即可，无需构建步骤。

