export default class LoginPage {

    constructor(page) {
        this.page = page;
        //comment
        this.username = this.page.locator("#username");
        this.password = this.page.locator("#password");
        this.loginBTN = this.page.locator("#signInBtn");
    }

    async launchURL() {
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        //new comment

    }
    async loginToPage(user_name, pass_word) {
        await this.username.fill(user_name);
        await this.password.fill(pass_word);
        await this.loginBTN.click();
    }
}



