import { test, expect } from '@playwright/test';

// Load the data from testdata.json
const testdata = JSON.parse(JSON.stringify(require("../../testdata.json")));

test('test', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Verify swiggy logo click
  await page.locator(testdata.roles.swiggyLogo).click();
});

test('test1', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Verify Swiggy Corporate link
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: testdata.roles.swiggyCorporateLink }).nth(1).click();
  await page1Promise;
});

test('test2', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Verify Partner with Us link
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: testdata.roles.partnerWithUsLink }).first().click();
  await page2Promise;
});

test('test3', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Verify Get the App link
  await page.getByText(testdata.texts.getTheAppText).click();
});

test('test4', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Verify Sign In link
  await page.getByText(testdata.texts.signInText, { exact: true }).click();
});

test('test5', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Close sidebar after sign in
  await page.locator('#overlay-sidebar-root span').click();
});

test('test6', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Enter delivery location
  await page.getByPlaceholder(testdata.texts.searchPlaceholder).click();
  await page.getByLabel('rating-down-down-icon').click();
  await page.getByRole('button', { name: 'Use my current location' }).click();
});

test('test7', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Search for restaurant, item
  await page.getByText(testdata.texts.searchBarText).click();
});

test('test8', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Click Swiggy link
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
});

test('test9', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Click on food section
  await page.getByTestId('navbar_container__2337992').getByRole('link', { name: testdata.roles.foodDeliveryLink }).click();
});

test('test10', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Click Swiggy link from food section
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
});

test('test11', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Click Instamart link
  await page.getByRole('link', { name: testdata.roles.instamartLink }).click();
});

test('test12', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Click Dine-in link
  await page.getByRole('link', { name: 'DO' }).click();
});

test('test13', async ({ page }) => {
  await page.goto(testdata.urls.swiggyHome);

  // Click Genie link
  await page.getByTestId('navbar_container__3018050').getByRole('link', { name: testdata.roles.genieLink }).click();
});
