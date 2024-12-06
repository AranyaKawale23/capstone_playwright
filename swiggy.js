class HomePage {
    // Locators for different city links
    bangaloreLink = () => cy.contains('Order food online in Bangalore');
    gurgaonLink = () => cy.contains('Order food online in Gurgaon');
    hyderabadLink = () => cy.contains('Order food online in Hyderabad');
    delhiLink = () => cy.contains('Order food online in Delhi');
    mumbaiLink = () => cy.contains('Order food online in Mumbai');
    puneLink = () => cy.contains('Order food online in Pune');
    kolkataLink = () => cy.contains('Order food online in Kolkata');
    chennaiLink = () => cy.contains('Order food online in Chennai');
    ahmedabadLink = () => cy.contains('Order food online in Ahmedabad');
    chandigarhLink = () => cy.contains('Order food online in Chandigarh');
    jaipurLink = () => cy.contains('Order food online in Jaipur');
    showMoreLink = () => cy.contains('Show More').first();
 
    logo = () => cy.get('._1NDpI');
    corporateLink = () => cy.get('.Uccaw > [href="https://www.swiggy.com/corporate/"]');
    partnerLink = () => cy.contains('Partner with us').first();
    getTheAppLink = () => cy.contains('Get the App');
    signInLink = () => cy.contains('Sign in');
    closeSidebarBtn = () => cy.get('._5-C04');
    closeSidebarConfirmBtn = () => cy.get('._2S7hX');
    deliveryLocationInput = () => cy.get('#location');
    searchBar = () => cy.contains('Search for restaurant, item');
    searchResultLink = () => cy.get('.sc-cYxjnA > .sc-aXZVg');
    foodDeliverySection = () => cy.get('[data-testid="navbar_container__2337992"] > .sc-kqGoIF > .sc-bXCLTC');
    instamartLink = () => cy.get('[data-testid="navbar_container__2337995"] > .sc-AHTeh > .sc-bXCLTC');
    dineInLink = () => cy.get('[data-testid="navbar_container__2337999"] > .sc-kqGoIF > .sc-bXCLTC');
    genieLink = () => cy.get('[data-testid="navbar_container__3018050"] > .sc-AHTeh > .sc-bXCLTC').contains('Genie');


    firstRestaurant = () => cy.get(':nth-child(4) > .sc-iapWAC > .sc-kqGoIF > :nth-child(1) > :nth-child(1) > :nth-child(1) > .sc-gwZKzw > .sc-hknOHE > .sc-bXCLTC');
    secondRestaurant = () => cy.get(':nth-child(7) > :nth-child(1) > :nth-child(1) > .sc-eTqNBC > .sc-fsvrbR > .sc-cWSHoV > .sc-eBMEME > .sc-dtInlm > .sc-bXCLTC');
    firstRestaurantAddButton = () => cy.get(':nth-child(1) > .Card_container__20AEq > .Card_meta__1XgjI > .Card_metaFooter__3rweh > .Card_addButton__15wE5 > [style="position: relative;"] > .sc-jIGnZt > .sc-fBdRDi > .sc-gfoqjT > .sc-ehixzo');
    firstRestaurantViewButton = () => cy.get(':nth-child(1) > .sc-bVHCgj > :nth-child(1) > :nth-child(1) > [data-testid="style-check-box"]');
    customizeAddButton = () => cy.get('[data-cy="customize-footer-add-button"]')
    cartButton = () => cy.get('.styles_viewCart__32FxP > span');
    checkoutButton = () => cy.get('.WO7LQ');
    secondRestaurantAddButton = () => cy.get(':nth-child(1) > .sc-bVHCgj > :nth-child(1) > :nth-child(3) > [data-testid="style-check-box"]');



    aboutUsLink = () => cy.get(':nth-child(2) > .sc-kpDqfm > :nth-child(2) > .sc-dLMFU > .sc-aXZVg');
    corporateLink = () => cy.get(':nth-child(2) > .sc-kpDqfm > :nth-child(3) > .sc-dLMFU > .sc-aXZVg');
    careersLink = () => cy.get(':nth-child(2) > .sc-kpDqfm > :nth-child(4) > .sc-dLMFU > .sc-aXZVg');
    teamLink = () => cy.get(':nth-child(2) > .sc-kpDqfm > :nth-child(5) > .sc-dLMFU > .sc-aXZVg');
    swiggyOneLink = () => cy.get(':nth-child(2) > .sc-kpDqfm > :nth-child(6) > .sc-dLMFU > .sc-aXZVg');
    instamartLink = () => cy.get(':nth-child(2) > .sc-kpDqfm > :nth-child(7) > .sc-dLMFU > .sc-aXZVg');
    dineoutLink = () => cy.get('.sc-kpDqfm > :nth-child(8) > .sc-dLMFU > .sc-aXZVg');
    genieLink = () => cy.get('.sc-kpDqfm > :nth-child(9) > .sc-dLMFU > .sc-aXZVg');
    minisLink = () => cy.get('.sc-kpDqfm > :nth-child(10) > .sc-dLMFU > .sc-aXZVg');
    helpSupportLink = () => cy.get(':nth-child(3) > .sc-kpDqfm > :nth-child(2) > .sc-dLMFU > .sc-aXZVg');
    partnerWithUsLink = () => cy.get(':nth-child(3) > .sc-kpDqfm > :nth-child(3) > .sc-dLMFU > .sc-aXZVg');
    rideWithUsLink = () => cy.get(':nth-child(3) > .sc-kpDqfm > :nth-child(4) > .sc-dLMFU > .sc-aXZVg');
    termsConditionsLink = () => cy.get(':nth-child(4) > .sc-kpDqfm > :nth-child(2) > .sc-dLMFU > .sc-aXZVg');
    cookiePolicyLink = () => cy.get(':nth-child(4) > .sc-kpDqfm > :nth-child(3) > .sc-dLMFU > .sc-aXZVg');
    privacyPolicyLink = () => cy.get(':nth-child(4) > .sc-kpDqfm > :nth-child(4) > .sc-dLMFU > .sc-aXZVg');
    exploreWithSwiggyLink = () => cy.get(':nth-child(6) > .sc-kpDqfm > :nth-child(2) > a > .sc-aXZVg');
    swiggyNewsLink = () => cy.get(':nth-child(6) > .sc-kpDqfm > :nth-child(2) > a > .sc-aXZVg');
    snackablesLink = () => cy.get(':nth-child(6) > .sc-kpDqfm > :nth-child(4) > a > .sc-aXZVg');
    linkedinLink = () => cy.get('[href="https://www.linkedin.com/company/swiggy-in/"] > img');
    instagramLink = () => cy.get('[href="https://www.instagram.com/swiggyindia/?hl=en"] > img');
    facebookLink = () => cy.get('[href="https://www.facebook.com/swiggy.in/"] > img');
    pinterestLink = () => cy.get('[href="https://in.pinterest.com/swiggyindia/"] > img');
    twitterLink = () => cy.get('[href="https://twitter.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"] > img');
   
    orderFoodLink = () => cy.get('[href="https://www.swiggy.com/city/bangalore"]');
    dosaRestaurantsLabel = () =>cy.get(':nth-child(2) > :nth-child(1) > .Collection__CollectionAnchor-sc-ioxwkf-0 > .Collection__ImageWrapper-sc-ioxwkf-2 > .sc-guDLRT');
    offerLink = () => cy.get(':nth-child(7) > :nth-child(1) > :nth-child(1) > .sc-eTqNBC > .sc-fsvrbR > .sc-cWSHoV > .sc-eBMEME > .sc-dtInlm > .sc-bXCLTC');
    firstAddButton = () => cy.get('#cid-Lunch_Corner > .main_container__3QMrw > :nth-child(2) > :nth-child(2) > [data-testid="normal-dish-item"] > .sc-ifjxht > .sc-isexnS > .sc-TOgAA > [style="position: relative;"] > .sc-jIGnZt > .sc-fBdRDi > .sc-gfoqjT > .sc-ehixzo');
    secondAddButton= () =>cy.get('.styles_viewCart__32FxP > span');
    viewCartButton = () => cy.get('.WO7LQ');
    loginLink= () =>cy.get('#mobile');
    
        nextButton = () => cy.get('.hLcUNm > .sc-fjvvzt');  // Same here, needs XPath plugin
        previousButton = () => cy.get(':nth-child(4) > [data-testid="grid-controller"] > .efdOGl > .sc-fjvvzt');  // XPath plugin required
        locations = () => cy.get('.sc-hknOHE');
        locationDetails = () => cy.get('.sc-uVWWZ');
        otherLocationDetails = () => cy.get('.sc-gwZKzw');
        swiggyLink= () =>cy.get('//div[@class="_241x5"]');

    // Method to visit the Swiggy homepage
    visitHomePage() {
        cy.visit('https://www.swiggy.com/');
    }

    // Methods to click on each city's "Order food online" link
    visitBangalore() {
        this.bangaloreLink().click();
    }

    visitGurgaon() {
        this.gurgaonLink().click();
    }

    visitHyderabad() {
        this.hyderabadLink().click();
    }

    visitDelhi() {
        this.delhiLink().click();
    }

    visitMumbai() {
        this.mumbaiLink().click();
    }

    visitPune() {
        this.puneLink().click();
    }

    visitKolkata() {
        this.kolkataLink().click();
    }

    visitChennai() {
        this.chennaiLink().click();
    }

    visitAhmedabad() {
        this.ahmedabadLink().click();
    }

    visitChandigarh() {
        this.chandigarhLink().click();
    }

    visitJaipur() {
        this.jaipurLink().click();
    }

    // Method to click the 'Show More' link
    clickShowMore() {
        this.showMoreLink().click();
    }
    visitHomePage() {
        cy.visit('https://www.swiggy.com/');
    }

    // Methods to interact with elements on the page
    clickLogo() {
        this.logo().click();
    }

    clickCorporateLink() {
        this.corporateLink().click();
    }

    clickPartnerLink() {
        this.partnerLink().click();
    }

    clickGetTheAppLink() {
        this.getTheAppLink().click();
    }

    clickSignInLink() {
        this.signInLink().click();
    }

    closeSidebar() {
        this.closeSidebarBtn().click();
        this.closeSidebarConfirmBtn().click();
    }

    enterDeliveryLocation(location) {
        this.deliveryLocationInput().click().type(location);
    }

    clickSearchBar() {
        this.searchBar().click();
    }

    clickSearchResultLink() {
        this.searchResultLink().click();
    }

    clickFoodDeliverySection() {
        this.foodDeliverySection().click();
    }

    clickInstamartLink() {
        this.instaMartLink().click();
    }

    clickDineInLink() {
        this.dineInLink().click();
    }

    clickGenieLink() {
        this.genieLink().click();
    }
    visitHomePage() {
        cy.visit('https://www.swiggy.com/');
    }

    clickFirstRestaurant() {
        this.firstRestaurant().click();
    }

    clickSecondRestaurant() {
        this.secondRestaurant().click();
    }

    addFirstRestaurantToCart() {
        this.firstRestaurantAddButton().click();
    }

    viewFirstRestaurantDetails() {
        this.firstRestaurantViewButton().click();
    }

    customizeAndAddToCart() {
        this.customizeAddButton().click();
    }

    viewCart() {
        this.cartButton().click();
    }

    proceedToCheckout() {
        this.checkoutButton().click();
    }

    addSecondRestaurantToCart() {
        this.secondRestaurantAddButton().click();
    }
    clickAboutUs() {
        this.aboutUsLink().click();
    }

    clickCorporate() {
        this.corporateLink().click();
    }

    clickCareers() {
        this.careersLink().click();
    }

    clickTeam() {
        this.teamLink().click();
    }

    clickSwiggyOne() {
        this.swiggyOneLink().click();
    }

    clickInstamart() {
        this.instamartLink().click();
    }

    clickDineout() {
        this.dineoutLink().click();
    }

    clickGenie() {
        this.genieLink().click();
    }

    clickMinis() {
        this.minisLink().click();
    }

    clickHelpSupport() {
        this.helpSupportLink().click();
    }

    clickPartnerWithUs() {
        this.partnerWithUsLink().click();
    }

    clickRideWithUs() {
        this.rideWithUsLink().click();
    }

    clickTermsConditions() {
        this.termsConditionsLink().click();
    }

    clickCookiePolicy() {
        this.cookiePolicyLink().click();
    }

    clickPrivacyPolicy() {
        this.privacyPolicyLink().click();
    }

    clickExploreWithSwiggy() {
        this.exploreWithSwiggyLink().click();
    }

    clickSwiggyNews() {
        this.swiggyNewsLink().click();
    }

    clickSnackables() {
        this.snackablesLink().click();
    }

    clickLinkedin() {
        this.linkedinLink().click();
    }

    clickInstagram() {
        this.instagramLink().click();
    }

    clickFacebook() {
        this.facebookLink().click();
    }

    clickPinterest() {
        this.pinterestLink().click();
    }

    clickTwitter() {
        this.twitterLink().click();
    }

    visitHomePage() {
        cy.visit('https://www.swiggy.com/');
      }
    
      // Method to click on the 'Order food online in Bangalore' link
      clickOrderFoodLink() {
        cy.get(this.orderFoodLink).click();
      }
    
      // Method to click on 'restaurants curated for dosa' label
      selectDosaRestaurants() {
        cy.get(this.dosaRestaurantsLabel).click().wait(5000);
      }
    
      // Method to select a specific offer (₹100 OFF ABOVE ₹249Saiva)
      selectOffer() {
        cy.get(this.offerLink).click();
      }
    
      // Method to click the 'Add' button on the first item
      addFirstItemToCart() {
        cy.get(this.firstAddButton).first().click();
      }
    
      // Method to click the 'Add' button on the second item
      addSecondItemToCart() {
        cy.get(this.secondAddButton).first().click();
      }
    
      // Method to view the cart
      viewCart() {
        cy.get(this.viewCartButton).click();
      }
    
      // Method to click on the 'LOG IN' link
      clickLoginLink() {
        cy.contains(this.loginLink).click();
      }
      visitHomePage() {
        cy.visit('https://www.swiggy.com/');
    }

    // Methods to interact with various elements
    clickOrderFoodLink() {
        cy.get(this.orderFoodLink).should('be.visible').click().wait(6000);
    }

    selectDosaRestaurants() {
        cy.get(this.dosaRestaurantsLabel).should('be.visible').click().wait(5000);
    }

    selectOffer() {
        cy.get(this.offerLink).should('be.visible').click().wait(5000);
    }

    addFirstItemToCart() {
        cy.get(this.firstAddButton).first().click().wait(5000);
    }

    addSecondItemToCart() {
        cy.get(this.secondAddButton).first().click().wait(5000);
    }

    viewCart() {
        cy.get(this.viewCartButton).click();
    }

    clickLoginLink() {
        cy.contains(this.loginLink).click();
    }


    visitHomePage() {
        cy.visit('https://www.swiggy.com/');
    }

    // Methods to interact with elements on the page
    clickLogo() {
        this.logo().click();
    }

    clickCorporateLink() {
        this.corporateLink().click();
    }

    clickPartnerLink() {
        this.partnerLink().click();
    }

    clickGetTheAppLink() {
        this.getTheAppLink().click();
    }

    clickSignInLink() {
        this.signInLink().click();
    }

    closeSidebar() {
        this.closeSidebarBtn().click();
        this.closeSidebarConfirmBtn().click();
    }

    enterDeliveryLocation(location) {
        this.deliveryLocationInput().click().type(location);
    }

    clickSearchBar() {
        this.searchBar().click();
    }

    clickSearchResultLink() {
        this.searchResultLink().click();
    }

    clickFoodDeliverySection() {
        this.foodDeliverySection().click();
    }

    clickInstamartLink() {
        this.instaMartLink().click();
    }

    clickDineInLink() {
        this.dineInLink().click();
    }

    clickGenieLink() {
        this.genieLink().click();
    }

      clickNextButton() {
        cy.get('.hLcUNm > .sc-fjvvzt').click(); // XPath selectors (need cypress-xpath plugin)
      }
      clickPreviousButton() {
        cy.get(':nth-child(4) > [data-testid="grid-controller"] > .efdOGl > .sc-fjvvzt').click();
      }
      clickLocation(index) {
        cy.get('.sc-hknOHE').click(); // Use `eq` to select a location by index
      }
      clickLocationDetails(index) {
        cy.get('.sc-uVWWZ').click(); // Use `eq` to select a location detail by index
      }
      clickOtherLocationDetails(index) {
        cy.get('.sc-gwZKzw').click(); // Use `eq` to select other location details by index
      }
      clickShowMoreButton() {
        cy.get('button').contains('Show More').click();  // This clicks the "Show More" button or similar
      }
    }
    


export default HomePage;
    