/**
 * 头部导航组件
 * 处理导航栏的交互逻辑
 */

const headerComponent = {
  /**
   * 初始化头部组件
   */
  init: function() {
    this.handleScroll();
    this.handleMobileMenu();
    this.handleActiveLink();
  },

  /**
   * 处理滚动时的导航栏样式
   */
  handleScroll: function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const scrollHandler = helpers.throttle(() => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    }, 100);

    window.addEventListener('scroll', scrollHandler);
    // 初始化检查
    scrollHandler();
  },

  /**
   * 处理移动端菜单
   */
  handleMobileMenu: function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (!navbarToggler || !navbarCollapse) return;

    // 点击菜单项后自动关闭移动端菜单
    const navLinks = navbarCollapse.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  },

  /**
   * 处理当前页面的活动链接高亮
   */
  handleActiveLink: function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === currentPath || 
          (currentPath === '/' && linkPath.includes('index.html'))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
};

// 全局暴露头部组件
window.headerComponent = headerComponent;

