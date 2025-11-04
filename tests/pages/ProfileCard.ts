import { $ } from '@wdio/globals';

export default class ProfileCard {
  cardByIndex(index: number) {
    return $(`(//android.view.ViewGroup[@content-desc="profile_card"])[${index}]`);
  }

  likeButton(cardEl: WebdriverIO.Element) {
    return cardEl.$('~btn_like');
  }

  passButton(cardEl: WebdriverIO.Element) {
    return cardEl.$('~btn_pass');
  }

  name(cardEl: WebdriverIO.Element) {
    return cardEl.$('~profile_name');
  }
}
