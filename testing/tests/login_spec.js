const Login = require('./page')
const userName = 'pooja@perkbox.co.uk'

function login(){
  browser.waitForExist(Login.txtLoginEmail)
  browser.element(Login.txtLoginEmail).setValue(userName)
  browser.waitForExist(Login.btnLogin)
  browser.element(Login.btnLogin).click()
  browser.waitForExist(Login.selectAccountTitle)
}

describe(`Account to login`, () => {
  beforeAll(() => {
    browser.url('https://app.perkbox.com/welcome/login')
  })

  it('should display list of accounts to registered user', () => {
    login()
    const tenantsList = Login.tenants.ELEMENT
    expect(browser.elementIdDisplayed(tenantsList).value).toBe(true)
  })

  it('should display list of accounts to registered user', () => {
    login()
    browser.element(Login.firstTenant).click()
    browser.element(Login.btnTenantSubmit).click()
    browser.waitUntil(() => browser.getUrl() === 'https://themistrypenguin.perkbox.com/welcome/login')
    const emailBox = Login.welcomeLoginEmail.ELEMENT
    expect(browser.elementIdDisplayed(emailBox).value).toContain(userName)
  })
})
