import Access from '../pageobjects/casework.siteaccess'
import CaseStatus from '../pageobjects/casework.casestatus'

describe('theCaseWork verify that entered status and description do not exceed bounds set for field', () => {
    it('log in and navigate to Case Data Types workspace', async ()=> {
        await Access.open();
        await Access.login();
        await Access.cdtNav();
    });
    it('should enter characters for "New" case status and description and ensure characters meet but do not exceed 50 and 200 respectively' , async() => {
        await CaseStatus.navNewStatusBoundary();
    });
    it('should enter characters for "Active" case status and description and ensure characters meet but do not exceed 50 and 200 respectively', async() => {
        await CaseStatus.navActiveStatus();
        await CaseStatus.typeUntilFullExpenseStatus();
        await CaseStatus.typeUntilFullExpenseDescription();
    });
    it('should enter characters for "Completed" case status and description and ensure characters meet but do not exceed 50 and 200 respectively', async() => {
        await CaseStatus.navCompletedStatus();
        await CaseStatus.typeUntilFullExpenseStatus();
        await CaseStatus.typeUntilFullExpenseDescription();
    });
    it('should enter characters for "Closed" case status and description and ensure characters meet but do not exceed 50 and 200 respectively', async() => {
        await CaseStatus.navClosedStatus();
        await CaseStatus.typeUntilFullExpenseStatus();
        await CaseStatus.typeUntilFullExpenseDescription();
    });
    it('should enter characters for "Removed" case status and description and ensure characters meet but do not exceed 50 and 200 respectively', async() => {
        await CaseStatus.navRemovedStatus();
        await CaseStatus.typeUntilFullExpenseStatus();
        await CaseStatus.typeUntilFullExpenseDescription();
    });
})