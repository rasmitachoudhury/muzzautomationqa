# 🐛 Muzz App – Bug Report

This document lists the bugs identified during manual testing prior to automation.

---

## 📄 Summary

| Bug ID | Title | Severity | Status | Module | Reported By |
|---------|--------|-----------|----------|----------|--------------|
| BUG-001 | Login error message not shown for invalid credentials | Medium | Open | Login | Rasmita Choudhury |
| BUG-002 | Liked profile counter not updating correctly | High | Open | Discover | Rasmita Choudhury |

---

### 🐞 BUG-001: Login error message not shown

**Module:** Login  
**Severity:** Medium  
**Priority:** High  
**Status:** Open  
**Environment:** Android Emulator (API 34), Muzz v1.0.0  

**Steps to Reproduce:**
1. Launch app  
2. Enter invalid credentials:  
   - Username: `wrong`  
   - Password: `wrongpass`  
3. Tap “Login”  

**Expected Result:**  
Error message “Invalid credentials” should appear below the username/password field.  

**Actual Result:**  
No error message displayed; login button remains clickable.  

**Impact:**  
User does not receive feedback on login failure.  

**Attachment:**  
(Screenshot can be added: `/docs/screenshots/BUG-001.png`)

---

### 🐞 BUG-002: Liked profile counter not updating correctly

**Module:** Discover  
**Severity:** High  
**Priority:** High  
**Status:** Open  
**Environment:** Android Emulator (API 34), Muzz v1.0.0  

**Steps to Reproduce:**
1. Login with valid credentials  
2. Like 5 profiles in a row  
3. Observe counter displayed on the screen  

**Expected Result:**  
Profile counter should show “5”  

**Actual Result:**  
Counter remains stuck at “3” after 5 likes.  

**Impact:**  
Incorrect like tracking may mislead user engagement metrics.  

**Attachment:**  
(Screenshot can be added: `/docs/screenshots/BUG-002.png`)

---

## 📊 Summary Dashboard

| Status | Count |
|---------|--------|
| Open | 2 |
| Closed | 0 |
| Total | 2 |

---

## 🧩 Recommendations
- Add toast or inline error for failed login to improve UX.
- Verify counter state management on Discover page (possible async issue).

---

## 🧑‍💻 Reporter
**Name:** Rasmita Choudhury  
**Date Reported:** November 2025  
**Device:** Android Emulator (Pixel 6 API 34)  
**App Version:** Muzz v1.0.0  
**Locale:** en-IN / fr-FR  

---
