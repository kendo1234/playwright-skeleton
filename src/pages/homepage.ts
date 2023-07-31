import { Page } from "playwright";
import { expect } from '@playwright/test';


export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goTo() {
        await this.page.goto('https://www.moneysupermarket.com/shop/car-insurance/questionset/your-car');
    }

    async verify() {
        expect(await this.page.title()).toBe("Question Set - Your Car");

    }
}