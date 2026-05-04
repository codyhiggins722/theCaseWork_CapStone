import Site from './casework.base'
import CaseTypes from './casework.casetypes'
import { faker } from '@faker-js/faker'

class Account extends Site {
    savedPhoneNumber = '';
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
        return $('[data-testid="edit-user=update-button"]')
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
    generatePhoneNumber() {
        const newNumber = faker.string.numeric(10);
        this.savedPhoneNumber = newNumber;
        return this.savedPhoneNumber;
    }
    generateRandomShortEntry() {
        const shortEntry = faker.number.int({min: 1, max: 5})
        const newLabel = faker.string.numeric(shortEntry)
        this.savedRandomLabel = newLabel;
        return this.savedRandomLabel;
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
        const label = CaseTypes.generateRandomEntry();
        await this.hoursField.doubleClick();
        await this.hoursField.clearValue();
            if(await this.hoursField.getValue() !== "") {
                await this.hoursField.clearValue();
            }
        await this.hoursField.setValue(label);
        await expect (this.enteredValue).toExist();
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
    async clearAllField(){
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
}
export default new Account();