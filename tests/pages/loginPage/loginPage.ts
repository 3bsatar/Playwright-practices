import BasePage from "../basePage";

export default class LoginPage extends BasePage {
    private readonly username = this.page.locator('[id="user-name"]');
    private readonly password = this.page.locator('[id="password"]');
    private readonly loginBtn = this.page.locator('[id="login-button"]');

    async enterUsername(username:string){
        await this.enterTextToElement(this.username,username);
    }
    async enterPassword(password:string){
        await this.enterTextToElement(this.password,password);
    }
    async clickOnLoginButton(){
        await this.clickOnElement(this.loginBtn);
    }
}