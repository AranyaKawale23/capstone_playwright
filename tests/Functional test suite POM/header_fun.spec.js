const { test, expect } = require('@playwright/test');
const HomePage = require('../../SwiggyPg');

// Ensure each test runs in isolation
test.describe('Swiggy Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    // Setup: Navigate to the Swiggy homepage before each test
    const homePage = new HomePage(page);
    await homePage.visitHomePage();
  });

  test('Swiggy Homepage Interaction', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickDeliveryLocation();
    await homePage.searchForRestaurant();
    await homePage.clickSwiggyLink();
    await homePage.clickFoodLink();
  });

  test('Swiggy Interactions', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickIMLink();
    await homePage.visitHomePage();  // Reset state if necessary
    await homePage.clickDOLink();
    await homePage.visitHomePage();  // Reset state if necessary
    await homePage.clickGenieLink();
  });

});
