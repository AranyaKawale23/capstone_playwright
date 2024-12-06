const { test, expect } = require('@playwright/test');
const HomePage = require('../../SwiggyPg');  // Import the HomePage class

test('test', async ({ page }) => {
  // Create an instance of HomePage
  const homePage = new HomePage(page);
  
  // Step 1: Visit the Swiggy homepage
  await homePage.visitHomePage();
  
  // Step 2: Click on the 'Order food online in Bangalore' link
  await homePage.clickOrderFoodLink();
  
  // Step 3: Click on 'restaurants curated for dosa' label
  await homePage.selectDosaRestaurants();
  
  // Step 4: Click on the specific offer link (₹100 OFF ABOVE ₹249Saiva)
  await homePage.selectOffer();
  
  // Step 5: Add the first item to the cart
  await homePage.addFirstItemToCart();
  
  // Step 6: Add another item to the cart
  await homePage.addSecondItemToCart();
  
  // Step 7: View the cart
  await homePage.viewCart();
  
  // Step 8: Click on the 'LOG IN' link
  await homePage.clickLoginLink();
});
