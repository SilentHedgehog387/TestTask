import { Page } from '@playwright/test';

export class LandingPage {

    readonly page: Page;
    readonly locators = {
        languageEnglish: '#lang_BG a[tabindex=\'3\']',
        languageBulgarian: '#lang_BG a[tabindex=\'4\']',
        acceptAllCookies: 'button#onetrust-accept-btn-handler'
    } 

    constructor(page: Page) {
        this.page = page;
    }

    async clickLanguageBG(): Promise<void> {
        await this.page.click(this.locators.languageBulgarian);
    }

    async clickLanguageEN(): Promise<void> {
        await this.page.click(this.locators.languageEnglish);
    }
    async clickAcceptAllCookies(): Promise<void> {
        await this.page.click(this.locators.acceptAllCookies);
    }

    
}
