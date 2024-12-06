const { test, expect } = require('@playwright/test');
const HomePage = require('../../SwiggyPg');  // Importing the HomePage class

test('Swiggy Footer Links Interaction with Popups', async ({ page }) => {
  const homePage = new HomePage(page);

  // Step 1: Visit the Swiggy homepage
  await homePage.visitHomePage();

  // Step 2: Loop through the links and click each one, waiting for the popup to open
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

  for (const linkName of linkNames) {
    const popupPage = await homePage.clickLinkAndWaitForPopup(linkName);
    
  }

  // Step 3: Reset state by visiting the homepage again
  await homePage.visitHomePage();
});
