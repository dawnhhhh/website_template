/**
 * 工具函数库
 * 提供常用的辅助函数
 */

const helpers = {
  /**
   * 防抖函数
   * @param {Function} func - 要执行的函数
   * @param {number} wait - 等待时间（毫秒）
   * @returns {Function}
   */
  debounce: function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * 节流函数
   * @param {Function} func - 要执行的函数
   * @param {number} limit - 时间限制（毫秒）
   * @returns {Function}
   */
  throttle: function(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  /**
   * 平滑滚动到指定元素
   * @param {string|HTMLElement} target - 目标元素选择器或元素
   * @param {number} offset - 偏移量（像素）
   */
  scrollTo: function(target, offset = 0) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  },

  /**
   * 检查元素是否在视口中
   * @param {HTMLElement} element - 要检查的元素
   * @returns {boolean}
   */
  isInViewport: function(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  /**
   * 获取URL参数
   * @param {string} name - 参数名
   * @returns {string|null}
   */
  getUrlParameter: function(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
  },

  /**
   * 格式化日期
   * @param {Date|string|number} date - 日期
   * @param {string} format - 格式（如：'YYYY-MM-DD'）
   * @returns {string}
   */
  formatDate: function(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');

    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  },

  /**
   * 复制文本到剪贴板
   * @param {string} text - 要复制的文本
   * @returns {Promise<boolean>}
   */
  copyToClipboard: async function(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      // 降级方案
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        document.body.removeChild(textArea);
        return true;
      } catch (err) {
        document.body.removeChild(textArea);
        return false;
      }
    }
  },

  /**
   * 加载图片（用于懒加载）
   * @param {HTMLImageElement} img - 图片元素
   * @param {string} src - 图片地址
   */
  loadImage: function(img, src) {
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  },

  /**
   * 检测设备类型
   * @returns {string} 'mobile' | 'tablet' | 'desktop'
   */
  detectDevice: function() {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 992) return 'tablet';
    return 'desktop';
  },

  /**
   * 添加类名（支持多个）
   * @param {HTMLElement} element - 元素
   * @param {string|string[]} classes - 类名或类名数组
   */
  addClass: function(element, classes) {
    if (Array.isArray(classes)) {
      element.classList.add(...classes);
    } else {
      element.classList.add(classes);
    }
  },

  /**
   * 移除类名（支持多个）
   * @param {HTMLElement} element - 元素
   * @param {string|string[]} classes - 类名或类名数组
   */
  removeClass: function(element, classes) {
    if (Array.isArray(classes)) {
      element.classList.remove(...classes);
    } else {
      element.classList.remove(classes);
    }
  }
};

// 全局暴露工具函数
window.helpers = helpers;

