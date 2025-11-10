/**
 * 返回顶部按钮组件
 */

const backToTopComponent = {
  /**
   * 初始化返回顶部按钮
   */
  init: function() {
    // 创建返回顶部按钮
    this.createButton();
    this.handleScroll();
    this.handleClick();
  },

  /**
   * 创建返回顶部按钮
   */
  createButton: function() {
    // 检查是否已存在
    if (document.querySelector('.back-to-top')) return;

    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.setAttribute('aria-label', '返回顶部');
    button.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(button);
  },

  /**
   * 处理滚动显示/隐藏按钮
   */
  handleScroll: function() {
    const button = document.querySelector('.back-to-top');
    if (!button) return;

    const scrollHandler = helpers.throttle(() => {
      if (window.scrollY > 300) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    }, 100);

    window.addEventListener('scroll', scrollHandler);
  },

  /**
   * 处理点击事件
   */
  handleClick: function() {
    const button = document.querySelector('.back-to-top');
    if (!button) return;

    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

// 全局暴露返回顶部组件
window.backToTopComponent = backToTopComponent;

