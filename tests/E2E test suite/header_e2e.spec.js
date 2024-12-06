import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify URL
  await expect(page).toHaveURL('https://www.swiggy.com/');
});

test('test1', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify title
  await expect(page).toHaveTitle('Order Food & Groceries. Discover the best restaurants. Swiggy it!');
});

test('test2', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify swiggy logo
  await page.locator('._1NDpI').click();
});

test('test3', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify swiggy corporate link
  await page.getByRole('link', { name: 'Swiggy Corporate' }).nth(1).click();
});

test('test4', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify partner with us link
  await page.getByRole('link', { name: 'Partner with us' }).first().click();
});

test('test5', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify get the app link
  await page.getByText('Get the App').click();
});

test('test6', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify sign in link
  await page.getByText('Sign in', { exact: true }).click();
});

test('test7', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify close sidebar after sign in
  await page.locator('//span[@class="_2S7hX icon-close-thin"]').click();
});

test('test8', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify delivery location input
  await page.getByPlaceholder('Enter your delivery location').click();
  await page.getByPlaceholder('Enter your delivery location').fill('nehru nagar');
});

test('test9', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify search bar for restaurants
  await page.getByText('Search for restaurant, item').click();
});

test('test10', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify swiggy link from search results
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
});

test('test11', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify food delivery section
  await page.getByTestId('navbar_container__2337992').getByRole('link', { name: 'Food' }).click();
});

test('test12', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify swiggy link from food section
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
});

test('test13', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify Instamart link
  await page.getByRole('link', { name: 'IM' }).click();
});

test('test14', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify 'Order food & groceries' link
  await page.getByText('Order food & groceries.').click();
});

test('test15', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify dine-in link
  await page.getByRole('link', { name: 'DO' }).click();
});

test('test16', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify Genie link
  await page.getByTestId('navbar_container__3018050').getByRole('link', { name: 'Genie' }).click();
});
