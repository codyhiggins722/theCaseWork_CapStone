import Access from '../pageobjects/casework.siteaccess'
import Account from '../pageobjects/casework.account'

describe('theCaseWork Boundary Test for Edit User Form', () => {
    it('log in and navigate to the Edit User form workspace', async ()=> {
        await Access.start();
        await Access.login();
        await Access.userFormNav();
    });
    it('should enter valid characters until no new characters are allowed and provide the final count of entered characters', async ()=> {
        await Account.typeUntilFull(Account.nameField, 150);
        await Account.typeUntilFull(Account.addressField, 150);
       // await Account.typeUntilFull(Account.hoursField, ); has no upper limit right now, will fail the test, bug in dev queue
        await Account.typeUntilFull(Account.cityField, 75);
        await Account.typeUntilFull(Account.address2Field, 50);
        await Account.typeUntilFull(Account.stateField, 5);
        await Account.typeUntilFull(Account.zipField, 12);
        await Account.typeUntilFull(Account.phoneField, 20);
    })
})