import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify and click on swiggy logo
  await page.locator('._1NDpI').click();
});

test('test1', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify swiggy corporate link
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Swiggy Corporate' }).nth(1).click();
  await page1Promise;
});

test('test2', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify partner with us link
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Partner with us' }).first().click();
  await page2Promise;
});

test('test3', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify Get the App link
  await page.getByText('Get the App').click();
});

test('test4', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify sign in link
  await page.getByText('Sign in', { exact: true }).click();
});

test('test5', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // close sidebar after sign in
  await page.locator('#overlay-sidebar-root span').click();
});

test('test6', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // enter delivery location
  await page.getByPlaceholder('Enter your delivery location').click();
  await page.getByLabel('rating-down-down-icon').click();
  await page.getByRole('button', { name: 'Use my current location' }).click();
});

test('test7', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // search for restaurant, item
  await page.getByText('Search for restaurant, item').click();
});

test('test8', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click swiggy link
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
});

test('test9', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on food section
  await page.getByTestId('navbar_container__2337992').getByRole('link', { name: 'Food' }).click();
});

test('test10', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click swiggy link from food section
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
});

test('test11', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click Instamart link
  await page.getByRole('link', { name: 'IM' }).click();
});

test('test12', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click dine-in link
  await page.getByRole('link', { name: 'DO' }).click();
});

test('test13', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click Genie link
  await page.getByTestId('navbar_container__3018050').getByRole('link', { name: 'Genie' }).click();
});

test('test14', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // verify About Us link in popup
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'About Us' }).click();
  const page3 = await page3Promise;
  await page3.goto('https://careers.swiggy.com/#/');
});

test('test15', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Swiggy Corporate in popup
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Swiggy Corporate' }).nth(2).click();
  await page4Promise;
});

test('test16', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Careers link in popup
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Careers' }).click();
  await page5Promise;
});

test('test17', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Team link in popup
  const page6Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Team' }).click();
  await page6Promise;
});

test('test18', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Swiggy One link in popup
  const page7Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Swiggy One' }).click();
  await page7Promise;
});

test('test19', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Swiggy Instamart link in popup
  const page8Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Swiggy Instamart' }).click();
  await page8Promise;
});

test('test20', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Swiggy Dineout link in popup
  const page9Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Swiggy Dineout' }).click();
  await page9Promise;
});

test('test21', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Swiggy Genie link in popup
  const page10Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Swiggy Genie' }).click();
  await page10Promise;
});

test('test22', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Minis link in popup
  const page11Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Minis', exact: true }).click();
  await page11Promise;
});

test('test23', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Help & Support link
  await page.getByRole('link', { name: 'Help & Support' }).click();
});

test('test24', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Swiggy link from Help & Support section
  await page.getByRole('link', { name: 'Swiggy', exact: true }).click();
});

test('test25', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Partner with us from footer
  const page12Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'Partner with us' }).getByRole('link').click();
  await page12Promise;
});

test('test26', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Ride with us link in footer
  const page13Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Ride with us' }).click();
  const page13 = await page13Promise;
  await page13.goto('https://ride.swiggy.com/');
});

test('test27', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Terms & Conditions link
  const page14Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Terms & Conditions' }).click();
  await page14Promise;
});

test('test28', async ({ page }) => {
  await page.goto('https://www.swiggy.com/');
  // click on Cookie Policy link
  const page15Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Cookie Policy' }).click();
  await page15Promise;
});

test('test29', async ({ page }) => {
    await page.goto('https://www.swiggy.com/');
    await page.getByRole('link', { name: 'Order food online in Bangalore' }).click();
  });
  test('test30', async ({ page }) => {
    await page.goto('https://www.swiggy.com/');
    await page.getByRole('link', { name: 'Order food online in Gurgaon' }).click();
  });
  test('test31', async ({ page }) => {
    await page.goto('https://www.swiggy.com/');
    await page.getByRole('link', { name: 'Order food online in Hyderabad' }).click();
  });
  test('test32', async ({ page }) => {
    await page.goto('https://www.swiggy.com/');
    await page.getByRole('link', { name: 'Order food online in Delhi' }).click();
  });
  test('test34', async ({ page }) => {
    await page.goto('https://www.swiggy.com/');
    await page.getByRole('link', { name: 'Order food online in Mumbai' }).click();
  });
  test('test35', async ({ page }) => {
    await page.goto('https://www.swiggy.com/');
    await page.getByRole('link', { name: 'Order food online in Pune' }).click();
  });
    test('test36', async ({ page }) => {
    await page.goto('https://www.swiggy.com/');
    await page.getByRole('link', { name: 'Order food online in Kolkata' }).click();
    });
    test('test37', async ({ page }) => {
    await page.goto('https://www.swiggy.com/');
    await page.getByRole('link', { name: 'Order food online in Chennai' }).click();
    });
    test('test38', async ({ page }) => {
    await page.goto('https://www.swiggy.com/');
    await page.getByRole('link', { name: 'Order food online in Ahmedabad' }).click();
    })
    test('test39', async ({ page }) => {
    await page.goto('https://www.swiggy.com/');
    await page.getByRole('link', { name: 'Order food online in Chandigarh' }).click();
    });
    test('test40', async ({ page }) => {
    await page.goto('https://www.swiggy.com/');
    await page.getByRole('link', { name: 'Order food online in Jaipur' }).click();
    });
    test('test41', async ({ page }) => {
    await page.goto('https://www.swiggy.com/');
    await page.locator('a').filter({ hasText: 'Show More' }).first().click();
  });