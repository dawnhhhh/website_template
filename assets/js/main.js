/**
 * 主 JavaScript 文件
 * 页面加载完成后初始化所有组件
 */

// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
  console.log('网站初始化开始...');

  // 初始化主题配置（需要先加载）
  if (typeof themeConfig !== 'undefined') {
    // themeConfig 已在 theme-config.js 中初始化
  }

  // 初始化头部组件
  if (typeof headerComponent !== 'undefined') {
    headerComponent.init();
  }

  // 初始化返回顶部按钮
  if (typeof backToTopComponent !== 'undefined') {
    backToTopComponent.init();
  }

  // 初始化表单组件
  if (typeof formComponent !== 'undefined') {
    formComponent.init();
  }

  // 初始化懒加载图片（如果启用）
  if (siteConfig && siteConfig.animation && siteConfig.animation.enableLazyLoad) {
    initLazyLoad();
  }

  // 初始化滚动动画（如果启用）
  if (siteConfig && siteConfig.animation && siteConfig.animation.enableScrollAnimation) {
    initScrollAnimation();
  }

  console.log('网站初始化完成！');
});

/**
 * 初始化懒加载图片
 */
function initLazyLoad() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // 降级方案：直接加载所有图片
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
}

/**
 * 初始化滚动动画
 */
function initScrollAnimation() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  if ('IntersectionObserver' in window) {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.dataset.animate;
          element.classList.add(`animate-${animationType}`);
          animationObserver.unobserve(element);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => animationObserver.observe(el));
  } else {
    // 降级方案：直接显示所有元素
    animatedElements.forEach(el => {
      const animationType = el.dataset.animate;
      el.classList.add(`animate-${animationType}`);
    });
  }
}

// 处理窗口大小改变
window.addEventListener('resize', helpers.debounce(() => {
  // 可以在这里添加响应式相关的逻辑
  console.log('窗口大小改变:', window.innerWidth, 'x', window.innerHeight);
}, 250));

// 处理页面可见性变化（标签页切换）
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('页面隐藏');
  } else {
    console.log('页面显示');
  }
});

