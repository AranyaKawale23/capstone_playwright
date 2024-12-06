import { test, expect } from '@playwright/test';

// Load the data from testdata.json
const testdata = JSON.parse(JSON.stringify(require("../../testdata.json")));

test('data-driven testing for swiggy', async ({ page }) => {
  // Test the home page
  await page.goto(testdata.urls.swiggyHome);

  // Verify URL
  await expect(page).toHaveURL(testdata.urls.swiggyHome);

  // Verify title
  await expect(page).toHaveTitle('Order Food & Groceries. Discover the best restaurants. Swiggy it!');

  // Verify swiggy logo click
  await page.locator(testdata.roles.swiggyLogo).click();

  // Verify Swiggy Corporate link
  await page.getByRole('link', { name: testdata.roles.swiggyCorporateLink }).nth(1).click();
  await page.goto(testdata.urls.swiggyHome);

  // Verify Partner With Us link
  await page.getByRole('link', { name: testdata.roles.partnerWithUsLink }).first().click();
  await page.goto(testdata.urls.swiggyHome);

  // Verify Get the App link
  await page.getByText(testdata.texts.getTheAppText).click();

  // Verify Sign In link
  await page.getByText(testdata.texts.signInText, { exact: true }).click();
  await page.locator('#overlay-sidebar-root span').click();

  // Verify Delivery Location
  await page.getByPlaceholder(testdata.texts.searchPlaceholder).click();
  await page.getByPlaceholder(testdata.texts.searchPlaceholder).fill('nehru nagar');

  // Verify search bar for restaurant
  await page.getByText(testdata.texts.searchBarText).click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();

  // Verify Food Delivery link
  await page.getByTestId('navbar_container__2337992').getByRole('link', { name: testdata.roles.foodDeliveryLink }).click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();

  // Verify Instamart link
  await page.getByRole('link', { name: testdata.roles.instamartLink }).click();
  await page.goto(testdata.urls.swiggyHome);
  await page.getByText('Order food & groceries.').click();

  // Verify Genie link
  await page.getByTestId('navbar_container__3018050').getByRole('link', { name: testdata.roles.genieLink }).click();
  await page.goto(testdata.urls.swiggyHome);


  });
  
