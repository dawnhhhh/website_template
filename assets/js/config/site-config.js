/**
 * 网站配置文件
 * 包含网站的基本配置信息
 */

const siteConfig = {
  // 网站基本信息
  name: '同济现代名仁中医眼科',
  title: '同济现代名仁中医眼科 - 非手术眼病综合解决方案',
  description: '同济现代名仁中医眼科，非手术眼病综合解决方案，全周期视觉健康管理服务。百年中医治眼传承，全新升级特色疗法。',
  keywords: '眼科, 中医眼科, 白内障, 眼病治疗, 视觉健康, 非手术治疗',
  author: '同济现代名仁中医眼科',
  
  // 网站URL
  baseUrl: window.location.origin,
  apiUrl: '/api', // API 接口地址
  
  // 联系信息
  contact: {
    phone: '400-1657-006',
    email: 'contact@example.com',
    address: 'xxx省xxx市xxx区xxx路xxx号',
    workingHours: '周一至周五 9:00-18:00'
  },
  
  // 社交媒体
  social: {
    wechat: '',
    weibo: '',
    qq: ''
  },
  
  // 功能开关
  features: {
    enableSearch: true,
    enableNewsletter: true,
    enableComments: false
  },
  
  // 分页配置
  pagination: {
    itemsPerPage: 10,
    showPageNumbers: 5
  },
  
  // 动画配置
  animation: {
    enableScrollAnimation: true,
    enableLazyLoad: true
  }
};

// 导出配置（如果使用模块化）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteConfig;
}

// 全局暴露配置
window.siteConfig = siteConfig;

