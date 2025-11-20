import { expect , test} from '@playwright/test';

test('to be hidden', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    // await expect(page.locator('[id="finish"]')).toBeHidden();
    await expect(page.locator('[id="finish"]')).toBeVisible();
    await page.close();
})

test('to be enabled', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

    await expect(page.locator('//*[@id="input-example"]/input')).toBeDisabled();
    await page.locator('//*[@id="input-example"]/button').click();
    await expect(page.locator('//*[@id="input-example"]/input')).toBeEnabled();

    await page.close();
})


test('to have text', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    await expect(page.locator('//*[@id="input-example"]/button')).toHaveText('Enable');
   // await expect(page.locator('//*[@id="input-example"]/button')).not.toHaveText('Enabled');

    await page.close();
})


test('to have attribute', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    await expect(page.locator('//*[@id="input-example"]/button')).toHaveAttribute('autocomplete','off');
   // await expect(page.locator('//*[@id="input-example"]/button')).toHaveAttribute('autocomplete','on');
    await page.close();
})


test('to have url', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    
    // Full URL
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_controls');

    // Partial URL
    await expect(page).toHaveURL(/the-internet.herokuapp.com/);

    await page.close();
})


test('to have title', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    
    // Full Title
    await expect(page).toHaveTitle('The Internet');

    // Partial Title
    await expect(page).toHaveTitle(/.*The Internet/);

    await page.close();
})


test('to have screenshot', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    
    await expect(page).toHaveScreenshot();

    await page.close();
})