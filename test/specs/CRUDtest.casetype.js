import Access from '../pageobjects/casework.siteaccess'
import CaseDataTypes from '../pageobjects/casework.casedatatypes'

describe('theCaseWork Account Login', () => {
    it('log in and reach the dashboard', async ()=> {
        await Access.open();
        await Access.login();
    });
    it('should navigate to Case Data Types workspace', async ()=> {
        await Access.cdtNav();
    });
    it('should add a new Case Type', async()=> {
        await CaseDataTypes.enterNewCaseType();        
    });
    it('should refresh and logout/login, verifying new case type persists', async ()=> {
        await browser.refresh();
        await expect (CaseDataTypes.createdCaseType).toExist();
        await Access.logout();
        await Access.login();
        await Access.cdtNav();
        await expect (CaseDataTypes.createdCaseType).toExist();
    });
    it ('should remove the created case type', async() => {
        await CaseDataTypes.removeCaseType();
    });
    it ('case type will still be gone after a refresh and a logout/login', async()=> {
        await browser.refresh();
        await expect (CaseDataTypes.createdCaseType).not.toExist();
        await Access.logout();
        await Access.login();
        await Access.cdtNav();
        await expect (CaseDataTypes.createdCaseType).not.toExist();
    });
})