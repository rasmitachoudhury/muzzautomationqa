import { join } from 'path';
import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    runner: 'local',

    // Specify test files
    specs: ['./tests/specs/**/*.ts'],

    // Maximum number of parallel test instances
    maxInstances: 1,

    capabilities: [
        {
            platformName: 'Android',
            'appium:platformVersion': '8.0', // Minimum required Android version is 8.0 (Oreo)
            'appium:deviceName': 'Android Emulator', // Change to your device/emulator name
            'appium:automationName': 'UiAutomator2',
            'appium:app': join(process.cwd(), 'app', 'com.muzmatch.muzmatchapp.apk'), // Path to base APK
            'appium:autoGrantPermissions': true,
            'appium:language': 'fr',
            'appium:locale': 'FR',
            'appium:noReset': false, // Set to true to keep app data between sessions
        }
    ],

    // Logging level
    logLevel: 'info',

    // Default timeout for all waitFor* commands
    waitforTimeout: 15000,

    // Test framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    // Reporters
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],

    // Appium service configuration
    services: [
        [
            'appium',
            {
                args: {
                    address: '127.0.0.1',
                    port: 4723,
                    relaxedSecurity: true
                },
                logPath: './logs'
            }
        ]
    ],

    // Hooks
    before: async () => {
        console.log('🚀 Tests are starting!');
    },

    afterTest: async (test, context, { passed }) => {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
};
