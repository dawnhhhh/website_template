/**
 * 表单验证函数库
 */

const validators = {
  /**
   * 验证邮箱
   * @param {string} email - 邮箱地址
   * @returns {boolean}
   */
  isEmail: function(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  /**
   * 验证手机号（中国）
   * @param {string} phone - 手机号
   * @returns {boolean}
   */
  isPhone: function(phone) {
    const regex = /^1[3-9]\d{9}$/;
    return regex.test(phone);
  },

  /**
   * 验证URL
   * @param {string} url - URL地址
   * @returns {boolean}
   */
  isUrl: function(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  /**
   * 验证必填项
   * @param {string} value - 值
   * @returns {boolean}
   */
  isRequired: function(value) {
    return value !== null && value !== undefined && value.toString().trim() !== '';
  },

  /**
   * 验证最小长度
   * @param {string} value - 值
   * @param {number} minLength - 最小长度
   * @returns {boolean}
   */
  minLength: function(value, minLength) {
    return value && value.length >= minLength;
  },

  /**
   * 验证最大长度
   * @param {string} value - 值
   * @param {number} maxLength - 最大长度
   * @returns {boolean}
   */
  maxLength: function(value, maxLength) {
    return value && value.length <= maxLength;
  },

  /**
   * 验证数字
   * @param {string|number} value - 值
   * @returns {boolean}
   */
  isNumber: function(value) {
    return !isNaN(value) && !isNaN(parseFloat(value));
  },

  /**
   * 验证整数
   * @param {string|number} value - 值
   * @returns {boolean}
   */
  isInteger: function(value) {
    return Number.isInteger(Number(value));
  },

  /**
   * 验证密码强度（至少8位，包含字母和数字）
   * @param {string} password - 密码
   * @returns {boolean}
   */
  isStrongPassword: function(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  }
};

// 全局暴露验证函数
window.validators = validators;

