import Site from './casework.base'
import { faker } from '@faker-js/faker'

class CaseTypes extends Site {
    savedRandomLabel = '';
    allRandomLabels = [];

    get newCaseType() {
        return $('input[data-testid="case-type-panel-type-input"]')
    }
    get newCaseTypeAdd() {
        return $('button[data-testid="case-type-panel-add-button"]')
    }
    get createdCaseType() {
        return $(`//span[contains(text(), "${this.savedRandomLabel}")]`)
    }
    get removeCaseTypeButton() {
        return $(`button[data-testid="case-data-type-${this.savedRandomLabel}"]`)
    }
    generateRandomEntry() {
        const newLabel = faker.word.adjective() + ' ' + faker.word.noun();
        this.savedRandomLabel = newLabel;
        this.allRandomLabels.push(newLabel);
        return this.savedRandomLabel;
    }
    async enterNewCaseType() {
        const label = this.generateRandomEntry();
        await this.newCaseType.setValue(label);
        await this.newCaseTypeAdd.click();
        await expect (this.createdCaseType).toExist();
    }
    async removeCaseType() {
        await this.removeCaseTypeButton.moveTo();
        await this.removeCaseTypeButton.click();
        await expect (this.createdCaseType).not.toExist();
    }
    async typeUntilFullCaseTypes() {
        const input = await this.newCaseType;
        await input.click();
        await input.clearValue();
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
        let prevLength = 0;
        let currLength = 0;

        do{
            prevLength = (await this.newCaseType.getValue()).length;

            const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
            await browser.keys(randomChar);

            currLength = (await this.newCaseType.getValue()).length;

            if (currLength >= 100) break;

        } while (currLength > prevLength);
        console.log(`The field capped out at ${currLength}`);
    }
    async verifyAllEntries() {
        for (const allRandomLabel of this.allRandomLabels) {
            const arraylabel = $(`//span[contains(text(), "${allRandomLabel}")]`)
            await expect (arraylabel).toExist();
        }
    }
}
export default new CaseTypes();