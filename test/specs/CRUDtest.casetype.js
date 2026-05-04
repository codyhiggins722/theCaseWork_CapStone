import Access from '../pageobjects/casework.siteaccess'
import CaseTypes from '../pageobjects/casework.casetypes'

describe('theCaseWork CRUD test for Case Type workspace', () => {
    it('log in and navigate to the Case Data Types workspace', async ()=> {
        await Access.open();
        await Access.login();
        await Access.cdtNav();
    });
    it('should add a new Case Type', async()=> {
        await CaseTypes.enterNewCaseType();        
    });
    it('should refresh and logout/login, verifying new case type persists', async ()=> {
        await browser.refresh();
        await expect (CaseTypes.createdCaseType).toExist();
        await Access.logout();
        await Access.login();
        await Access.cdtNav();
        await expect (CaseTypes.createdCaseType).toExist();
    });
    it ('should remove the created case type', async() => {
        await CaseTypes.removeCaseType();
    });
    it ('case type will still be gone after a refresh and a logout/login', async()=> {
        await browser.refresh();
        await expect (CaseTypes.createdCaseType).not.toExist();
        await Access.logout();
        await Access.login();
        await Access.cdtNav();
        await expect (CaseTypes.createdCaseType).not.toExist();
    });
})