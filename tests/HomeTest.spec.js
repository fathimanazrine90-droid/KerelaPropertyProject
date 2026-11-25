import { test, expect } from "@playwright/test";
import { kploginpage } from "../page/kploginpage";
import { HomePage } from "../page/HomePage";

let login;
let home;

test.describe("Homepage", () => {

    test.beforeEach("url loading..", async ({ page }) => {

        await page.goto("https://keralaproperty.in/member/myhome/");

        home = new HomePage(page);

    });

    test('verify my hometest', async () => {

        await expect(home.myhome).toBeVisible();

        await expect(home.myhome).toHaveText("My Home");

    });

    test('verify your name', async () => {

        await expect(home.nameHeading).toHaveText("nappu");

    });

    test("click myaccount", async () => {

        await home.myAccountClick();

    });

});