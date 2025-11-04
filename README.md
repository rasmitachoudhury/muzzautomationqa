Muzz Mobile Automation Framework
Overview

This repository contains a mobile test automation framework built for the Muzz QA Technical Test, designed to automate login and profile discovery scenarios on the Muzz dating app.

The framework is implemented using:

Appium

WebdriverIO

TypeScript

Mocha & Chai

Allure Reporting

Project Structure
muzzautomationqa/
├─ src/
│   ├─ pages/              # Page Object files
│   ├─ helpers/            # Common helpers or data
│   └─ utils/              # App utility functions
│
├─ tests/                  # Test cases
│   ├─ login.test.ts
│   └─ discover.test.ts
│
├─ docs/                   # Documentation
│   ├─ why-framework-required.md
│   ├─ framework-architecture.md
│   ├─ manual-test-cases.md
│   └─ bug-report.md
│
├─ wdio.conf.ts            # WebdriverIO configuration
├─ package.json
├─ tsconfig.json
└─ README.md

Installation
Prerequisites

Node.js (>= 18)

Appium Server 2.x

Android Emulator or real device

Java SDK (for Appium)

Git

Setup Commands
git clone https://github.com/rasmitachoudhury/muzzautomationqa.git
cd muzzautomationqa
npm install

Running the Tests
Start Appium Server
appium

Execute Tests
npx wdio run wdio.conf.ts

Generate Allure Report
allure serve allure-results

Why This Stack?
Tool	Reason
Appium	Cross-platform mobile automation
WebdriverIO	Simplifies integration with Appium and Mocha
TypeScript	Static typing and IDE support
Mocha + Chai	Readable and structured test definitions
Allure	Clear and professional reporting