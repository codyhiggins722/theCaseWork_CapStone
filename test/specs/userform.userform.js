import Access from '../pageobjects/casework.siteaccess'
import Account from '../pageobjects/casework.account'

describe('theCaseWork Postive Test for Edit User Form', () => {
    it('log in and navigate to the Edit User form workspace', async ()=> {
        await Access.open();
        await Access.login();
        await Access.userFormNav();
    });
    it('should enter data into each field and verify data is entered', async ()=> {
        await Account.clearAllFields();
        await Account.enterName();
        await Account.enterHours();
        await Account.enterAddress1();
        await Account.enterCity();
        await Account.enterAddress2();
        await Account.enterState();
        await Account.enterZip();
        await Account.enterPhone();
    });
    it('should verify each dropdown option for Phone Type updates correctly', async ()=> {
        await Account.checkDropdown();
    });
    it('should click Update, refresh the page, and verify everything is still there', async ()=> {
        await Account.verificationExistence();
    })
    it('should clear all non required entries, refresh, and confirm the entries are still there', async ()=> {
        await Account.clearAllNonRequiredFields();
        await Account.verificationVanished();
        await Account.verificationExistenceNoUpdate
    });
    it('should add new entries, update, log out and in, and confirm entries are still there', async ()=> {
        await Account.clearAllFields();
        await Account.fieldEntryRedux();
        await Account.verificationExistenceLogOut();
    })
    it('should clear all non required entries, log out and in, and verify all changed entries are blank', async ()=> {
        await Account.clearAllNonRequiredFields();
        await Account.verificationVanishedSaved();
        await Access.logout();
        await Access.login();
        await Access.userFormNav();
        await Account.verifyBlankValues();
    })
})