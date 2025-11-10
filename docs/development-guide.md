# 开发指南

## 目录结构说明

### assets/css/
- `custom/variables.css` - 主题变量配置（修改此文件可快速更换风格）
- `custom/components.css` - 组件样式
- `custom/responsive.css` - 响应式样式
- `main.css` - 主样式文件（导入所有样式）

### assets/js/
- `config/site-config.js` - 网站配置
- `config/theme-config.js` - 主题配置
- `utils/helpers.js` - 工具函数
- `utils/validators.js` - 表单验证函数
- `components/header.js` - 头部组件逻辑
- `components/back-to-top.js` - 返回顶部组件
- `components/form.js` - 表单组件
- `main.js` - 主脚本文件

### components/
- `header.html` - 头部组件（公共）
- `footer.html` - 底部组件（公共）

### pages/
- 所有页面 HTML 文件

## 主题定制

### 修改颜色

编辑 `assets/css/custom/variables.css`：

```css
:root {
  --primary-color: #your-color;  /* 修改主色 */
  --secondary-color: #your-color; /* 修改次色 */
  /* ... 其他颜色 */
}
```

### 修改字体

```css
:root {
  --font-family-base: 'Your Font', sans-serif;
  --font-size-base: 1rem;
  /* ... 其他字体设置 */
}
```

### 修改间距

```css
:root {
  --spacer: 1rem;  /* 基础间距单位 */
  /* ... 其他间距 */
}
```

## 添加新页面

1. 在 `pages/` 目录创建新的 HTML 文件
2. 复制现有页面的基本结构
3. 修改页面内容
4. 确保引入所有必要的 CSS 和 JS 文件
5. 添加公共组件加载脚本

## 添加新组件

### HTML 组件

1. 在 `components/` 目录创建 HTML 文件
2. 在页面中使用 `fetch` 加载：

```javascript
fetch('../components/your-component.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('container').innerHTML = data;
  });
```

### JavaScript 组件

1. 在 `assets/js/components/` 目录创建 JS 文件
2. 在 `main.js` 中初始化
3. 在 HTML 中引入脚本

## 表单验证

使用 Bootstrap 5 的表单验证：

```html
<form class="needs-validation" novalidate>
  <input type="text" class="form-control" required>
  <div class="invalid-feedback">
    请输入有效值
  </div>
</form>
```

## 响应式断点

使用 Bootstrap 5 的断点：

- `xs`: < 576px (手机)
- `sm`: ≥ 576px (大手机)
- `md`: ≥ 768px (平板)
- `lg`: ≥ 992px (桌面)
- `xl`: ≥ 1200px (大桌面)
- `xxl`: ≥ 1400px (超大桌面)

## 性能优化建议

1. **图片优化**
   - 使用适当的图片格式（WebP、JPEG、PNG）
   - 压缩图片大小
   - 使用懒加载

2. **代码优化**
   - 压缩 CSS 和 JS（生产环境）
   - 移除未使用的代码
   - 使用 CDN 加载 Bootstrap

3. **缓存策略**
   - 设置适当的缓存头
   - 使用版本号管理静态资源

## 常见问题

### Q: 公共组件加载失败？
A: 确保使用本地服务器运行，不能直接打开 HTML 文件（CORS 限制）。

### Q: 如何修改导航菜单？
A: 编辑 `components/header.html` 文件。

### Q: 如何添加新的工具函数？
A: 在 `assets/js/utils/helpers.js` 中添加，或创建新文件并在 HTML 中引入。

### Q: 如何更换网站风格？
A: 修改 `assets/css/custom/variables.css` 中的 CSS 变量即可。

## 代码规范

1. **HTML**: 使用语义化标签，添加适当的 aria 标签
2. **CSS**: 使用 BEM 命名规范（可选），优先使用 CSS 变量
3. **JavaScript**: 使用 ES6+ 语法，添加必要的注释

## 浏览器兼容性

- 现代浏览器（Chrome、Firefox、Safari、Edge 最新版）
- 移动端浏览器
- IE11 不支持（如需支持，需要添加 polyfill）

## 部署建议

1. 压缩所有 CSS 和 JS 文件
2. 优化图片资源
3. 设置适当的 HTTP 缓存头
4. 使用 HTTPS
5. 配置 CDN（如需要）

