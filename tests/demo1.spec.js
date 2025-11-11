import {test , expect} from '@playwright/test'

test ('Locators' , async ({page}) =>
    {
 await page.goto('https://demoblaze.com/');
  await page.getByRole('link', {name :'Sign up'}).click();

  await page.getByLabel('Username').fill('Chandler');
  await page.getByLabel('Password').fill('Chandler@123');
 await page.screenshot({path : 'screenshot/todo-final.png', fullPage:true});
  await page.getByRole ('link' , {name : 'Close'}).click();
 await expect(page.getByText ('Samsung')).toBeVisible();

  await page.getByRole ('button', {name : 'Sign up'}).click();        

await page.getByRole('link' , {name : 'About us'}).click();
 await page.getByTitle ('play video').click();


 await page.getByLabel
});