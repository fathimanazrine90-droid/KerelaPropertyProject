import { test, expect } from "@playwright/test";
import { KpLoginPage } from "../pages/Kploginpage";

/** @type {KpLoginPage} */
let login;

test.beforeEach("url loading..", async ({ page }) => {
  await page.goto(process.env.BASEURL);

  login = new KpLoginPage(page);
})

test("invalid login test", async ({ page }) => {
  await login.setValues("nappus@gmail.com", "nappu@123");
  await login.buttonClick();
})

test("check if the logo is visible", async () => {
  await expect(login.logo).toBeVisible();
})

test("checking url after clicking", async ({ page }) => {

  await login.logoClick();
  await expect(page).toHaveURL("https://keralaproperty.in");
})