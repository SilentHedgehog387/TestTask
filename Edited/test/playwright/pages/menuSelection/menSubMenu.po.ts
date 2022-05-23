import { Page } from '@playwright/test';

export class MenSubMenu {

    readonly page: Page;
    readonly locators = {
        newNowSubMenu: 'span[data-testid=\'header.section.menu.nuevo_he\']',
        clothingSubMenu: 'span[data-testid=\'header.section.menu.prendas_he\']',
        suitsSubMenu: 'span[data-testid=\'header.section.menu.sastreria_he\']',
        accessoriesSubMenu: 'span[data-testid=\'header.section.menu.accesorios_he\']',
        collectionsSubMenu: 'span[data-testid=\'header.section.menu.colecciones_he\']',
        featuredSubMenu:'span[data-testid=\'header.section.menu.destacados_he\']',

        beltsAccessoriesOption: 'a[data-testid=\'header.section.link.cinturones_he\']'
        // TODO: Add the other options
    } 

    constructor(page: Page) {
        this.page = page;
    }

    async hoverNewNowSubMenu(): Promise<void> {
        await this.page.hover(this.locators.newNowSubMenu);
    }
    async hoverClothingSubMenu(): Promise<void> {
        await this.page.hover(this.locators.clothingSubMenu);
    }
    async hoverSuitsSubMenu(): Promise<void> {
        await this.page.hover(this.locators.suitsSubMenu);
    }
    async hoverAccessoriesSubMenu(): Promise<void> {
        await this.page.hover(this.locators.accessoriesSubMenu);
    }
    async hoverCollectionsSubMenu(): Promise<void> {
        await this.page.hover(this.locators.collectionsSubMenu);
    }
    async hoverFeaturedSubMenu(): Promise<void> {
        await this.page.hover(this.locators.featuredSubMenu);
    }

    async clickBeltsAccessoriesOption(): Promise<void> {
        await this.hoverAccessoriesSubMenu();
        await this.page.click(this.locators.beltsAccessoriesOption);
    }
}
