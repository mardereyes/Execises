class Login {
  static get tenants () {
    const selector = '.tenant'
    return browser.element(selector).value
  }

  static get welcomeLoginEmail () {
    const selector = '#login__default-login__field-email'
    return browser.element(selector).value
  }

  static get txtLoginEmail () {
    return '#login__global-login__field-email'
  }

  static get btnLogin () {
    return '#login__global-login__btn-submit'
  }

  static get btnTenantSubmit () {
    return '#login__global-login__tenant-select__btn-submit'
  }

  static get selectAccountTitle () {
    return '#login__global-login__tenant-select__title'
  }

  static get firstTenant () { // selects first element from array
    return '.tenant'
  }
}
module.exports = Login
