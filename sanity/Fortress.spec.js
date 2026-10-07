import { test, expect } from '@playwright/test';
import testData from '../test-data.json';

test("User signs in, creates new RFP, selects opportunity and product class, then logs out @sanity", async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  const signInWithEmailButton = page.getByRole('button', { name: 'Sign in Email' });
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

  const estimatingPricingSidebarButton = page.locator("xpath=//nav[@data-cy='sidebarDesktop']//button[contains(concat(' ', normalize-space(@class), ' '), ' overflow-hidden ') and normalize-space(.)='Estimating & Pricing']");
  await expect(estimatingPricingSidebarButton).toBeEnabled();
  await estimatingPricingSidebarButton.click();

  const requestForProposalsLink = page.getByRole('link', { name: 'Request For Proposals' });
  await expect(requestForProposalsLink).toBeEnabled();
  await requestForProposalsLink.click();

  const newRequestForProposalLink = page.getByRole('link', { name: 'New Request for Proposal' });
  await expect(newRequestForProposalLink).toBeEnabled();
  await newRequestForProposalLink.click();

  const chooseOpportunityButton = page.getByRole('button', { name: 'Choose Opportunity' });
  await expect(chooseOpportunityButton).toBeEnabled();
  await chooseOpportunityButton.click();

  const opportunityQuickSearchInput = page.locator("xpath=//div[@id='project-picker-picker-opportunity-picker']//input[@type='text']");
  await expect(opportunityQuickSearchInput).toBeEditable();
  await opportunityQuickSearchInput.fill(testData.quickSearch);

  const opportunityRadioLabel = page.locator("xpath=//label[@for='radio.input_912']");
  await expect(opportunityRadioLabel).toBeEnabled();
  await opportunityRadioLabel.click();

  const opportunityRadioInput = page.locator("xpath=//input[@id='radio.input.912']");
  await expect(opportunityRadioInput).toBeEnabled();
  await opportunityRadioInput.click();

  const continueButton = page.getByRole('button', { name: 'Continue' });
  await expect(continueButton).toBeEnabled();
  await continueButton.click();

  const selectProductClassTextbox = page.getByRole('textbox', { name: 'Select a Product Class' });
  await expect(selectProductClassTextbox).toBeEnabled();
  await selectProductClassTextbox.click();

  const primeLabelOption = page.locator("xpath=//input[@name='deliverableItemDTO.productClassId']/following::li[@data-label='Prime Label']");
  await expect(primeLabelOption).toBeEnabled();
  await primeLabelOption.click();

  const userMenuButton = page.getByRole('button', { name: 'Ranga Sharan Rohith Fortis' });
  await expect(userMenuButton).toBeEnabled();
  await userMenuButton.click();

  const logoutLink = page.getByRole('link', { name: 'Logout' });
  await expect(logoutLink).toBeEnabled();
  await logoutLink.click();

});
