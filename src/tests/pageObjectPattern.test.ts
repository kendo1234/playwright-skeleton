import { HomePage } from "../pages/homepage";
import { test } from '@playwright/test';

test('User can open home page', async ({ page }) => {
    const home = new HomePage(page);
    
    await home.goTo();
    await home.verify();
;  });