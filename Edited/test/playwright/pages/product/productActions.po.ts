import { Locator, Page } from '@playwright/test';

export class ProductActions {

    readonly page: Page;
    readonly locators = {

        sizeMultipleOptions: '#sizeSelector.selector .selector-list--opened span',
        sizeSelector: '#sizeSelector.selector',
        slectedSizeLocator:'.selector-trigger',
        selectedSizeAtribute: 'data-size',

        colorMultipleOptions: '#colorsContainer .color-container',
        colorAtributeForSelection: 'aria-label',
        colorName: '.colors-info-name',

        price: '.product-sale',
        addToShoppingCart: '#addCartContainer #productFormAdd'
    } 

    constructor(page: Page) {
        this.page = page;
    }

    async clickSizeSelector(): Promise<void> {
        await this.page.click(this.locators.sizeSelector);
    }

    async chooseSize(desiredSize: string ): Promise<void> {
        await this.clickSizeSelector();
        await this.clickItem(desiredSize, this.locators.sizeMultipleOptions);
    }

    async chooseColor(desiredColor: string): Promise<void> {
        let optionsToChoseFrom = await this.page.$$(this.locators.colorMultipleOptions);
        for (var iterator of optionsToChoseFrom) {
            if(desiredColor==await iterator.getAttribute(this.locators.colorAtributeForSelection)){
                await iterator.click(); break; 
            }
        }
    }

    private async clickItem(desiredItem: string, listOfOptions: string): Promise<void> {
        let optionsToChoseFrom = await this.page.$$(listOfOptions);
        for (var iterator of optionsToChoseFrom) {
            if(desiredItem==await iterator.innerText()){
                await iterator.click(); break; 
            }
        }
    }

    async addToCart(): Promise<void> {
        await this.page.click(this.locators.addToShoppingCart);
    }

    async getPrice(): Promise<any> {
        return await this.page.locator(this.locators.price).innerText();
    }

    async getColor(): Promise<any> {
        return await this.page.locator(this.locators.colorName).innerText();
    }

    async getSize(): Promise<any> {
        return await this.page.locator(this.locators.slectedSizeLocator).getAttribute('data-size');
    }

    async getSizeLocator(): Promise<any> {
        return await this.page.locator(this.locators.slectedSizeLocator);
    }

    async getColorLocator(): Promise<any> {
        return await this.page.locator(this.locators.colorName);
    }

    async getPriceLocator(): Promise<any> {
        return await this.page.locator(this.locators.price);
    }

}
