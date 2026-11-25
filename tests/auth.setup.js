import { test as setup, expect } from "@playwright/test";

const authFile = "playwright/auth/auth.json";

setup("authenticate", async ({ page }) => {

    await page.goto("https://keralaproperty.in/member/login/");

    await page.locator('#ulogin').fill("nappus@gmail.com");

    await page.locator('#upass').fill("nappu@123");

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/");

    await page.context().storageState({ path: authFile });

});