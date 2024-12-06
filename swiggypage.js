class HomePage {
  constructor(page) {
    this.page = page;

    // Locators for all the links in the footer
    this.links = [
      { name: 'About Us', locator: page.locator('//div[normalize-space()="About Us"]') },
      { name: 'Swiggy Corporate', locator: page.locator('//div[contains(text(),"Swiggy Corporate")]') },
      { name: 'Careers', locator: page.locator('role=link[name="Careers"]') },
      { name: 'Team', locator: page.locator('role=link[name="Team"]') },
      { name: 'Swiggy One', locator: page.locator('role=link[name="Swiggy One"]') },
      { name: 'Swiggy Instamart', locator: page.locator('role=link[name="Swiggy Instamart"]') },
      { name: 'Swiggy Dineout', locator: page.locator('role=link[name="Swiggy Dineout"]') },
      { name: 'Swiggy Genie', locator: page.locator('role=link[name="Swiggy Genie"]') },
      { name: 'Minis', locator: page.locator('role=link[name="Minis"]') }
    ];
  }

  // Method to visit the Swiggy homepage
  async visitHomePage() {
    await this.page.goto('https://www.swiggy.com/');
  }

  // Method to click on a link and wait for the popup
  async clickLinkAndWaitForPopup(linkName) {
    const link = this.links.find(l => l.name === linkName); // Find the link object by name
    const pagePromise = this.page.waitForEvent('popup');
    await link.locator.click(); // Click the link
    const popupPage = await pagePromise; // Wait for the popup to appear
    return popupPage; // Return the popup page to interact with it if needed
  }
}

module.exports = HomePage;
