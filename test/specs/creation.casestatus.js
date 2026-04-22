import Access from '../pageobjects/casework.siteaccess'
import CaseStatus from '../pageobjects/casework.casestatus'

describe('theCaseWork verify ability to create a Case Status under each category', () => {
    it('log in and reach the dashboard', async ()=> {
        await Access.open();
        await Access.login();
    });
    it('should navigate to Case Data Types workspace', async ()=> {
        await Access.cdtNav();
    });
    it('should create a "New" Case Status', async() => {
        await CaseStatus.generateNewCaseStatus();
    });
    it('should create a "Active" Case Status', async() => {
    });
    it('should create a "Completed" Case Status', async() => {
    });
    it('should create a "Closed" Case Status', async() => {
    });
    it('should create a "Removed" Case Status', async() => {
    });
})