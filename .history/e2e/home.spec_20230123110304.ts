import {test, expect} from '@playwright/test';

var homePage = 'http://localhost:3000'
var aoutPage = 'http://localhost:3000/about'
var gradesPage = 'http://localhost:3000/grades'

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

        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', 'Generated by create next app')    

        const linkIcon = page.locator('link[rel="icon"]');
        await expect (linkIcon).toHaveAttribute('href', '/favicon.ico')
        
    })
})

test.describe ("main content test", () => {
    test('Should contain a heading welcome to the home page', async ({ page }) => {
        await page.goto(homePage);
        await expect(page.locator('h1')).toContainText('Welcome to my home page');
    })

    test('Should contain a list to describe CRUD', async({ page }) => {
        await page.goto(homePage);
        await expect(page.locator('ul > li')).tocontainText(['Create, Read, Update, Delete'])
    })
})