const { test, expect } = require('@playwright/test');

test.describe('Swiggy CRUD Operations', () => {
  // 1. GET Operation: Intercept API request
  test('GET Operation: Fetch available restaurants', async ({ page }) => {
    await page.route('https://www.swiggy.com/api/restaurants', (route) => {
      route.continue();
    });
    await page.goto('https://www.swiggy.com/');
    const [response] = await Promise.all([
      page.waitForResponse(
        (res) => res.url().includes('/api/restaurants') && res.status() === 200
      ),
      page.click('a[href="/restaurants"]'),
    ]);
    const responseBody = await response.json();
    expect(responseBody).toBeTruthy();
  });

  // 2. POST Operation: Place a new order
  test('POST Operation: Create a new order', async ({ page }) => {
    await page.route('https://www.swiggy.com/api/order', (route) => {
      if (route.request().method() === 'POST') {
        route.fulfill({
          status: 201,
          contentType: 'application/json',
          body: JSON.stringify({ success: true, orderId: 123 }),
        });
      } else {
        route.continue();
      }
    });
    const result = await page.evaluate(async () => {
      const response = await fetch('https://www.swiggy.com/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ restaurantId: 101, item: 'Pizza', quantity: 1 }),
      });
      return response.json();
    });
    expect(result.success).toBe(true);
    expect(result.orderId).toBe(123);
  });

  // 3. PUT Operation: Update an existing order
  test('PUT Operation: Update order status', async ({ page }) => {
    await page.route('https://www.swiggy.com/api/order/123', (route) => {
      if (route.request().method() === 'PUT') {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ success: true }),
        });
      } else {
        route.continue();
      }
    });
    const result = await page.evaluate(async () => {
      const response = await fetch('https://www.swiggy.com/api/order/123', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Delivered' }),
      });
      return response.json();
    });
    expect(result.success).toBe(true);
  });

  // 4. DELETE Operation: Cancel an order
  test('DELETE Operation: Cancel an order', async ({ page }) => {
    await page.route('https://www.swiggy.com/api/order/123', (route) => {
      if (route.request().method() === 'DELETE') {
        route.fulfill({
          status: 204,
        });
      } else {
        route.continue();
      }
    });
    const result = await page.evaluate(async () => {
      const response = await fetch('https://www.swiggy.com/api/order/123', {
        method: 'DELETE',
      });
      return response.status;
    });
    expect(result).toBe(204);
  });

  // 5. GET Operation: Fetch order details
  test('GET Operation: Fetch order details', async ({ page }) => {
    await page.route('https://www.swiggy.com/api/order/123', (route) => {
      route.continue();
    });
    await page.goto('https://www.swiggy.com/');
    const [response] = await Promise.all([
      page.waitForResponse(
        (res) => res.url().includes('/api/order/123') && res.status() === 200
      ),
      page.click('a[href="/order/123"]'),
    ]);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('orderId', 123);
  });

  // 6. POST Operation: Add items to the cart
  test('POST Operation: Add item to cart', async ({ page }) => {
    await page.route('https://www.swiggy.com/api/cart', (route) => {
      if (route.request().method() === 'POST') {
        route.fulfill({
          status: 201,
          contentType: 'application/json',
          body: JSON.stringify({ success: true, cartId: 456 }),
        });
      } else {
        route.continue();
      }
    });
    const result = await page.evaluate(async () => {
      const response = await fetch('https://www.swiggy.com/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId: 101, quantity: 2 }),
      });
      return response.json();
    });
    expect(result.success).toBe(true);
    expect(result.cartId).toBe(456);
  });

  // 7. PUT Operation: Update cart item
  test('PUT Operation: Update item in cart', async ({ page }) => {
    await page.route('https://www.swiggy.com/api/cart/456', (route) => {
      if (route.request().method() === 'PUT') {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ success: true }),
        });
      } else {
        route.continue();
      }
    });
    const result = await page.evaluate(async () => {
      const response = await fetch('https://www.swiggy.com/api/cart/456', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: 3 }),
      });
      return response.json();
    });
    expect(result.success).toBe(true);
  });

  // 8. DELETE Operation: Remove item from cart
  test('DELETE Operation: Remove item from cart', async ({ page }) => {
    await page.route('https://www.swiggy.com/api/cart/456', (route) => {
      if (route.request().method() === 'DELETE') {
        route.fulfill({
          status: 204,
        });
      } else {
        route.continue();
      }
    });
    const result = await page.evaluate(async () => {
      const response = await fetch('https://www.swiggy.com/api/cart/456', {
        method: 'DELETE',
      });
      return response.status;
    });
    expect(result).toBe(204);
  });

  // 9. GET Operation: Fetch user profile
  test('GET Operation: Fetch user profile', async ({ page }) => {
    await page.route('https://www.swiggy.com/api/user/profile', (route) => {
      route.continue();
    });
    await page.goto('https://www.swiggy.com/');
    const [response] = await Promise.all([
      page.waitForResponse(
        (res) => res.url().includes('/api/user/profile') && res.status() === 200
      ),
      page.click('a[href="/profile"]'),
    ]);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('userId', 789);
  });

  // 10. POST Operation: Update user profile
  test('POST Operation: Update user profile', async ({ page }) => {
    await page.route('https://www.swiggy.com/api/user/profile', (route) => {
      if (route.request().method() === 'POST') {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ success: true }),
        });
      } else {
        route.continue();
      }
    });
    const result = await page.evaluate(async () => {
      const response = await fetch('https://www.swiggy.com/api/user/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'John Doe', email: 'john.doe@example.com' }),
      });
      return response.json();
    });
    expect(result.success).toBe(true);
  });
});
