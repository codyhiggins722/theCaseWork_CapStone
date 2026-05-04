import Access from '../pageobjects/casework.siteaccess'
import ExpenseTypes from '../pageobjects/casework.expensetypes'

describe('theCaseWork CRUD test for Expense Type workspace', () => {
    it('log in and navigate to the Case Data Types workspace', async ()=> {
        await Access.open();
        await Access.login();
        await Access.cdtNav();
    });
    it('should enter a new expense type and verify it appears', async ()=> {
        await ExpenseTypes.enterNewExpenseType();
    });
    it('should refresh and logout/login, verifying new expense type persists', async ()=> {
        await browser.refresh();
        await expect (ExpenseTypes.createdExpenseType).toExist();
        await Access.logout();
        await Access.login();
        await Access.cdtNav();
        await expect (ExpenseTypes.createdExpenseType).toExist();
    });
    it ('should remove the created expense type', async() => {
        await ExpenseTypes.removeExpenseType();
    });
    it ('expense type will still be gone after a refresh and a logout/login', async()=> {
        await browser.refresh();
        await expect (ExpenseTypes.createdExpenseType).not.toExist();
        await Access.logout();
        await Access.login();
        await Access.cdtNav();
        await expect (ExpenseTypes.createdExpenseType).not.toExist();
    });
})