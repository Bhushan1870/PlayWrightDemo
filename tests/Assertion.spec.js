import {test , expect} from '@playwright/test'

test('Assertion',async({page}) => {
  // Go to login page 
    await page.goto('https://www.saucedemo.com/')
   // fill correct userid and password
    await page.fill('#user-name','standard_user');
    await page.fill('#password', 'secret_sauce');
 // click on the login button
    await page.click('#login-button');
  // assertion check if user navigated to the correct url
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
// chech - if  logo or product title is visible 
    const productsTitle = page.locator('.title');
     await expect(productsTitle).toHaveText('Products');

     console.log('Login successfull and dashboard verified');
});

test('Assertion wrong username password',async({page}) => {
  // Go to login page 
    await page.goto('https://www.saucedemo.com/')
   // fill incorrect userid and password
    await page.fill('#user-name','wrong_user');
    await page.fill('#password', 'wrong_sauce');
 // click on the login button
    await page.click('#login-button');
  
  const errorMessege = page.locator('[data-test="error"]')
   //  console.log('Login unsuccessfull ');
});