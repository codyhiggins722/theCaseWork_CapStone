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
    savedState = '';
    nameVal = ''; 
    hoursVal = ''; 
    addressVal = ''; 
    cityVal = ''; 
    address2Val = '';
    zipVal = '';
    phoneVal = '';
    nameValRedux = '';
    hoursValRedux = ''; 
    addressValRedux = ''; 
    cityValRedux = ''; 
    address2ValRedux = '';
    zipValRedux = '';
    phoneValRedux = '';
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
        this.savedState = newLabel;
        return newLabel;
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
        this.savedPhoneNumber = newNumber;
        return this.secondNumber;
    }
    generateRandomShortEntryAgain() {
        const shortEntry = faker.number.int({min: 1, max: 5})
        const newLabel = faker.string.numeric(shortEntry)
        this.secondLabel = newLabel;
        this.savedState = newLabel;
        return newLabel;
    }
    generateRandomHours() {
        const randomNumber = Math.floor(Math.random()*24)+1;
        const newHours = randomNumber.toString();
        this.randomHours = newHours;
        this.hoursVal = newHours;
        return newHours;
    }
    generateRandomHoursAgain() {
        const randomNumber = Math.floor(Math.random()*24)+1;
        const newHours = randomNumber.toString();
        this.randomHours = newHours;
        this.hoursValRedux = newHours;
        return newHours;
    }
    async enterAlphaEntry(element){
        const label = CaseTypes.generateRandomEntry();
        await element.doubleClick();
        await element.clearValue();
            if(await element.getValue() !== "") {
                await element.clearValue();
            }
        await element.setValue(label);
        return label;
    }
    async enterNumberEntry(element){
        const label = this.generatePhoneNumber();
        await element.doubleClick();
        await element.clearValue();
            if(await element.getValue() !== "") {
                await element.clearValue();
            }
        await element.setValue(label);
        return label;
    }
    async enterState(){
        const label = this.generateRandomShortEntry();
        this.savedState = label;
        await this.stateField.setValue(label);
        await expect(this.stateField).toHaveValue(this.savedState);
    }
    async enterStateRedux(){
        const label = this.generateRandomShortEntryAgain();
        this.savedState = label;
        await this.stateField.setValue(label);
        await expect(this.stateField).toHaveValue(this.savedState);
    }
    async enterHours(){
        const label = this.generateRandomHours();
        this.hoursVal = label;
        await this.hoursField.setValue(label);
        await expect(this.hoursField).toHaveValue(this.hoursVal);
    }
    async enterHoursRedux(){
        const label = this.generateRandomHoursAgain();
        this.hoursValRedux = label;
        await this.hoursField.setValue(label);
        await expect(this.hoursField).toHaveValue(this.hoursValRedux);
    }
    async enterAlphas(){
        this.nameVal = await this.enterAlphaEntry(this.nameField);
        this.addressVal = await this.enterAlphaEntry(this.addressField);
        this.cityVal = await this.enterAlphaEntry(this.cityField);
        this.address2Val = await this.enterAlphaEntry(this.address2Field);
    }
    async enterNumbers(){
        this.zipVal = await this.enterNumberEntry(this.zipField);
        this.phoneVal = await this.enterNumberEntry(this.phoneField);
    }
    async enterAlphasRedux(){
        this.nameValRedux = await this.enterAlphaEntry(this.nameField);
        this.addressValRedux = await this.enterAlphaEntry(this.addressField);
        this.cityValRedux = await this.enterAlphaEntry(this.cityField);
        this.address2ValRedux = await this.enterAlphaEntry(this.address2Field);
    }
    async enterNumbersRedux(){
        this.zipValRedux = await this.enterNumberEntry(this.zipField);
        this.phoneValRedux = await this.enterNumberEntry(this.phoneField);
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
        await this.enterAlphaEntryRedux(this.nameField);
        await this.enterHoursRedux();
        await this.enterAlphaEntryRedux(this.addressField);
        await this.enterAlphaEntryRedux(this.cityField);
        await this.enterAlphaEntryRedux(this.address2Field);
        await this.enterStateRedux();
        await this.enterNumberEntryRedux(this.zipField);
        await this.enterNumberEntryRedux(this.phoneField);
    }
    async verifyAllUserFacts() {
        await expect(this.nameField).toHaveValue(this.nameVal);
        await expect(this.addressField).toHaveValue(this.addressVal);
        await expect(this.cityField).toHaveValue(this.cityVal);
        await expect(this.address2Field).toHaveValue(this.address2Val);
    }
    async verifyAllUserFactsAgain() {
        await expect(this.nameField).toHaveValue(this.nameValRedux);
        await expect(this.addressField).toHaveValue(this.addressValRedux);
        await expect(this.cityField).toHaveValue(this.cityValRedux);
        await expect(this.address2Field).toHaveValue(this.address2ValRedux);
    }
    async verifyAllUserNumbers() {
        await expect(this.zipField).toHaveValue(this.zipVal);
        await expect(this.phoneField).toHaveValue(this.phoneVal);
    }
    async verifyAllUserNumbersAgain() {
        await expect(this.zipField).toHaveValue(this.zipValRedux);
        await expect(this.phoneField).toHaveValue(this.phoneValRedux);
    }
    async verifyStateValue(){
        await expect(this.stateField).toHaveValue(this.savedState);
    }
    async verifyHoursValue(){
        await expect(this.hoursField).toHaveValue(this.hoursVal);
    }
    async verifyHoursValueRedux(){
        await expect(this.hoursField).toHaveValue(this.hoursValRedux);
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
        await this.verifyStateValue();
        await this.verifyHoursValue();
    }
    async verificationExistenceRedux() {
        await this.updateButton.click();
        await expect (this.updateButton).not.toExist();
        await browser.refresh();
        await Access.meUser.moveTo();
        await Access.meUser.click()
        await expect (Access.editUserForm).toExist();
        await this.verifyAllUserFactsAgain();
        await this.verifyAllUserNumbersAgain();
        await this.verifyStateValue();
        await this.verifyHoursValueRedux();
    }
    async verificationExistenceNoUpdate() {
        await browser.refresh();
        await Access.meUser.moveTo();
        await Access.meUser.click()
        await expect (Access.editUserForm).toExist();
        await this.verifyAllUserFacts();
        await this.verifyAllUserNumbers();
        await this.verifyStateValue();
    }
    async verificationExistenceLogOut() {
        await Access.logout();
        await Access.login();
        await Access.userFormNav();
        await this.verifyAllUserFactsAgain();
        await this.verifyAllUserNumbersAgain();
        await this.verifyStateValue();
        await this.verifyHoursValueRedux();
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
    async typeUntilFull(element, expectedLimit) {
        await element.waitForClickable();
        await element.click();
        await element.clearValue();
        let currLength = 0;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
        currLength = (await element.getValue()).length;
        while (true) {
            const prevLength = currLength;
            const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
            await element.addValue(randomChar);
            const currentVal = await element.getValue();
            currLength = currentVal.length;
            if (currLength === prevLength || currLength > 200) break;

        }
        console.log(`The field capped out at ${currLength}`);
        await expect (currLength).toBe(expectedLimit)
    }
}
export default new Account();