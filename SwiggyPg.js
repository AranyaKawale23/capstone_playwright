// HomePage.js
class HomePage {
  constructor(page) {
    this.page = page;

    // Locators
    this.deliveryLocationInput = page.locator('input[placeholder="Enter your delivery location"]');
    this.searchRestaurantLink = page.locator('text=Search for restaurant, item');
    this.swiggyLink = page.locator('role=link[name="Swiggy"]');
    this.foodLink = page.locator('role=link[name="Food"]');
    this.imLink = page.locator("//img[@alt='IM']");
    this.doLink = page.locator('role=link[name="DO"]');
    this.genieLink = page.locator('role=link[name="Genie"]');
    this.getAppButton = page.locator('text=Get the App');
    this.swiggyLink = page.locator('//div[@class="_241x5"]');
    this.nextButton = page.locator('//div[4]//div[1]//button[2]//div[1]');
    this.previousButton = page.locator('//body[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/button[1]');
    this.locations = page.locator('.sc-hknOHE');
    this.locationDetails = page.locator('.sc-uVWWZ');
    this.otherLocationDetails = page.locator('.sc-gwZKzw');
    this.links = [
      { name: 'About Us', locator: page.locator('//div[normalize-space()="About Us"]') },
      { name: 'Swiggy Corporate', locator: page.locator('//div[contains(text(),"Swiggy Corporate")]') },
      { name: 'Careers', locator: page.locator('//div[normalize-space()="Careers"]') },
      { name: 'Team', locator: page.locator('//div[normalize-space()="Team"]') },
      { name: 'Swiggy One', locator: page.locator('//div[normalize-space()="Swiggy One"]') },
      { name: 'Swiggy Instamart', locator: page.locator('//div[normalize-space()="Swiggy Instamart"]') },
      { name: 'Swiggy Dineout', locator: page.locator('//div[normalize-space()="Swiggy Dineout"]') },
      { name: 'Swiggy Genie', locator: page.locator('//div[normalize-space()="Swiggy Genie"]') },
      { name: 'Minis', locator: page.locator('//div[normalize-space()="Minis"]') },
      { name: 'Help & Support', locator: page.locator('//div[normalize-space()="Help & Support"]') },
      { name: 'Partner with us', locator: page.locator('//div[normalize-space()="Partner with us"]') },
      { name: 'Ride with us', locator: page.locator('//div[normalize-space()="Ride with us"]') },
      { name: 'Terms & Conditions', locator: page.locator('//div[normalize-space()="Terms & Conditions"]') },
      { name: 'Cookie Policy', locator: page.locator('//div[normalize-space()="Cookie Policy"]') },
      { name: 'Privacy Policy', locator: page.locator('//div[normalize-space()="Privacy Policy"]') },
      { name: 'Explore with Swiggy', locator: page.locator('//div[normalize-space()="Explore with Swiggy"]') },
      { name: 'Swiggy News', locator: page.locator('//div[normalize-space()="Swiggy News"]') },
      { name: 'Snackables', locator: page.locator('//div[normalize-space()="Snackables"]') },
      { name: 'Linkedin', locator: page.locator('//img[@alt="Linkedin"]') },
      { name: 'Instagram', locator: page.locator('//img[@alt="Instagram"]') },
      { name: 'Facebook', locator: page.locator('//img[@alt="Facebook"]') },
      { name: 'Pinterest', locator: page.locator('//img[@alt="Pinterest"]') },
      { name: 'Twitter', locator: page.locator('//img[@alt="Twitter"]') }
    ];
    this.links = [
    this.bangaloreLink = page.locator('role=link[name="Order food online in Bangalore"]'),
    this.gurgaonLink = page.locator('role=link[name="Order food online in Gurgaon"]'),
    this.hyderabadLink = page.locator('role=link[name="Order food online in Hyderabad"]'),
    this.delhiLink = page.locator('role=link[name="Order food online in Delhi"]'),
    this.mumbaiLink = page.locator('role=link[name="Order food online in Mumbai"]'),
    this.puneLink = page.locator('role=link[name="Order food online in Pune"]'),
    this.kolkataLink = page.locator('role=link[name="Order food online in Kolkata"]'),
    this.chennaiLink = page.locator('role=link[name="Order food online in Chennai"]'),
    this.ahmedabadLink = page.locator('role=link[name="Order food online in Ahmedabad"]'),
    this.chandigarhLink = page.locator('role=link[name="Order food online in Chandigarh"]'),
    this.jaipurLink = page.locator('role=link[name="Order food online in Jaipur"]'),
    this.showMoreLink = page.locator('a').filter({ hasText: 'Show More' }).first(),
    ]

    this.firstItem = page.locator(':nth-child(4) > .sc-iapWAC > .sc-kqGoIF > :nth-child(1) > :nth-child(1) > :nth-child(1) > .sc-gwZKzw > .sc-hknOHE > .sc-bXCLTC');
    this.secondItem = page.locator(':nth-child(7) > :nth-child(1) > :nth-child(1) > .sc-eTqNBC > .sc-fsvrbR > .sc-cWSHoV > .sc-eBMEME > .sc-dtInlm > .sc-bXCLTC');
    this.addButton = page.locator(':nth-child(1) > .Card_container__20AEq > .Card_meta__1XgjI > .Card_metaFooter__3rweh > .Card_addButton__15wE5 > [style="position: relative;"] > .sc-jIGnZt > .sc-fBdRDi > .sc-gfoqjT > .sc-ehixzo');
    this.cartItem = page.locator(':nth-child(1) > .sc-bVHCgj > :nth-child(1) > :nth-child(1) > [data-testid="style-check-box"]');
    this.customizeFooterButton = page.locator('[data-cy="customize-footer-add-button"]');
    this.viewCartButton = page.locator('.styles_viewCart__32FxP > span');
    this.proceedButton = page.locator('.WO7LQ');
    this.differentCartItem = page.locator(':nth-child(1) > .sc-bVHCgj > :nth-child(1) > :nth-child(3) > [data-testid="style-check-box"]');
  
  
  // Locators for various elements on the page
  this.orderFoodLink = page.locator('role=link[name="Order food online in Bangalore"]');
  this.dosaRestaurantsLabel = page.locator('label:has-text("restaurants curated for dosa")');
  this.offerLink = page.locator('a:has-text("₹100 OFF ABOVE ₹249Saiva")');
  this.firstAddButton = page.locator('.sc-TOgAA > div > .sc-jIGnZt > .sc-fBdRDi > .sc-gfoqjT > button:nth-child(2)').first();
  this.secondAddButton = page.locator('div:nth-child(6) > .sc-cbelJu > .sc-ifjxht > .sc-isexnS > .sc-TOgAA > div > .sc-jIGnZt > .sc-fBdRDi > .sc-gfoqjT > button:nth-child(2)').first();
  this.viewCartButton = page.locator('role=link[name="2 Cart"]');
  this.loginLink = page.locator('text=Have an account?LOG IN');
}

