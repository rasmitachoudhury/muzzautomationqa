🧪 Muzz QA Automation Framework
📋 Overview

This repository contains an end-to-end mobile automation framework built using WebdriverIO, Appium, and TypeScript.
It automates core Muzz app scenarios like login, profile discovery, and liking profiles.
The framework follows the Page Object Model (POM) for maintainability and readability.

🏗️ Tech Stack
Tool	Purpose
WebdriverIO (v9)	Test automation framework
Appium	Mobile automation for Android
TypeScript	Type safety and better maintainability
Mocha	Test runner
Chai	Assertion library
WDIO Appium Service	Simplifies Appium server startup
GitHub Actions	CI/CD automation
📂 Project Structure
MUZZ-QA-APPIUMTEST/
│
├── .github/workflows/
│   └── android-tests.yml         # CI workflow for GitHub Actions
│
├── docs/
│   ├── Framework_Documentation.docx
│   └── Framework_Documentation.pdf
│
├── helpers/
│   ├── testdata.ts               # Test data (user credentials)
│   └── utils.ts                  # Reusable helper methods
│
├── tests/
│   ├── pages/                    # Page Object Model classes
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   ├── DiscoverPage.ts
│   │   └── ProfileCard.ts
│   │
│   ├── specs/                    # E2E Test specs
│   │   ├── login.e2e.ts
│   │   └── profile.e2e.ts
│   │
│   └── types/
│       └── global.d.ts           # Custom WebdriverIO type definitions
│
├── package.json
├── tsconfig.json
├── wdio.conf.ts
└── README.md

⚙️ Setup Instructions
1️⃣ Prerequisites

Node.js ≥ 18

Java JDK ≥ 11

Android SDK

Appium Server (npm install -g appium)

Emulator or real Android device configured

2️⃣ Install Dependencies
npm install

3️⃣ Configure App Path

Edit your wdio.conf.ts file:

'appium:app': '/path/to/your/muzz.apk'

4️⃣ Run the Tests
npx wdio run wdio.conf.ts

5️⃣ Run Tests in CI (GitHub Actions)

GitHub Actions will automatically trigger mobile tests on push or PR.
You can find the workflow file at:

.github/workflows/android-tests.yml

🧠 Key Features

✅ Page Object Model (POM) for maintainability

🔄 Reusable BasePage with common actions

🌍 Supports multiple locales (en, fr, etc.)

📱 Appium integrated with WebdriverIO

📊 Spec reporter for readable test results

🚀 CI-ready (GitHub Actions pipeline)

🧩 Example Test Scenarios
Login Tests

Invalid login → show error messages

Valid login → navigate to Discover screen

Auto-login → skip login on next app launch

Discover Tests

Profiles load correctly

Like/Pass actions update counter

“Failed to load profiles” message on network error

🧾 Example Command Outputs

Run all tests:

npx wdio run wdio.conf.ts


Output:

✔ Login screen loaded successfully
✔ User logged in successfully
✔ Profiles displayed
✔ Liked counter updated correctly

💡 Why This Framework?

WebdriverIO gives unified syntax for web + mobile testing

Appium ensures cross-device & platform support

TypeScript adds compile-time safety and scalability

POM architecture improves reusability and reduces maintenance

CI integration makes it easy to run on every PR or build

📄 Documentation

Detailed framework explanation is available in:

/docs/Framework_Documentation.docx  
/docs/Framework_Documentation.pdf