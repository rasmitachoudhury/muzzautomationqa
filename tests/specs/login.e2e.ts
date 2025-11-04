import { expect } from 'chai';
import LoginPage from '../pages/LoginPage';
import DiscoverPage from '../pages/DiscoverPage';
import { testData } from '../../helpers/testData';
import { driver } from '@wdio/globals';


describe('Login Flow', () => {

  before(async () => {
  await (driver as WebdriverIO.Browser & { reset: () => Promise<void> }).reset();
  });

  it('should show login screen on first open', async () => {
    expect(await LoginPage.isDisplayed()).to.be.true;
  });

  it('should display errors on wrong credentials', async () => {
    await LoginPage.login('wrongUser', 'wrongPass');
    const errors = await LoginPage.getErrors();
    expect(Object.keys(errors)).to.have.length.greaterThan(0);
  });

  it('should login successfully and reach discover screen', async () => {
    await LoginPage.login(testData.validUser.username, testData.validUser.password);
    await DiscoverPage.waitForProfiles();
    expect(await DiscoverPage.isDisplayed()).to.be.true;
  });

  it('should open directly to discover when logged in again', async () => {
    await driver.closeApp();
    await driver.launchApp();
    expect(await DiscoverPage.isDisplayed()).to.be.true;
  });
});
