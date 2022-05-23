import { test as base } from "@playwright/test";
import { Utils } from './utils';
import { LandingPage } from "../utils/landingPage.po";
import { MainMenu } from "../menuSelection/mainMenu.po";
import { MenSubMenu } from "../menuSelection/menSubMenu.po";
import { ProductActions } from "../product/productActions.po";
import { ShoppingBag } from "../menuSelection/shoppingBag.po";
import { ShoppingBagPage } from "../product/shoppingBagPage.po";


    type pages = {
    utils: Utils;
    landingPage: LandingPage;
    mainMenu: MainMenu;
    menSubMenu: MenSubMenu;
    productActions: ProductActions;
    shoppingBag: ShoppingBag;
    shoppingBagPage: ShoppingBagPage;
}

const test = base.extend<pages>({
    landingPage: async ({page}, use) => {
        await use (new LandingPage(page));
    },
    mainMenu: async ({ page }, use) => {
        await use(new MainMenu(page));
    },
    menSubMenu: async ({ page }, use) => {
        await use(new MenSubMenu(page));
    },
    productActions: async ({page}, use) => {
        await use (new ProductActions(page));
    },
    shoppingBag: async ({page}, use) => {
        await use (new ShoppingBag(page));
    },
    shoppingBagPage: async ({page}, use) => {
        await use (new ShoppingBagPage(page));
    }
 });

export default test;
export const expect = test.expect;
export const describe = test.describe;


