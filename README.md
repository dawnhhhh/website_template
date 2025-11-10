# 网站项目

基于纯 HTML + Bootstrap 5 + JavaScript 的响应式网站项目。

## 项目简介

这是一个响应式医疗健康类网站项目，采用纯前端技术栈实现，无需复杂的构建工具，易于维护和扩展。

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式设计（使用 CSS 变量实现主题系统）
- **Bootstrap 5** - UI 框架（通过 CDN 引入）
- **Bootstrap Icons** - 图标库
- **原生 JavaScript (ES6+)** - 交互逻辑

## 项目结构

```
website_tongji/
├── assets/              # 资源文件
│   ├── css/            # 样式文件
│   │   ├── custom/     # 自定义样式
│   │   └── main.css    # 主样式文件
│   └── js/             # JavaScript 文件
│       ├── config/     # 配置文件
│       ├── utils/      # 工具函数
│       ├── components/ # 组件脚本
│       └── main.js     # 主脚本
├── components/          # 公共组件（HTML片段）
│   ├── header.html     # 头部组件
│   └── footer.html     # 底部组件
├── pages/              # 页面文件
│   ├── index.html      # 首页
│   ├── about.html      # 关于我们
│   ├── services.html   # 服务项目
│   ├── news.html       # 新闻资讯
│   └── contact.html    # 联系我们
├── public/             # 静态资源
│   └── images/         # 图片资源（占位符）
└── docs/               # 项目文档
```

## 快速开始

### 方式一：使用启动脚本（最简单）

1. 双击项目根目录下的 `start.bat` 文件
2. 选择运行方式（Python/Node.js/PHP）
3. 在浏览器中访问：`http://localhost:8000/pages/index.html`

### 方式二：VS Code Live Server（推荐）

1. 在 VS Code 中打开项目
2. 安装 "Live Server" 插件
3. 右键点击 `pages/index.html` → 选择 "Open with Live Server"

### 方式三：命令行启动

**Python**（推荐，通常已安装）：
```bash
cd E:\website_tongji
python -m http.server 8000
```
然后访问：`http://localhost:8000/pages/index.html`

**Node.js**：
```bash
npm install -g http-server
http-server -p 8000
```

**注意**：由于使用了 `fetch` API 加载公共组件，**必须使用本地服务器运行**，不能直接双击打开 HTML 文件。

详细运行指南请查看：[docs/running-guide.md](docs/running-guide.md)

### 文件说明

- **主题定制**: 修改 `assets/css/custom/variables.css` 中的 CSS 变量即可快速更换网站风格
- **网站配置**: 修改 `assets/js/config/site-config.js` 中的配置信息
- **公共组件**: `components/` 目录下的 HTML 文件会被动态加载到各个页面

## 功能特性

- ✅ 响应式设计（支持 PC、平板、手机）
- ✅ 统一主题系统（CSS 变量）
- ✅ 组件化开发（公共组件复用）
- ✅ 表单验证
- ✅ 懒加载图片
- ✅ 滚动动画
- ✅ 返回顶部按钮
- ✅ SEO 优化

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 移动端浏览器

## 开发指南

详细开发指南请查看 [docs/development-guide.md](docs/development-guide.md)

## 任务清单

当前任务进度请查看 [docs/task-list.md](docs/task-list.md)

## 注意事项

1. 图片资源目前使用占位符，需要替换为实际图片
2. 联系表单提交功能需要后端支持（目前为模拟提交）
3. 公共组件通过 JavaScript 动态加载，需要服务器环境

## 许可证

本项目仅供学习和参考使用。

