import ProfileCard from './ProfileCard';
import { $, $$ } from '@wdio/globals';

class DiscoverPage {
  get container() { return $('~discover_container'); }
  get profileList() { return $$('~profile_card'); }
  get errorContainer() { return $('~profiles_error'); }
  get retryButton() { return $('~profiles_retry'); }
  get likedCounter() { return $('~liked_counter'); }

  async isDisplayed() {
    return this.container.isDisplayed();
  }

  async waitForProfiles() {
    await this.container.waitForDisplayed({ timeout: 15000 });
  }

  async likeProfileByIndex(index: number) {
    const card = await new ProfileCard().cardByIndex(index);
  }

  async getNumberOfLiked(): Promise<number> {
    if (await this.likedCounter.isDisplayed()) {
      const text = await this.likedCounter.getText();
      return parseInt(text, 10);
    }
    return 0;
  }

  async isProfilesErrorDisplayed() {
    return this.errorContainer.isDisplayed();
  }

  async pressRetry() {
    await this.retryButton.click();
  }
}

export default new DiscoverPage();
