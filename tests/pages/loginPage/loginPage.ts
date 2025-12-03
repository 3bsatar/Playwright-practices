import BasePage from "../basePage";

export default class LoginPage extends BasePage {
    private readonly username = this.page.locator('[id="user-name"]');
    private readonly password = this.page.locator('[id="password"]');
    private readonly loginBtn = this.page.locator('[id="login-button"]');

    async enterUsername(){
        await this.enterTextToElement(this.username,"standard_user");
    }
    async enterPassword(){
        await this.enterTextToElement(this.password,"secret_sauce");
    }
    async clickOnLoginButton(){
        await this.clickOnElement(this.loginBtn);
    }
}