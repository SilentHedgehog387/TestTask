import { Page } from '@playwright/test';

export class MainMenu {

    readonly page: Page;
    readonly locators = {
        womenMenuHover: 'li[data-testid=\'header.menuItem.she.hover\']',
        menMenuHover: 'li[data-testid=\'header.menuItem.he.hover\']',
        teenMenuHover: 'li[data-testid=\'header.menuItem.teen.hover\']',
        kidsMenuHover: 'li[data-testid=\'header.menuItem.kids.hover\']',
        homeMenuHover: 'li[data-testid=\'header.menuItem.home.hover\']',
    } 

    constructor(page: Page) {
        this.page = page;
    }

    async hoverWomenHover(): Promise<void> {
        await this.page.hover(this.locators.womenMenuHover);
    }
    async hoverMenHover(): Promise<void> {
        await this.page.hover(this.locators.menMenuHover);
    }
    async hoverTeenHover(): Promise<void> {
        await this.page.hover(this.locators.teenMenuHover);
    }
    async hoverKidsHover(): Promise<void> {
        await this.page.hover(this.locators.kidsMenuHover);
    }
    async hoverHomeHover(): Promise<void> {
        await this.page.hover(this.locators.homeMenuHover);
    }
}
