/**
 * 表单组件
 * 处理表单验证和提交
 */

const formComponent = {
  /**
   * 初始化表单组件
   */
  init: function () {
    this.initValidation();
    this.initSubmit();
  },

  /**
   * 初始化表单验证
   */
  initValidation: function () {
    const forms = document.querySelectorAll('.needs-validation');

    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);

      // 实时验证
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('blur', () => {
          this.validateField(input);
        });
      });
    });
  },

  /**
   * 验证单个字段
   * @param {HTMLElement} field - 表单字段
   */
  validateField: function (field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // 必填验证
    if (field.hasAttribute('required') && !validators.isRequired(value)) {
      isValid = false;
      errorMessage = '此字段为必填项';
    }

    // 邮箱验证
    if (field.type === 'email' && value && !validators.isEmail(value)) {
      isValid = false;
      errorMessage = '请输入有效的邮箱地址';
    }

    // 手机号验证
    if (field.type === 'tel' && value && !validators.isPhone(value)) {
      isValid = false;
      errorMessage = '请输入有效的手机号码';
    }

    // 最小长度验证
    const minLength = field.getAttribute('minlength');
    if (minLength && !validators.minLength(value, parseInt(minLength))) {
      isValid = false;
      errorMessage = `至少需要 ${minLength} 个字符`;
    }

    // 最大长度验证
    const maxLength = field.getAttribute('maxlength');
    if (maxLength && !validators.maxLength(value, parseInt(maxLength))) {
      isValid = false;
      errorMessage = `最多 ${maxLength} 个字符`;
    }

    // 更新字段状态
    if (isValid) {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
      this.removeErrorMessage(field);
    } else {
      field.classList.remove('is-valid');
      field.classList.add('is-invalid');
      this.showErrorMessage(field, errorMessage);
    }

    return isValid;
  },

  /**
   * 显示错误信息
   * @param {HTMLElement} field - 表单字段
   * @param {string} message - 错误信息
   */
  showErrorMessage: function (field, message) {
    this.removeErrorMessage(field);

    const feedback = document.createElement('div');
    feedback.className = 'invalid-feedback';
    feedback.textContent = message;
    field.parentNode.appendChild(feedback);
  },

  /**
   * 移除错误信息
   * @param {HTMLElement} field - 表单字段
   */
  removeErrorMessage: function (field) {
    const feedback = field.parentNode.querySelector('.invalid-feedback');
    if (feedback) {
      feedback.remove();
    }
  },

  /**
   * 初始化表单提交
   */
  initSubmit: function () {
    const forms = document.querySelectorAll('form[data-ajax]');

    forms.forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          return;
        }

        // 显示加载状态
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton ? submitButton.innerHTML : '';
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>提交中...';
        }

        try {
          // 收集表单数据
          const formData = new FormData(form);
          const data = Object.fromEntries(formData);

          // 这里可以添加实际的提交逻辑
          // const response = await fetch(siteConfig.apiUrl + '/contact', {
          //   method: 'POST',
          //   body: JSON.stringify(data),
          //   headers: { 'Content-Type': 'application/json' }
          // });

          // 模拟提交
          await new Promise(resolve => setTimeout(resolve, 1000));

          // 显示成功消息
          this.showSuccessMessage(form, '提交成功！我们会尽快与您联系。');
          form.reset();
          form.classList.remove('was-validated');

        } catch (error) {
          // 显示错误消息
          this.showErrorMessage(form, '提交失败，请稍后重试。');
        } finally {
          // 恢复按钮状态
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
          }
        }
      });
    });
  },

  /**
   * 显示成功消息
   * @param {HTMLElement} form - 表单元素
   * @param {string} message - 成功信息
   */
  showSuccessMessage: function (form, message) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-success alert-dismissible fade show mt-3';
    alert.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    form.appendChild(alert);

    // 3秒后自动关闭
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
};

// 全局暴露表单组件
window.formComponent = formComponent;

