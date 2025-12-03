import { expect, test } from "../fixtures/fixture";
import LoginPage from "./pages/loginPage/loginPage";
import ProductPage from "./pages/productPage/productPage";

test('E2E',async({page,loginPage,productPage})=> {
    await page.goto('https://www.saucedemo.com/');
    await loginPage.enterUsername();
    await loginPage.enterPassword();
    await loginPage.clickOnLoginButton();
    await productPage.clickOnAddToCartBtn();
    await productPage.clickOnCartBtn();
    await page.waitForTimeout(3000);
    page.close();
})