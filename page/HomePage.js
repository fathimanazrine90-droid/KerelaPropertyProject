export class HomePage
{
      /** 
   * @param{import('@playwright/test').page}page
*/
    constructor(page)
    {
        this.page=page;
        this.logo=page.getByRole('img', { name: 'Kerala Property' });
        this.property= page.getByRole('heading', { name: 'My Properties' })
        this.name= page.getByRole('heading', { name: 'nappu' })
        this.myAccount = page.getByText('My Account', { exact: true });
    }
    async clickMyAccount() {
        await this.myAccount.click();
    }
}