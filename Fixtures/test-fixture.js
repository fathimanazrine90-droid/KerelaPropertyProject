import { test as base, expect } from '@playwright/test';
import { kploginpage } from '../page/kploginpage';
import { HomePage } from '../pages/HomePage';
//import { AddPropertypage } from '../pages/AddPropertypage';

export const test = base.extend({
  login: async ({ page }, use) => {
    await use(new kploginpage(page));
  },

  homePage: async ({ page }, use) => {
    const home = new HomePage(page);
    await use(home);
  },

//   addPropertyPage: async ({ page }, use) => {
//     const addproperty = new AddPropertypage(page);
//     await use(addproperty);
//   },
});

export { expect };