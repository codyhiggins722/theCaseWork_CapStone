import Access from '../pageobjects/casework.siteaccess'
import CaseStatus from '../pageobjects/casework.casestatus'
import Casetypes from '../pageobjects/casework.casetypes';

describe('theCaseWork verify ability to create a Case Status under each category', () => {
    it('log in and reach the dashboard', async ()=> {
        await Access.open();
        await Access.login();
    });
    it('should navigate to Case Data Types workspace', async ()=> {
        await Access.cdtNav();
    });
    it('should create a "New" Case Status', async() => {
        await browser.pause(5000)
        await CaseStatus.navNewStatus();
        await CaseStatus.statusGeneration();
    });
    it('should create an "Active" Case Status', async() => {
        await CaseStatus.navActiveStatus();
        await CaseStatus.statusGeneration();
    });
    it('should create a "Completed" Case Status', async() => {
        await CaseStatus.navCompletedStatus();
        await CaseStatus.statusGeneration();
    });
    it('should create a "Closed" Case Status', async() => {
        await CaseStatus.navClosedStatus();
        await CaseStatus.statusGeneration();
    });
    it('should create a "Removed" Case Status', async() => {
        await CaseStatus.navRemovedStatus();
        await CaseStatus.statusGeneration();
    });
    it('should refresh the browser and verify everything is still there', async() => {
        await Casetypes.verifyAllEntries();
    })
})