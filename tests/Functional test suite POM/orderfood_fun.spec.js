const { test, expect } = require('@playwright/test');
const HomePage = require('../../SwiggyPg');  // Importing the HomePage class

test('test', async ({ page }) => {
  // Create an instance of HomePage
  const homePage = new HomePage(page);
  
  // Step 1: Visit the Swiggy homepage
  await homePage.visitHomePage();
  
  // Step 2: Click on the first item
  await homePage.clickFirstItem();
  
  // Step 3: Click on the second item
  await homePage.clickSecondItem();
  
  // Step 4: Add the first item to the cart
  await homePage.addItemToCart();
  
  // Step 5: Click on the first item in the cart
  await homePage.clickCartItem();
  
  // Step 6: Click on the customize button in the footer
  await homePage.clickCustomizeFooterButton();
  
  // Step 7: View the cart and proceed
  await homePage.viewAndProceedCart();
});

test('test second case', async ({ page }) => {
  // Create an instance of HomePage
  const homePage = new HomePage(page);
  
  // Step 1: Visit the Swiggy homepage
  await homePage.visitHomePage();
  
  // Step 2: Click on the first item
  await homePage.clickFirstItem();
  
  // Step 3: Click on the second item
  await homePage.clickSecondItem();
  
  // Step 4: Add the first item to the cart
  await homePage.addItemToCart();
  
  // Step 5: Click on a different item (based on nth-child selector)
  await homePage.clickDifferentCartItem();
  
  // Step 6: Click on the customize button in the footer
  await homePage.clickCustomizeFooterButton();
  
  // Step 7: View the cart and proceed
  await homePage.viewAndProceedCart();
});