  // Method to visit the Swiggy homepage
  async visitHomePage() {
    await this.page.goto('https://www.swiggy.com/');
  }
  // Method to click the delivery location input
  async clickDeliveryLocation() {
    await this.deliveryLocationInput.click();
    await this.page.goto('https://www.swiggy.com/');
  }
  // Method to search for a restaurant
  async searchForRestaurant() {
    await this.searchRestaurantLink.click();
    await this.page.goto('https://www.swiggy.com/');
  }
  // Method to click the Swiggy link
  async clickSwiggyLink() {
    await this.page.goto('https://www.swiggy.com/');
  }
  // Method to click the Food link
  async clickFoodLink() {
    await this.foodLink.click();
    await this.page.goto('https://www.swiggy.com/');
  }
  // Method to click the IM link
  async clickIMLink() {
    await this.imLink.click();
    await this.page.goto('https://www.swiggy.com/');
  }
  // Method to click the DO link
  async clickDOLink() {
    await this.doLink.click();
    await this.page.goto('https://www.swiggy.com/');
  }
  // Method to click the Genie link
  async clickGenieLink() {
    await this.genieLink.click();
    await this.page.goto('https://www.swiggy.com/');
  }
  // Method to click the 'Get the App' button
  async clickGetAppButton() {
    await this.getAppButton.click();
    await this.page.goto('https://www.swiggy.com/');
  }
    // Method to click on Swiggy link
    async clickSwiggyLink() {
      await this.swiggyLink.click();
      await this.page.goto('https://www.swiggy.com/');
    }
  
    // Method to click on the next button
    async clickNextButton() {
      await this.nextButton.click();
      await this.page.goto('https://www.swiggy.com/');
    }
  
