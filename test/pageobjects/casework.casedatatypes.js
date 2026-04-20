import Site from './casework.base'
import { faker } from '@faker-js/faker'

class CaseDataTypes extends Site {
    savedRandomLabel = '';

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
        this.savedRandomLabel = faker.word.adjective() + ' ' + faker.word.noun();
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
        await expect (this.removeCaseTypeButton).not.toExist();
    }
}
export default new CaseDataTypes();