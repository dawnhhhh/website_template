/**
 * 主题配置文件
 * 与 CSS 变量对应，用于 JavaScript 中访问主题值
 */

const themeConfig = {
  // 颜色配置（与 CSS 变量对应）
  colors: {
    primary: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#0d6efd',
    secondary: getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim() || '#6c757d',
    success: getComputedStyle(document.documentElement).getPropertyValue('--success-color').trim() || '#28a745',
    danger: getComputedStyle(document.documentElement).getPropertyValue('--danger-color').trim() || '#dc3545',
    warning: getComputedStyle(document.documentElement).getPropertyValue('--warning-color').trim() || '#ffc107',
    info: getComputedStyle(document.documentElement).getPropertyValue('--info-color').trim() || '#17a2b8',
    light: getComputedStyle(document.documentElement).getPropertyValue('--light-color').trim() || '#f8f9fa',
    dark: getComputedStyle(document.documentElement).getPropertyValue('--dark-color').trim() || '#212529'
  },
  
  // 断点配置
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  },
  
  // 获取当前断点
  getCurrentBreakpoint: function() {
    const width = window.innerWidth;
    if (width >= this.breakpoints.xxl) return 'xxl';
    if (width >= this.breakpoints.xl) return 'xl';
    if (width >= this.breakpoints.lg) return 'lg';
    if (width >= this.breakpoints.md) return 'md';
    if (width >= this.breakpoints.sm) return 'sm';
    return 'xs';
  },
  
  // 检查是否匹配断点
  isBreakpoint: function(breakpoint) {
    const width = window.innerWidth;
    return width >= this.breakpoints[breakpoint];
  }
};

// 全局暴露主题配置
window.themeConfig = themeConfig;

