import Site from './casework.base'
import CaseTypes from './casework.casetypes'
import Access from './casework.siteaccess'
import { faker } from '@faker-js/faker'

class Account extends Site {
    savedPhoneNumber = '';
    allSavedPhoneNumbers = [];
    secondLabel = '';
    allSecondLabels = [];
    secondNumber = '';
    allSecondNumbers = [];
    get nameField(){
        return $('[name="name"]')
    }
    get hoursField(){
        return $('[name="expectedHours"]')
    }
    get addressField(){
        return $('[name="address.address1"]')
    }
    get cityField(){
        return $('[name="address.city"]')
    }
    get address2Field(){
        return $('[name="address.address2"]')
    }
    get stateField(){
        return $('[name="address.state"]')
    }
    get zipField(){
        return $('[name="address.zip"]')
    }
    get phoneField(){
        return $('[name="phone.number"]')
    }
    get phoneDropdown(){
        return $('[name="phone.type"]')
    }
    phoneTypeSelection(type){
        return $(`option[data-testid="edit-user-phone-type-option-${type}"]`)
    }
    get updateButton(){
        return $('[data-testid="edit-user-update-button"]')
    }
    phoneType(type){
        return $(`//span[contains(text(), "${type}")]`)
    }
    get enteredValue(){
        return $(`[value="${CaseTypes.savedRandomLabel}"]`)
    }
    get enteredPhoneNumber(){
        return $(`[value="${this.savedPhoneNumber}"]`)
    }
    blankValues(field){
        return $(`[data-testid="edit-user-${field}-input"]`)
    }
    blankValuesVerify(field){
        return $(`[data-testid="edit-user-${field}-input"][value=""]`)
    }
    generatePhoneNumber() {
        const newNumber = faker.string.numeric(10);
        this.savedPhoneNumber = newNumber;
        this.allSavedPhoneNumbers.push(newNumber);
        return this.savedPhoneNumber;
    }
    generateRandomShortEntry() {
        const shortEntry = faker.number.int({min: 1, max: 5})
        const newLabel = faker.string.numeric(shortEntry)
        CaseTypes.savedRandomLabel = newLabel;
        CaseTypes.allRandomLabels.push(newLabel);
        return CaseTypes.savedRandomLabel;
    }
     generateRandomEntryAgain() {
        const newLabel = faker.word.adjective() + ' ' + faker.word.noun();
        this.secondLabel = newLabel;
        this.allSecondLabels.push(newLabel);
        return this.secondLabel;
    }
    generatePhoneNumberAgain() {
        const newNumber = faker.string.numeric(10);
        this.secondNumber = newNumber;
        this.allSecondNumbers.push(newNumber);
        return this.secondNumber;
    }
    generateRandomShortEntryAgain() {
        const shortEntry = faker.number.int({min: 1, max: 5})
        const newLabel = faker.string.numeric(shortEntry)
        this.secondLabel = newLabel;
        this.allSecondLabels.push(newLabel);
        return this.secondLabel;
    }
    async enterName(){
        const label = CaseTypes.generateRandomEntry();
        await this.nameField.doubleClick();
        await this.nameField.clearValue();
            if(await this.nameField.getValue() !== "") {
                await this.nameField.clearValue();
            }
        await this.nameField.setValue(label);
        await expect (this.enteredValue).toExist();
    }
    async enterHours(){
        const label = this.generatePhoneNumber();
        await this.hoursField.doubleClick();
        await this.hoursField.clearValue();
            if(await this.hoursField.getValue() !== "") {
                await this.hoursField.clearValue();
            }
        await this.hoursField.setValue(label);
        await expect (this.enteredPhoneNumber).toExist();
    }
    async enterAddress1(){
        const label = CaseTypes.generateRandomEntry();
        await this.addressField.doubleClick();
        await this.addressField.clearValue();
            if(await this.addressField.getValue() !== "") {
                await this.addressField.clearValue();
            }
        await this.addressField.setValue(label);
        await expect (this.enteredValue).toExist();
    }
    async enterCity(){
        const label = CaseTypes.generateRandomEntry();
        await this.cityField.doubleClick();
        await this.cityField.clearValue();
            if(await this.cityField.getValue() !== "") {
                await this.cityField.clearValue();
            }
        await this.cityField.setValue(label);
        await expect (this.enteredValue).toExist();
    }
    async enterAddress2(){
        const label = CaseTypes.generateRandomEntry();
        await this.address2Field.doubleClick();
        await this.address2Field.clearValue();
            if(await this.address2Field.getValue() !== "") {
                await this.address2Field.clearValue();
            }
        await this.address2Field.setValue(label);
        await expect (this.enteredValue).toExist();
    }
    async enterState(){
        const label = this.generateRandomShortEntry();
        await this.stateField.doubleClick();
        await this.stateField.clearValue();
            if(await this.stateField.getValue() !== "") {
                await this.stateField.clearValue();
            }
        await this.stateField.setValue(label);
        await expect (this.enteredValue).toExist();
    }
    async enterZip(){
        const label = this.generatePhoneNumber();
        await this.zipField.doubleClick();
        await this.zipField.clearValue();
            if(await this.zipField.getValue() !== "") {
                await this.zipField.clearValue();
            }
        await this.zipField.setValue(label);
        await expect (this.enteredPhoneNumber).toExist();
    }
    async enterPhone(){
        const label = this.generatePhoneNumber();
        await this.phoneField.doubleClick();
        await this.phoneField.clearValue();
            if(await this.phoneField.getValue() !== "") {
                await this.phoneField.clearValue();
            }
        await this.phoneField.setValue(label);
        await expect (this.enteredPhoneNumber).toExist();
    }
    async enterNameRedux(){
        const label = this.generateRandomEntryAgain();
        await this.nameField.doubleClick();
        await this.nameField.clearValue();
            if(await this.nameField.getValue() !== "") {
                await this.nameField.clearValue();
            }
        await this.nameField.setValue(label);
        await expect (this.enteredValue).toExist();
    }
    async enterHoursRedux(){
        const label = this.generatePhoneNumberAgain();
        await this.hoursField.doubleClick();
        await this.hoursField.clearValue();
            if(await this.hoursField.getValue() !== "") {
                await this.hoursField.clearValue();
            }
        await this.hoursField.setValue(label);
        await expect (this.enteredPhoneNumber).toExist();
    }
    async enterAddress1Redux(){
        const label = this.generateRandomEntryAgain();
        await this.addressField.doubleClick();
        await this.addressField.clearValue();
            if(await this.addressField.getValue() !== "") {
                await this.addressField.clearValue();
            }
        await this.addressField.setValue(label);
        await expect (this.enteredValue).toExist();
    }
    async enterCityRedux(){
        const label = this.generateRandomShortEntryAgain();
        await this.cityField.doubleClick();
        await this.cityField.clearValue();
            if(await this.cityField.getValue() !== "") {
                await this.cityField.clearValue();
            }
        await this.cityField.setValue(label);
        await expect (this.enteredValue).toExist();
    }
    async enterAddress2Redux(){
        const label = this.generateRandomEntryAgain();
        await this.address2Field.doubleClick();
        await this.address2Field.clearValue();
            if(await this.address2Field.getValue() !== "") {
                await this.address2Field.clearValue();
            }
        await this.address2Field.setValue(label);
        await expect (this.enteredValue).toExist();
    }
    async enterStateRedux(){
        const label = this.generateRandomShortEntryAgain();
        await this.stateField.doubleClick();
        await this.stateField.clearValue();
            if(await this.stateField.getValue() !== "") {
                await this.stateField.clearValue();
            }
        await this.stateField.setValue(label);
        await expect (this.enteredValue).toExist();
    }
    async enterZipRedux(){
        const label = this.generatePhoneNumberAgain();
        await this.zipField.doubleClick();
        await this.zipField.clearValue();
            if(await this.zipField.getValue() !== "") {
                await this.zipField.clearValue();
            }
        await this.zipField.setValue(label);
        await expect (this.enteredPhoneNumber).toExist();
    }
    async enterPhoneRedux(){
        const label = this.generatePhoneNumberAgain();
        await this.phoneField.doubleClick();
        await this.phoneField.clearValue();
            if(await this.phoneField.getValue() !== "") {
                await this.phoneField.clearValue();
            }
        await this.phoneField.setValue(label);
        await expect (this.enteredPhoneNumber).toExist();
    }
    async clearAllFields(){
        await this.nameField.click();
        await this.nameField.clearValue();
        await this.hoursField.click();
        await this.hoursField.clearValue();
        await this.addressField.click();
        await this.addressField.clearValue();
        await this.cityField.click();
        await this.cityField.clearValue();
        await this.address2Field.click();
        await this.address2Field.clearValue();
        await this.stateField.click();
        await this.stateField.clearValue();
        await this.zipField.click();
        await this.zipField.clearValue();
        await this.phoneField.click();
        await this.phoneField.clearValue();
    }
    async clearAllNonRequiredFields(){
        await this.addressField.click();
        await this.addressField.clearValue();
        await this.cityField.click();
        await this.cityField.clearValue();
        await this.address2Field.click();
        await this.address2Field.clearValue();
        await this.stateField.click();
        await this.stateField.clearValue();
        await this.zipField.click();
        await this.zipField.clearValue();
        await this.phoneField.click();
        await this.phoneField.clearValue();
    }
    async checkDropdown(){
        await this.phoneDropdown.click();
        await this.phoneTypeSelection('Office').click();
        await expect (this.phoneType('Office')).toExist();
        await this.phoneDropdown.click();
        await this.phoneTypeSelection('Cell').click();
        await expect (this.phoneType('Cell')).toExist();
        await this.phoneDropdown.click();
        await this.phoneTypeSelection('Other').click();
        await expect (this.phoneType('Other')).toExist();
    }
    async fieldEntryRedux(){
        await this.enterNameRedux();
        await this.enterHoursRedux();
        await this.enterAddress1Redux();
        await this.enterCityRedux();
        await this.enterAddress2Redux();
        await this.enterStateRedux();
        await this.enterZipRedux();
        await this.enterPhoneRedux();
    }
    async verifyAllUserFacts() {
        for (const allRandomLabel of CaseTypes.allRandomLabels) {
            const arraylabel = $(`[value="${allRandomLabel}"]`)
            await expect (arraylabel).toExist();
        }
    }
    async verifyAllUserFactsAgain() {
        for (const allSecondLabel of this.allSecondLabels) {
            const arraylabel = $(`[value="${allSecondLabel}"]`)
            await expect (arraylabel).toExist();
        }
    }
    async verifyAllUserNumbers() {
        for (const allSavedPhoneNumber of this.allSavedPhoneNumbers) {
            const arraylabel = $(`[value="${allSavedPhoneNumber}"]`)
            await expect (arraylabel).toExist();
        }
    }
    async verifyAllUserNumbersAgain() {
        for (const allSecondNumber of this.allSecondNumbers) {
            const arraylabel = $(`[value="${allSecondNumber}"]`)
            await expect (arraylabel).toExist();
        }
    }
    async verificationExistence() {
        await this.updateButton.click();
        await expect (this.updateButton).not.toExist();
        await browser.refresh();
        await Access.meUser.moveTo();
        await Access.meUser.click()
        await expect (Access.editUserForm).toExist();
        await this.verifyAllUserFacts();
        await this.verifyAllUserNumbers();
    }
    async verificationExistenceNoUpdate() {
        await browser.refresh();
        await Access.meUser.moveTo();
        await Access.meUser.click()
        await expect (Access.editUserForm).toExist();
        await this.verifyAllUserFacts();
        await this.verifyAllUserNumbers();
    }
    async verificationExistenceLogOut() {
        await this.updateButton.click();
        await expect (this.updateButton).not.toExist();
        await Access.logout
        await Access.login
        await Access.userFormNav
        await this.verifyAllUserFactsAgain();
        await this.verifyAllUserNumbersAgain();
    }
    async verificationVanished(){
        const fields = ['address1', 'city', 'address2', 'state', 'zip', 'phone'];
        for (const name of fields) {
            const field = this.blankValues(name);
            await field.waitForExist();
            let actualValue = await field.getValue();
            let attempts = 0;
            while (actualValue !== "" && attempts < 5) {
                console.log(`${name} is not blank, it says: ${actualValue}`);
                await field.click();
                await field.clearValue();
                await this.clearAllNonRequiredFields();
                actualValue = await field.getValue();
                attempts++;
            }
            expect(actualValue).toBe("")
        }
    }
    async verificationVanishedSaved(){
        const fields = ['address1', 'city', 'address2', 'state', 'zip', 'phone'];
        for (const name of fields) {
            const field = this.blankValues(name);
            await field.waitForExist();
            let actualValue = await field.getValue();
            let attempts = 0;
            while (actualValue !== "" && attempts < 5) {
                console.log(`${name} is not blank, it says: ${actualValue}`);
                await field.click();
                await field.clearValue();
                await this.clearAllNonRequiredFields();
                actualValue = await field.getValue();
                attempts++;
            }
            expect(actualValue).toBe("")
        }
        await this.updateButton.click();
    }
    async verifyBlankValues(){
        await expect (this.blankValuesVerify('address1')).toExist();
        await expect (this.blankValuesVerify('city')).toExist();
        await expect (this.blankValuesVerify('address2')).toExist();
        await expect (this.blankValuesVerify('state')).toExist();
        await expect (this.blankValuesVerify('zip')).toExist();
        await expect (this.blankValuesVerify('phone')).toExist();
    }
}
export default new Account();