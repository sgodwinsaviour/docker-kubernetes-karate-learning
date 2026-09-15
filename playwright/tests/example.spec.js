import { test, expect } from '@playwright/test';

test('Playwright search example', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    const searchButton = page.getByRole('button', { name: /search/i });

    await searchButton.click();

    const searchBox = page.getByPlaceholder(/search/i);

    await searchBox.fill('locator');

    await page.screenshot({
        path: 'playwright-search1.png',
        fullPage: true
    });

});