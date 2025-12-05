import { expect, test } from "../fixtures/fixture";
import LoginPage from "./pages/loginPage/loginPage";
import ProductPage from "./pages/productPage/productPage";
import * as testData from "./testData/testData.json"

test('E2E',async({page,loginPage,productPage})=> {
    await page.goto('https://www.saucedemo.com/');
    await loginPage.enterUsername(testData.username);
    await loginPage.enterPassword(testData.password);
    await loginPage.takeScreenshot('./tests/screenshots/loginPage.png');
    await loginPage.clickOnLoginButton();
    await productPage.clickOnAddToCartBtn();
    await productPage.takeScreenshot('./tests/screenshots/productPage.png');
    await productPage.clickOnCartBtn();
    await productPage.takeScreenshot('./tests/screenshots/cartPage.png');
    page.close();
})