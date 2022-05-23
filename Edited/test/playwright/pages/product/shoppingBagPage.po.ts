import { Page } from '@playwright/test';

export class ShoppingBagPage {

    readonly page: Page;
    readonly locators = {
        size: 'p.column-12:nth-child(3)',
        color:  'p.layout-text:nth-child(4)',
        price: 'p.sg-action'
    } 

    constructor(page: Page) {
        this.page = page;
    }

    async getPrice(): Promise<String> {
        let priceValue = await this.page.locator(this.locators.price).innerText();
        let priceValueWithDot = priceValue.replace(/,/g, '.' );
        return priceValueWithDot;
    }

    async getColor(): Promise<String> {
        return await this.page.locator(this.locators.color).innerText();
    }

    async getSize(): Promise<String> {
        let sizeValue = (await this.page.locator(this.locators.size).innerText()).substring(6); 
        return sizeValue;
    }
}