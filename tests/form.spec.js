import {test , expect} from '@playwright/test'

test ('googleForm', async({page}) => 
{
  await page.goto('https://demo.automationtesting.in/Register.html');
  //await page(!close);
 // await page.waitForLoadState('domcontentloaded');

  await page.getByPlaceholder('First Name').fill('Jenifer');       //First Name
  await  page.getByPlaceholder('Last Name').fill('Aniston');       // Last Name

  await page.locator('textarea[ng-model="Adress"]')                 // Address
  .fill('47 , Shivaji Nagar , Pune');

  await page.locator('input[type="email"]').fill('abc@gmail.com');  //email
  await page.locator('input[type="tel"]').fill('985674666');

  await page.locator('input[type="radio"][value="Male"]').click();  //radio
//  await page.locator('input[type="checkbox"]').check();           //  error
 // await page.locator('input[type="checkbox"][value="Cricket"]').check(); //checkbox by name 
 // await page.locator('input[type="checkbox"][value="Movies"]').check();  // checkbox by name
 
    await page.locator('#checkbox1').check();                   //checkbox by id
    await page.locator('#checkbox2').check();                   // checkbox by id

    await page.locator('#msdd').click();
    await page.locator('li',{hasText:'Hindi'}).click();        // dropdown
    await page.locator('li',{hasText:'English'}).click();      // dropdown multiple select

    await page.locator('#Skills').selectOption('HTML');        // dropdown sinngle select
    await page.locator('#yearbox').selectOption('2000');            // dropdown by id
    await page.getByPlaceholder('Month').selectOption('November');  // dropdown by placeholder
    await page.locator('#daybox').selectOption('12');
 
    await page.locator('#firstpassword').fill('user23');       // passsword
    await page.locator('#secondpassword').fill('user23');      // confirm password


    await page.locator('#imagesrc').setInputFiles('./file/play.jpg');  ///upload file

    await page.locator('#submitbtn').click();          // button click


}

);