    // Method to click on the previous button
    async clickPreviousButton() {
      await this.previousButton.click();
      await this.page.goto('https://www.swiggy.com/');
    }
  
    // Method to click on a specific location (by index)
    async clickLocation(index) {
      await this.locations.nth(index).click();
      await this.page.goto('https://www.swiggy.com/');
    }
  
    // Method to click on location details
    async clickLocationDetails(index) {
      await this.locationDetails.nth(index).click();
      await this.page.goto('https://www.swiggy.com/');
    }
  
    // Method to click on other location details
    async clickOtherLocationDetails(index) {
      await this.otherLocationDetails.nth(index).click();
      await this.page.goto('https://www.swiggy.com/');
    }
  
    async clickNextButton() {
      await this.nextButton.click();
      await this.page.goto('https://www.swiggy.com/');
    }
  
    // Method to click on the previous button
    async clickPreviousButton() {
      await this.previousButton.click();
      await this.page.goto('https://www.swiggy.com/');
    }

    
     // Method to visit the Swiggy homepage
  async visitHomePage() {
    await this.page.goto('https://www.swiggy.com/');
  }

  async clickLinkAndWaitForPopup(linkName) {
    const link = this.links.find(l => l.name === linkName); 
    await this.page.goto('https://www.swiggy.com/');
    // Find the link object by name
  }
  async visitHomePage() {
    await this.page.goto('https://www.swiggy.com/');
  }

  // Methods to click each city's "Order food online" link
  async visitBangalore() {
    await this.bangaloreLink.click();
  }

  async visitGurgaon() {
    await this.gurgaonLink.click();
  }

  async visitHyderabad() {
    await this.hyderabadLink.click();
  }

  async visitDelhi() {
    await this.delhiLink.click();
  }

  async visitMumbai() {
    await this.mumbaiLink.click();
  }

  async visitPune() {
    await this.puneLink.click();
  }

  async visitKolkata() {
    await this.kolkataLink.click();
  }

  async visitChennai() {
    await this.chennaiLink.click();
  }

  async visitAhmedabad() {
    await this.ahmedabadLink.click();
  }

  async visitChandigarh() {
    await this.chandigarhLink.click();
  }

  async visitJaipur() {
    await this.jaipurLink.click();
  }

  // Method to click the 'Show More' link
  async clickShowMore() {
    await this.showMoreLink.click();
  }

  async visitHomePage() {
    await this.page.goto('https://www.swiggy.com/');
    await this.page.waitForTimeout(5000);  // Wait for page to load
  }

  // Method to click on the first item
  async clickFirstItem() {
    await this.firstItem.click();
    await this.page.waitForTimeout(5000);
  }

  // Method to click on the second item
  async clickSecondItem() {
    await this.secondItem.click();
    await this.page.waitForTimeout(5000);
  }

  // Method to click the 'Add' button on the first card
  async addItemToCart() {
    await this.addButton.click();
  }

  // Method to click the first item in the cart
  async clickCartItem() {
    await this.cartItem.click();
  }

  // Method to click the customize button in the footer
  async clickCustomizeFooterButton() {
    await this.customizeFooterButton.click();
  }

  // Method to view the cart and proceed
  async viewAndProceedCart() {
    await this.viewCartButton.click();
    await this.proceedButton.click();
  }

  // Method to click on a different item in the cart (based on nth-child selector)
  async clickDifferentCartItem() {
    await this.differentCartItem.click();
  }
  
  async visitHomePage() {
    await this.page.goto('https://www.swiggy.com/');
  }

  // Method to click on the 'Order food online in Bangalore' link
  async clickOrderFoodLink() {
    await this.orderFoodLink.click();
  }

  // Method to click on the 'restaurants curated for dosa' label
  async selectDosaRestaurants() {
    await this.dosaRestaurantsLabel.click();
  }

  // Method to select a specific offer (₹100 OFF ABOVE ₹249Saiva)
  async selectOffer() {
    await this.offerLink.click();
  }

  // Method to click the 'Add' button on the first item
  async addFirstItemToCart() {
    await this.firstAddButton.click();
  }

  // Method to click the 'Add' button on the second item
  async addSecondItemToCart() {
    await this.secondAddButton.click();
  }

  // Method to view the cart
  async viewCart() {
    await this.viewCartButton.click();
  }

  // Method to click on the 'LOG IN' link
  async clickLoginLink() {
    await this.loginLink.click();
  }
}

module.exports = HomePage;




  

