import Access from '../pageobjects/casework.siteaccess'
import CaseStatus from '../pageobjects/casework.casestatus'

describe('theCaseWork verify informational bubbles provide correct info', () => {
    it('log in and navigate to the Case Data Types workspace', async ()=> {
        await Access.open();
        await Access.login();
        await Access.cdtNav();
    });
    it('for each bubble, for each category, should be clickable and display appropriate info', async()=> {
        await CaseStatus.newBubble();
        await CaseStatus.activeBubble();
        await CaseStatus.completedBubble();
        await CaseStatus.closedBubble();
        await CaseStatus.removedBubble();
    });
})