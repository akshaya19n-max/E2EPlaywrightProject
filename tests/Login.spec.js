import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";

test("@smoke Login test ", async ({ page }) => {
    //this code is merged with jenkins
    const login = new LoginPage(page);
    await login.launchURL();
    await login.loginToPage("rahulshettyacademy", "Learning@830$3mK2");
})