import Access from '../pageobjects/casework.siteaccess'
import Account from '../pageobjects/casework.account'

describe('theCaseWork Postive Test for Edit User Form', () => {
    it('log in and reach the dashboard', async ()=> {
        await Access.open();
        await Access.login();
    });
    it('should navigate to Edit User form workspace', async ()=> {
        await Access.userFormNav();
    });
    it('should enter data into each field and verify data is entered', async ()=> {
        await Account.enterName();
        await Account.enterHours();
        await Account.enterAddress1();
        await Account.enterCity();
        await Account.enterAddress2();
        await Account.enterState();
        await Account.enterZip();
        await Account.enterPhone();
    });
})