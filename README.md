# Playwright Basics Project

## Overview

This project is created as part of a learning task to understand the **basics of Playwright test automation**.  
It demonstrates how to implement **Page Object Model (POM)**, run tests across multiple browsers, and structure automated UI tests.

The tests are based on the demo website:
https://practicesoftwaretesting.com

---

## Test Account Setup (Required Before Running Tests)

Before executing the tests, you must log in / register an account using the following credentials:

- **Email:** `email2@email.com`
- **Password:** `12345678Password@`

Make sure the account exists before running the test suite, otherwise some scenarios may fail.

---

## Installation

Install dependencies:

```bash
npm install 
npx playwright install
npx playwright test