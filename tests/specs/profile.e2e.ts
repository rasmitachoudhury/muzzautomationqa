import { expect } from 'chai';
import DiscoverPage from '../pages/DiscoverPage';
import { NetworkUtils } from '../../helpers/networkUtils';
import { driver } from '@wdio/globals';


describe('Profiles Flow', () => {
  before(async () => {
    await NetworkUtils.setOnline();
    await DiscoverPage.waitForProfiles();
  });

  it('should load profiles when online', async () => {
    expect((await DiscoverPage.profileList).length).to.be.greaterThan(0);
  });

  it('should show error message when offline', async () => {
    await NetworkUtils.setOffline();
    await (driver as WebdriverIO.Browser & { reset: () => Promise<void> }).reset();
    const isError = await DiscoverPage.isProfilesErrorDisplayed();
    expect(isError).to.be.true;
    await DiscoverPage.pressRetry();
    await NetworkUtils.setOnline();
  });

  it('should show correct number of likes after 5', async () => {
    for (let i = 1; i <= 5; i++) {
      await DiscoverPage.likeProfileByIndex(1);
    }
    const likedCount = await DiscoverPage.getNumberOfLiked();
    expect(likedCount).to.equal(5);
  });
});
