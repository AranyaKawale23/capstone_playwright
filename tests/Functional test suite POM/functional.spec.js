// home.spec.js
const { test, expect } = require('@playwright/test');
const HomePage = require('../../SwiggyPg');  // Importing the HomePage class

test('Swiggy Homepage Interaction', async ({ page }) => {
  // Create an instance of HomePage
  const homePage = new HomePage(page);
  // Step 1: Visit the Swiggy homepage
  await homePage.visitHomePage();
  // Step 2: Click the delivery location input
  await homePage.clickDeliveryLocation();
  // Step 3: Search for a restaurant
  await homePage.searchForRestaurant();
  // Step 4: Click the Swiggy link
  await homePage.clickSwiggyLink();
  // Step 5: Click the Food link
  await homePage.clickFoodLink();
  // Step 6: Click the IM (Instamart) link
  await homePage.clickIMLink();
  // Step 7: Visit Swiggy homepage again to reset state
  await homePage.visitHomePage();
  // Step 8: Click the DO (Dineout) link
  await homePage.clickDOLink();
  // Step 9: Visit Swiggy homepage again to reset state
  await homePage.visitHomePage();
  // Step 10: Click the Genie link
  await homePage.clickGenieLink();
  // Step 11: Visit Swiggy homepage again to reset state
  await homePage.visitHomePage();
  // Step 12: Click the 'Get the App' button
  await homePage.clickGetAppButton();
  // Step 15: Visit Swiggy homepage again to reset state
  await homePage.visitHomePage();
  // Pause the browser for inspection (optional)
  
  // Step 16: Click on different locations by index
  for (let i = 0; i < 10; i++) {
    await homePage.clickLocation(i);
    await homePage.clickSwiggyLink();
  }
  // Step 17: Click next and previous buttons
  await homePage.clickNextButton();
  await homePage.clickNextButton();
  await homePage.clickPreviousButton();
  await homePage.clickPreviousButton();
  
  const linkNames = [
    'Swiggy Corporate',
    'Careers',
    'Team',
    'Swiggy One',
    'Swiggy Instamart',
    'Swiggy Dineout',
    'Swiggy Genie',
    'Minis',
    'Help & Support',
    'Swiggy',
    'Partner with us',
    'Ride with us',
    'Terms & Conditions',
    'Cookie Policy',
    'Privacy Policy',
    'Explore with Swiggy',
    'Swiggy News',
    'Snackables',
    'Linkedin',
    'Instagram',
    'Facebook',
    'Pinterest',
    'Twitter'
  ];

  // Step 18: Loop through all link names, click each link, and wait for the popup
  for (const linkName of linkNames) {
    const popupPage = await homePage.clickLinkAndWaitForPopup(linkName);
   
  }

  // Step 19: Reset state by visiting the homepage again
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
