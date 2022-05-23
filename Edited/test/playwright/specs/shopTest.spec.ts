import { ProductActions } from "../pages/product/productActions.po";
import { ShoppingBagPage } from "../pages/product/shoppingBagPage.po";
import test, { expect} from "../pages/utils/base.po";


const validatePriceMatches = async (shoppingBagPage: ShoppingBagPage, selectedPrice: string) => {
    let selectedPriceInSection = parseFloat(selectedPrice.substring(3));
    let priceInBag = parseFloat((await shoppingBagPage.getPrice()).substring(3));
    expect(selectedPriceInSection).toEqual(priceInBag);
}

const validateColorMatches = async (shoppingBagPage: ShoppingBagPage, selectedColor: String) => {
    expect(await shoppingBagPage.getColor()).toEqual(selectedColor);
}

const validateSizeMatches = async (shoppingBagPage: ShoppingBagPage, selectedSize: string) => {
    expect(selectedSize).toEqual(await shoppingBagPage.getSize());
}

const validatePriceExistsInproductPage = async (productActions: ProductActions) => {
    expect(await productActions.getPriceLocator()).toBeVisible();
}

const validateColorExistsInProductPage = async (productActions: ProductActions) => {
    expect(await productActions.getColorLocator()).toBeVisible();
}

const validateSizeExistsInProductPage = async (productActions: ProductActions) => {
    expect(await productActions.getSizeLocator()).toBeVisible();
}

test.describe('Test Issues in Mango Online Store: ', () => {    


    test.beforeEach(async ({ landingPage, page, baseURL }) => {
        await page.goto(baseURL);
        await landingPage.clickLanguageBG();
        await landingPage.clickAcceptAllCookies();
    });    

    test('Create Issue and update it ', async ({ mainMenu, page, menSubMenu, productActions, shoppingBag, shoppingBagPage}) => {
        
        await mainMenu.hoverMenHover();
        await menSubMenu.clickBeltsAccessoriesOption();
        await page.click('.Em1l9 #product-key-id-1700000930');
        await validatePriceExistsInproductPage(productActions);
        await validateColorExistsInProductPage(productActions);
        await validateSizeExistsInProductPage(productActions);
        
        //Flaky could not find why so using sleep
        //TODO find why its flaky
        await page.waitForTimeout(2000);
        await productActions.chooseSize('90');
        await productActions.chooseColor('Black');

        let selectedSize = await productActions.getSize();
        let selectedPrice = await productActions.getPrice();
        let selectedColor = await productActions.getColor();

        await productActions.addToCart();
        await shoppingBag.navigateToShoppingCart()

        await validatePriceMatches(shoppingBagPage, selectedPrice);
        await validateColorMatches(shoppingBagPage, selectedColor);
        await validateSizeMatches(shoppingBagPage, selectedSize);
    });

});