import { config as baseConfig } from '@wdio/cli';

export const config: WebdriverIO.Config = {
  runner: 'local',
  specs: ['./tests/specs/**/*.ts'],
  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:platformVersion': '13.0',
    'appium:deviceName': 'Android Emulator',
    'appium:automationName': 'UiAutomator2',
    'appium:app': '/path/to/your/app.apk',
    'appium:autoGrantPermissions': true
    'appium:language': 'fr',
    'appium:locale': 'FR'

  }],

  logLevel: 'info',
  waitforTimeout: 15000,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 600000
  },
  reporters: ['spec'],

  services: [
    ['appium', { command: 'appium' }]
  ],
};
