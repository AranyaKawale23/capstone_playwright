import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  await page.locator('.sc-hknOHE').first().click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
  await page.locator('div:nth-child(2) > div > .sc-gwZKzw > .sc-hknOHE').first().click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
  await page.locator('div:nth-child(3) > div > .sc-uVWWZ > .sc-hknOHE').first().click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
  await page.locator('div:nth-child(4) > div > .sc-gwZKzw > .sc-hknOHE').first().click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
  await page.locator('div:nth-child(5) > div > .sc-uVWWZ > .sc-hknOHE').first().click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
  await page.locator('div:nth-child(6) > div > .sc-gwZKzw > .sc-hknOHE').first().click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
  await page.locator('div:nth-child(7) > div > .sc-gwZKzw > .sc-hknOHE').first().click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
  await page.locator('div:nth-child(8) > div > .sc-gwZKzw > .sc-hknOHE').first().click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
  await page.locator('div:nth-child(9) > div > .sc-gwZKzw > .sc-hknOHE').first().click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
  await page.locator('div:nth-child(2) > div:nth-child(2) > div > .sc-uVWWZ > .sc-hknOHE').click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
  await page.locator('div:nth-child(2) > div:nth-child(5) > div > .sc-gwZKzw > .sc-hknOHE').click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
  await page.locator('div:nth-child(2) > div:nth-child(4) > div > .sc-gwZKzw > .sc-hknOHE').click();
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
  await page.getByLabel('click here to move next').first().click();
  await page.getByLabel('click here to move next').first().click();
  await page.getByLabel('click here to move previous').first().click();
  await page.getByLabel('click here to move previous').first().click();
});
test('test2', async ({ page }) => {
  // Visit the homepage
  await page.goto('https://www.swiggy.com/');
  await page.waitForTimeout(5000);
  // Click on the first item
  await page.locator(':nth-child(4) > .sc-jxOSlx > .sc-lcIPJg > :nth-child(1) > :nth-child(1) > :nth-child(1) > .sc-uVWWZ > .sc-hknOHE > .sc-bXCLTC').click();
  await page.waitForTimeout(5000);

  // Click on the second item
  await page.locator(':nth-child(7) > :nth-child(1) > :nth-child(1) > .sc-eTqNBC > .sc-fsvrbR > .sc-cWSHoV > .sc-eBMEME > .sc-dtInlm > .sc-bXCLTC').click();

  // Click the 'Add' button on the first card
  await page.locator(':nth-child(1) > .Card_container__20AEq > .Card_meta__1XgjI > .Card_metaFooter__3rweh > .Card_addButton__15wE5 > [style="position: relative;"] > .sc-jIGnZt > .sc-fBdRDi > .sc-gfoqjT > .sc-ehixzo').click();

  // Click on the first item in the cart
  await page.locator(':nth-child(1) > .sc-bVHCgj > :nth-child(1) > :nth-child(1) > .sc-jrrFIm').click();

  // Click the customize button in the footer
  await page.locator('[data-cy="customize-footer-add-button"]').click();

  // View the cart and proceed
  await page.locator('.styles_viewCart__32FxP > span').click();
  await page.locator('.WO7LQ').click();
});

test('test3', async ({ page }) => {
  // Visit the homepage
  await page.goto('https://www.swiggy.com/');
  await page.waitForTimeout(5000);

  // Click on the first item
  await page.locator(':nth-child(4) > .sc-jxOSlx > .sc-lcIPJg > :nth-child(1) > :nth-child(1) > :nth-child(1) > .sc-uVWWZ > .sc-hknOHE > .sc-bXCLTC').click();
  await page.waitForTimeout(5000);

  // Click on the second item
  await page.locator(':nth-child(7) > :nth-child(1) > :nth-child(1) > .sc-eTqNBC > .sc-fsvrbR > .sc-cWSHoV > .sc-eBMEME > .sc-dtInlm > .sc-bXCLTC').click();

  // Click the 'Add' button on the first card
  await page.locator(':nth-child(1) > .Card_container__20AEq > .Card_meta__1XgjI > .Card_metaFooter__3rweh > .Card_addButton__15wE5 > [style="position: relative;"] > .sc-jIGnZt > .sc-fBdRDi > .sc-gfoqjT > .sc-ehixzo').click();

  // Click on a different item (based on nth-child selector)
  await page.locator(':nth-child(1) > .sc-bVHCgj > :nth-child(1) > :nth-child(3) > .sc-jrrFIm > .sc-guWVcn > .sc-gHCuMn > .sc-aXZVg').click();

  // Click the customize button in the footer
  await page.locator('[data-cy="customize-footer-add-button"]').click();

  // View the cart and proceed
  await page.locator('.styles_viewCart__32FxP > span').click();
  await page.locator('.WO7LQ').click();
});
