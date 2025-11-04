import { $ } from '@wdio/globals';

export default class BasePage {
  async waitForDisplayed(selector: string, timeout = 10000) {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    return element;
  }

  async click(selector: string) {
    const el = await this.waitForDisplayed(selector);
    await el.click();
  }

  async setValue(selector: string, value: string) {
    const el = await this.waitForDisplayed(selector);
    await el.setValue(value);
  }

  async getText(selector: string) {
    const el = await this.waitForDisplayed(selector);
    return el.getText();
  }
}
