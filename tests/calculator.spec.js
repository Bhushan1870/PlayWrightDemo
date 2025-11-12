import {test , expect} from '@playwright/test'

test('calculator',async({page}) => {
   
    // await page.goto('https://www.google.com/');
    // await page.locator('textarea[name="q"]').focus();
    // await page.keyboard.type('fort')
    // await page.keyboard.press('Enter')

     //await page.goto('https://demoblaze.com/index.html')
   // await page.getByRole('link' ,{name :'Samsung galaxy s6'}).click();
    //await expect (page).toHaveURL('https://demoblaze.com/index.html');
   // await expect (page.locator('h1')).toBeVisible();
  // await expect(page.getByText('Samsung').first()).toBeVisible()

  await page.goto ('https://demo.automationtesting.in/Register.html')
  await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html')
  await expect(page.locator('h2')).toBeVisible()
  await expect(page.locator('.loader')).toBeHidden();

  // await expect(page.locator('h2')).toHaveText('welcome')  // Error
  await expect(page.locator('h2')).toHaveText('Register')

  await page.locator('#firstpassword').fill('jen');
  await expect( page.locator('#firstpassword')).toHaveValue('jen')
 // await expect(page.locator('#firstpassword')).toHaveValue('ram'); // Error
  
  await expect(page.locator('#submitbtn')).toBeEnabled();
 // await expect(page.locator('#submitb')).toBeEnabled();   // Error

  await page.locator('#checkbox1').check();
  await expect(page.locator('#checkbox1')).toBeChecked();
 // await expect(page.locator('#checkbox')).toBeChecked()

});
