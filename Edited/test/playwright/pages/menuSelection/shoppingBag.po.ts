import { Page } from '@playwright/test';

export class ShoppingBag {

    readonly page: Page;
    readonly locators = {
        shoppingBag: 'div[data-testid=\'header.userMenu.bolsa_any\']',
        viewShoppingBag:  'button[data-testid=\'bag.preview.goToFullpage\']'
    } 

    constructor(page: Page) {
        this.page = page;
    }

    async clickShoppingBag(): Promise<void> {
        await this.page.click(this.locators.shoppingBag);
    }

    async clickViewShoppingBag(): Promise<void> {
        await this.page.click(this.locators.viewShoppingBag);
    }

    async navigateToShoppingCart(): Promise<void> {
        await this.clickShoppingBag();
        await this.clickViewShoppingBag();
    }

}