import { test, expect } from '@playwright/test';

test('login works for standard_user', async ({ page }) => {
  await page.goto('/');                         // baseURL is saucedemo.com
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Products')).toBeVisible(); // simple, reliable check
});
