import Site from './casework.base'
import { faker } from '@faker-js/faker'

class ExpenseTypes extends Site {
    savedRandomLabel = '';

    get newExpenseType() {
        return $('input[data-testid="expense-type-panel-input"]')
    }
    get newExpenseTypeAdd() {
        return $('button[data-testid="expense-type-panel-add-button"]')
    }
    get createdExpenseType() {
        return $(`//span[contains(text(), "${this.savedRandomLabel}")]`)
    }
    get removeExpenseTypeButton() {
        return $(`button[data-testid="case-data-type-${this.savedRandomLabel}"]`)
    }
    generateRandomEntry() {
        this.savedRandomLabel = faker.word.adjective() + ' ' + faker.word.noun();
        return this.savedRandomLabel;
    }
    async enterNewExpenseType() {
        const label = this.generateRandomEntry();
        await this.newExpenseType.setValue(label);
        await this.newExpenseTypeAdd.click();
        await expect (this.createdExpenseType).toExist();
    }
    async removeExpenseType() {
        await this.removeExpenseTypeButton.moveTo();
        await this.removeExpenseTypeButton.click();
        await expect (this.createdExpenseType).not.toExist();
    }
    async typeUntilFullExpenseTypes() {
        const input = await this.newExpenseType;
        await input.click();
        await input.clearValue();
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
        let prevLength = 0;
        let currLength = 0;

        do{
            prevLength = (await this.newExpenseType.getValue()).length;

            const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
            await browser.keys(randomChar);

            currLength = (await this.newExpenseType.getValue()).length;

            if (currLength >= 100) break;

        } while (currLength > prevLength);
        console.log(`The field capped out at ${currLength}`);
    }
}
export default new ExpenseTypes();