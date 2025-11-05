import { $ ,$$} from '@wdio/globals'


export default class ProfileCard {
  cardByIndex(index: number) {
    return $(`(//android.view.ViewGroup[@content-desc="profile_card"])[${index}]`);
  }

  likeButton(cardEl: WebdriverIO.Element) {
    return (cardEl as any).$('~btn_like');
  }

  passButton(cardEl: WebdriverIO.Element) {
    return (cardEl as any).$('~btn_pass');
  }

  name(cardEl: WebdriverIO.Element) {
    return (cardEl as any).$('~profile_name');
  }
}
