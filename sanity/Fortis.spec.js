import { test, expect } from '@playwright/test';
import testData from '../test-data.json';

test("Sign in with email flow @sanity", async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  const signInWithEmailButton = page.getByRole('button', { name: 'Sign in with Email' });
  await expect(signInWithEmailButton).toBeEnabled();
  await signInWithEmailButton.click();

  const emailInput = page.locator("xpath=//input[@name='email']");
  await expect(emailInput).toBeEditable();
  await emailInput.fill(testData.email);

  const passwordInput = page.locator("xpath=//input[@name='password']");
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(testData.password);

  const signInWithEmailButtonAfterCredentials = page.getByRole('button', { name: 'Sign in with Email' });
  await expect(signInWithEmailButtonAfterCredentials).toBeEnabled();
  await signInWithEmailButtonAfterCredentials.click();

});
