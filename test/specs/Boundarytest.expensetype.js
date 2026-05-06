import Access from '../pageobjects/casework.siteaccess'
import ExpenseTypes from '../pageobjects/casework.expensetypes'

describe('theCaseWork Boundary test for Case Type workspace', () => {
    it('log in and navigate to the Case Data Types workspace', async ()=> {
        await Access.start();
        await Access.login();
        await Access.cdtNav();
    });
    it('should enter valid characters until no new characters are allowed and provide the final count of entered characters(50)', async ()=> {
        await ExpenseTypes.typeUntilFullExpenseTypes();
    });
})