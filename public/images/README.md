# 图片资源说明

## 目录结构

- `placeholders/` - 占位图片（当前使用渐变背景作为占位符）
- `icons/` - 图标文件
- `banners/` - 横幅/轮播图

## 占位图片说明

当前所有图片都使用 CSS 渐变背景作为占位符，实际开发时需要替换为真实图片。

### 需要替换的图片

1. **Logo**
   - 路径: `placeholders/logo.png`
   - 尺寸建议: 200x60px (可根据实际调整)

2. **轮播图/Banner**
   - 路径: `placeholders/banner-1.jpg`, `banner-2.jpg`, `banner-3.jpg`
   - 尺寸建议: 1920x500px

3. **关于我们**
   - 路径: `placeholders/about.jpg`, `placeholders/about-main.jpg`
   - 尺寸建议: 800x400px

4. **服务图片**
   - 路径: `placeholders/service-1.jpg`, `service-2.jpg`, `service-3.jpg`
   - 尺寸建议: 600x350px

5. **新闻图片**
   - 路径: `placeholders/news-1.jpg`, `news-2.jpg`, `news-3.jpg`
   - 尺寸建议: 400x250px

## 图片优化建议

1. **格式选择**
   - 照片: JPEG
   - 图标/Logo: PNG (透明背景) 或 SVG
   - 现代浏览器: WebP

2. **压缩**
   - 使用工具压缩图片（如 TinyPNG）
   - 保持图片质量的同时减小文件大小

3. **响应式图片**
   - 为不同设备准备不同尺寸的图片
   - 使用 `srcset` 属性（如需要）

## 使用方式

在 HTML 中引用图片：

```html
<img src="../public/images/placeholders/logo.png" alt="Logo">
```

