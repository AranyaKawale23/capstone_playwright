import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.getByRole('link', { name: 'Order food online in Bangalore' }).click();
});
test('test1', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.getByRole('link', { name: 'Order food online in Gurgaon' }).click();
});
test('test2', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.getByRole('link', { name: 'Order food online in Hyderabad' }).click();
});
test('test3', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.getByRole('link', { name: 'Order food online in Delhi' }).click();
});
test('test4', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.getByRole('link', { name: 'Order food online in Mumbai' }).click();
});
test('test5', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.getByRole('link', { name: 'Order food online in Pune' }).click();
});
  test('test6', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.getByRole('link', { name: 'Order food online in Kolkata' }).click();
  });
  test('test7', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.getByRole('link', { name: 'Order food online in Chennai' }).click();
  });
  test('test8', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.getByRole('link', { name: 'Order food online in Ahmedabad' }).click();
  })
  test('test9', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.getByRole('link', { name: 'Order food online in Chandigarh' }).click();
  });
  test('test10', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.getByRole('link', { name: 'Order food online in Jaipur' }).click();
  });
  test('test11', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.locator('a').filter({ hasText: 'Show More' }).first().click();
});