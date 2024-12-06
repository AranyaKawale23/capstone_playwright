import { test, expect } from '@playwright/test';

// Load the data from testdata1.json (you can replace the path if necessary)
const testdata = JSON.parse(JSON.stringify(require("../../testdata1.json")));

test('test', async ({ page }) => {
  // Loop through each city in the cities array from the JSON
  for (const city of testdata.cities) {
    // Navigate to the Swiggy homepage
    await page.goto('https://www.swiggy.com/');
    // Click the link for the current city
    await page.getByRole('link', { name: `Order food online in ${city}` }).click();
  }

  // After visiting all cities, click the 'Show More' link
  await page.goto('https://www.swiggy.com/');
  await page.locator('a').filter({ hasText: 'Show More' }).first().click();
});
