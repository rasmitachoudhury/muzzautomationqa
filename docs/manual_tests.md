# 🧪 Muzz App – Manual Test Cases
This document lists manual test cases verified before automation.

---

## 📱 Feature 1: User Login

| TC ID | Test Scenario | Test Steps | Test Data | Expected Result | Status |
|--------|----------------|-------------|-------------|------------------|----------|
| TC01 | Verify login screen displays correctly on first app launch | 1. Install and open the app<br>2. Observe the first screen | - | Login screen with username, password fields and login button should appear | ✅ Pass |
| TC02 | Verify user cannot login with blank credentials | 1. Launch the app<br>2. Tap login button without entering anything | Blank fields | Validation message should appear under both fields | ✅ Pass |
| TC03 | Verify login fails with invalid credentials | 1. Launch app<br>2. Enter invalid username/password<br>3. Tap login | username: `wrong`<br>password: `wrongpass` | Error message “Invalid credentials” should appear | ⚠️ Bug Logged (see BUG-001) |
| TC04 | Verify login succeeds with valid credentials | 1. Launch app<br>2. Enter correct username/password<br>3. Tap login | username: `user`<br>password: `password` | User should be navigated to Discover screen | ✅ Pass |
| TC05 | Verify app opens Discover screen directly if already logged in | 1. Login successfully<br>2. Close app<br>3. Relaunch app | - | User is navigated straight to Discover screen | ✅ Pass |

---

## 💘 Feature 2: Discover Profiles

| TC ID | Test Scenario | Test Steps | Test Data | Expected Result | Status |
|--------|----------------|-------------|-------------|------------------|----------|
| TC06 | Verify profiles load when online | 1. Login<br>2. Ensure device has internet<br>3. Observe Discover screen | Network: ON | Profile cards are displayed with like/pass buttons | ✅ Pass |
| TC07 | Verify error when no internet | 1. Login<br>2. Turn off internet<br>3. Observe Discover screen | Network: OFF | “Failed to load profiles” error message with Retry button displayed | ✅ Pass |
| TC08 | Verify user can like profiles | 1. Login<br>2. Ensure profiles are displayed<br>3. Tap Like on 5 profiles | Like 5 profiles | Counter updates correctly to 5 | ⚠️ Bug Logged (see BUG-002) |
| TC09 | Verify user can retry loading after network failure | 1. Turn off network<br>2. Tap Retry button<br>3. Turn network back on<br>4. Tap Retry again | Network toggled | Profiles load successfully | ✅ Pass |

---

## ⚙️ Test Environment

| Parameter | Details |
|------------|----------|
| Platform | Android |
| OS Version | 14.0 |
| Device | Pixel 6 Emulator |
| Build | Muzz.apk v1.0.0 |
| Locale Tested | English, French |
| Network | Wi-Fi and Airplane mode |

---

## 🧾 Notes
- Tests were executed manually before automation.
- All failing cases were logged in the bug report.
- Automation covers the same scenarios end-to-end.

---
