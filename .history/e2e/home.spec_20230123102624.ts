import {test, expect} from '@playwright/test';

var homePage = 'http://locathost:3000'
var aoutPage = 'http://locathost:3000/about'
var gradesPage = 'http://locathost:3000/grades'

test.beforeAll(async () => {
    console.log('Before test');

})

test.afterAll(async()=>{
    console.log('After test')
})

test.describe('Head tag Area', ()=>{
    test('Contains the Head Tag and its contents', async ({ page }) => {
        await page.goto(homePage);

        await expect(page).toHaveTitle("Example #1");

        const metaDescription = page.locator ('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', 'Generated by create next app')    

        const linkIcon = page.locator('link[rel="icon"]');
        await expect (linkIcon).toHaveAttribute ('href', '/favicon.ico')
        
    })
})