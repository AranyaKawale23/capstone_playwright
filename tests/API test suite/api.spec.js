const { test, expect } = require("@playwright/test");

test.use({
  baseURL: "https://www.swiggy.com/",
  ignoreHTTPSErrors: true,
});

// Positive API Testing (Expecting 200)
test.describe("API GET (Positive Test)", () => {
  const endpoints = [
    "https://www.swiggy.com/",
    "https://www.swiggy.in/",
    "https://www.swiggy.net/",
    "https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png",
    "https://www.googletagmanager.com/gtag/destination?id=AW-815667960&l=dataLayer&cx=c&gtm=45He4bk0v78036788za200",
    "https://www.swiggy.com/restaurants",
    "https://www.swiggy.com/genie",
    "https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
    "https://www.dineout.co.in/",
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9768977&lng=80.237497&collection=80402&tags=layout_Shawarma_Contextual&sortBy=&filters=&type=rc",
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9768977&lng=80.237497&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    "https://www.swiggy.com/search",
    "https://www.swiggy.com/instamart/category-listing?categoryName=Fresh%20Fruits",
    "https://www.swiggy.com/city/bangalore",
    "https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg",
    "https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg",
    "https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg",
    "https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg",
    "https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poha-1.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poori.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png"
  ];

  for (const endpoint of endpoints) {
    test(`GET ${endpoint}`, async ({ request }) => {
      const response = await request.get(endpoint);

      // Assert the status is 200
      expect(response.status()).toBe(200);
    });
  }
});

// Negative API Testing (Expecting wrong status code 201)
test.describe("API GET (Negative Test)", () => {
  const endpoints = [
    "https://www.swiggy.com/",
    "https://www.swiggy.in/",
    "https://www.swiggy.net/",
    "https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png",
    "https://www.googletagmanager.com/gtag/destination?id=AW-815667960&l=dataLayer&cx=c&gtm=45He4bk0v78036788za200",
    "https://www.swiggy.com/restaurants",
    "https://www.swiggy.com/genie",
    "https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
    "https://www.dineout.co.in/",
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9768977&lng=80.237497&collection=80402&tags=layout_Shawarma_Contextual&sortBy=&filters=&type=rc",
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9768977&lng=80.237497&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    "https://www.swiggy.com/search",
    "https://www.swiggy.com/instamart/category-listing?categoryName=Fresh%20Fruits",
    "https://www.swiggy.com/city/bangalore",
    "https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg",
    "https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg",
    "https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg",
    "https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg",
    "https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poha-1.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poori.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png"
  ];

  for (const endpoint of endpoints) {
    test(`GET ${endpoint} (Expecting wrong status code 201)`, async ({ request }) => {
      const response = await request.get(endpoint);

      // Assert the status is 201 (which will intentionally fail)
      expect(response.status()).toBe(201);  // This will fail if the response status is not 201
    });
  }
});
