import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";

test("@smoke Login test ", async ({ page }) => {
    const login = new LoginPage(page);
    await login.launchURL();
    //new comment
    await login.loginToPage("rahulshettyacademy", "Learning@830$3mK2");
})