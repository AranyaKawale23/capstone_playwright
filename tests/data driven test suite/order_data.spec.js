import { test, expect } from '@playwright/test';

// Load the data from testdata.json (adjust the path as necessary)
const testdata = JSON.parse(JSON.stringify(require("../../testdata1.json")));

test('test', async ({ page }) => {
  // Loop through each city in the cities array
  for (const city of testdata.cities) {
    console.log(`Testing city: ${city}`);
    
    // Navigate to Swiggy homepage
    await page.goto('https://www.swiggy.com/');

    // Loop through each element from the selectors
    for (const element of testdata.selectors.elements) {
      // Click on the element
      await page.locator(element).first().click();

      // Click on the Swiggy link after the element is clicked
      await page.locator(testdata.selectors.swiggyLink).click();
    }

    // Pagination actions: Next button click
    await page.locator(testdata.selectors.nextButton).first().click();
    await page.locator(testdata.selectors.nextButton).first().click();

    // Pagination actions: Previous button click
    await page.locator(testdata.selectors.previousButton).first().click();
    await page.locator(testdata.selectors.previousButton).first().click();
  }
});
