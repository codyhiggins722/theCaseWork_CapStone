import Access from '../pageobjects/casework.siteaccess'

describe('theCaseWork CRUD test for Case Type workspace', () => {
    it('log in and reach the dashboard', async ()=> {
        await Access.open();
        await Access.login();
    });
    it('should navigate to Case Data Types workspace', async ()=> {
        await Access.userFormNav();
    });
})