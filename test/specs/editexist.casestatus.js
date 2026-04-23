import Access from '../pageobjects/casework.siteaccess'
import CaseStatus from '../pageobjects/casework.casestatus'

describe('theCaseWork verify ability to create a Case Status under each category and then edit it by adding a description', () => {
    it('log in and reach the dashboard', async ()=> {
        await Access.open();
        await Access.login();
    });
    it('should navigate to Case Data Types workspace', async ()=> {
        await Access.cdtNav();
    });
    it('should create a "New" Case Status, then add a desription to it', async() => {
        await CaseStatus.navNewStatus();
        await CaseStatus.statusGeneration();
        await CaseStatus.navNewEdit();
        await CaseStatus.descriptionGeneration();
    });
})