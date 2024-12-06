const { test, expect } = require('@playwright/test');
const HomePage = require('../../SwiggyPg');  // Importing the HomePage class

test('Swiggy Footer Links Interaction with Popups', async ({ page }) => {
  const homePage = new HomePage(page);

  // Step 1: Visit the Swiggy homepage
  await homePage.visitHomePage();
  await homePage.visitHomePage();

  // Step 20: Visit each city's page separately
  await homePage.visitBangalore();
  await homePage.visitHomePage(); // Reset to homepage

  await homePage.visitGurgaon();
  await homePage.visitHomePage(); // Reset to homepage

  await homePage.visitHyderabad();
  await homePage.visitHomePage(); // Reset to homepage

  await homePage.visitDelhi();
  await homePage.visitHomePage(); // Reset to homepage

  await homePage.visitMumbai();
  await homePage.visitHomePage(); // Reset to homepage

  await homePage.visitPune();
  await homePage.visitHomePage(); // Reset to homepage

  await homePage.visitKolkata();
  await homePage.visitHomePage(); // Reset to homepage

  await homePage.visitChennai();
  await homePage.visitHomePage(); // Reset to homepage

  await homePage.visitAhmedabad();
  await homePage.visitHomePage(); // Reset to homepage

  await homePage.visitChandigarh();
  await homePage.visitHomePage(); // Reset to homepage

  await homePage.visitJaipur();
  await homePage.visitHomePage(); // Reset to homepage

  // Step 3: Click the 'Show More' link
  await homePage.clickShowMore();
});

