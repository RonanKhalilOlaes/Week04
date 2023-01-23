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

