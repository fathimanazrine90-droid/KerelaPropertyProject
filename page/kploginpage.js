export class kploginpage{
    /** 
   * @param{import('@playwright/test').page}page
*/
    constructor(page)
    {
        this.page=page;
        this.usernamefield=page.locator("#ulogin");
        this.passwordfield=page.locator('#upass');
        this.loginbutton=page.locator("#sub_logbtn")
        this.logo=page.getByRole('img', { name: 'Kerala Property' });
    }

    async setvalues(user,pass)
    {
        await this.usernamefield.fill(user);
        await this.passwordfield.fill(pass)
    }
    async loginclick()
    {
        await this.loginbutton.click();
    }
    async logoclick()
    {
        await this.logo.click();
    }
}