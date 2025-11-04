import BasePage from './BasePage';
import { $, $$ } from '@wdio/globals';


class LoginPage extends BasePage {
  get usernameInput() { return $('~login_input_username'); }
  get passwordInput() { return $('~login_input_password'); }
  get loginButton() { return $('~login_button'); }
  get usernameError() { return $('~login_error_username'); }
  get passwordError() { return $('~login_error_password'); }

  async isDisplayed(): Promise<boolean> {
    return this.loginButton.isDisplayed();
  }

  async login(username: string, password: string) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async getErrors() {
    const errors: Record<string, string> = {};
    if (await this.usernameError.isDisplayed()) {
      errors.username = await this.usernameError.getText();
    }
    if (await this.passwordError.isDisplayed()) {
      errors.password = await this.passwordError.getText();
    }
    return errors;
  }
}

export default new LoginPage();
