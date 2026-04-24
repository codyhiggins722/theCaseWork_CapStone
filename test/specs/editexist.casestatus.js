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
    it('should create a "New" Case Status, then add a description to it', async() => {
        await CaseStatus.navNewStatus();
        await CaseStatus.statusGeneration();
        await CaseStatus.navNewEdit();
        await CaseStatus.descriptionGeneration();
    });
    it('should create an "Active" Case Status, then add a description to it', async() => {
        await CaseStatus.navActiveStatus();
        await CaseStatus.statusGeneration();
        await CaseStatus.navActiveEdit();
        await CaseStatus.descriptionGeneration();
    });
    it('should create a "Completed" Case Status, then add a description to it', async() => {
        await CaseStatus.navCompletedStatus();
        await CaseStatus.statusGeneration();
        await CaseStatus.navCompletedEdit();
        await CaseStatus.descriptionGeneration();
    });
    it('should create a "Closed" Case Status, then add a description to it', async() => {
        await CaseStatus.navClosedStatus();
        await CaseStatus.statusGeneration();
        await CaseStatus.navClosedEdit();
        await CaseStatus.descriptionGeneration();
    });
    it('should create a "Removed" Case Status, then add a description to it', async() => {
        await CaseStatus.navRemovedStatus();
        await CaseStatus.statusGeneration();
        await CaseStatus.navRemovedEdit();
        await CaseStatus.descriptionGeneration();
    });
    it('should refresh the browser and verify all descriptions are still there', async() => {

    });
})