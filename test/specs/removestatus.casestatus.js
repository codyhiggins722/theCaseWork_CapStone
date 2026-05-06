import Access from '../pageobjects/casework.siteaccess'
import CaseStatus from '../pageobjects/casework.casestatus'
import Casetypes from '../pageobjects/casework.casetypes';

describe('theCaseWork verify ability to create a Case Status under each category and then remove them', () => {
    it('log in and navigate to the Case Data Types workspace', async ()=> {
        await Access.start();
        await Access.login();
        await Access.cdtNav();
    });
    it('should create a "New" Case Status and then remove it', async() => {
        await CaseStatus.navNewStatus();
        await CaseStatus.removeCreatedStatusNew();
    });
    it('should create an "Active" Case Status and then remove it', async() => {
        await CaseStatus.navActiveStatus();
        await CaseStatus.statusGeneration();
        await CaseStatus.removeCreatedStatusActive();
    });
    it('should create a "Completed" Case Status and then remove it', async() => {
        await CaseStatus.navCompletedStatus();
        await CaseStatus.statusGeneration();
        await CaseStatus.removeCreatedStatusCompleted();
    });
    it('should create a "Closed" Case Status and then remove it', async() => {
        await CaseStatus.navClosedStatus();
        await CaseStatus.statusGeneration();
        await CaseStatus.removeCreatedStatusClosed();
    });
    it('should create a "Removed" Case Status and then remove it', async() => {
        await CaseStatus.navRemovedStatus();
        await CaseStatus.statusGeneration();
        await CaseStatus.removeCreatedStatusRemoved();
    });
    it('should refresh the browser and verify each status is removed', async() => {
        await Casetypes.verifyAllEntriesGone();
    });
    it('should log out and log back in and verify all five entries are still removed', async() => {
        await Access.logout();
        await Access.login();
        await Access.cdtNav();
        await Casetypes.verifyAllEntriesGone();
    });
})