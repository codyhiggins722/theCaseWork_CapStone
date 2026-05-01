import Site from './casework.base'
import CaseTypes from './casework.casetypes'
import { faker } from '@faker-js/faker'

class CaseStatus extends Site {
    savedRandomSentence = '';
    allRandomDescriptions = [];

    infoBubble(bubbleName) {
        return $(`//label[text()="${bubbleName}"]/following-sibling::button`)
    }
    get newPopupInfo() {
        return $('//div[contains(text(),"System status denoting a newly created case.")]')
    }
    get activePopupInfo() {
        return $('//div[contains(text(),"System status denoting an Active case.")]')
    }
    get completedPopupInfo() {
        return $('//div[contains(text(),"System status denoting a completed case.")]')
    }
    get closedPopupInfo() {
        return $('//div[contains(text(),"System status denoting a closed case.")]')
    }
    get removedPopupInfo() {
        return $('//div[contains(text(),"System status denoting a removed case.")]')
    }
    caseStatusAdd(statusBtnName) {
        return $(`button[data-testid="add-case-status-${statusBtnName}"]`)
    }
    createStatusWindow(statusWindowName) {
        return $(`//div/span[contains(text(), "${statusWindowName}")]`)
    }
    editPencilStatus(statusPencilName) {
        return $(`button[data-testid="case-status-edit-${statusPencilName}-${CaseTypes.savedRandomLabel}"]`)
    }
    get caseStatusStatus() {
        return $('input[data-testid="add-edit-status-status-input"]')
    }
    get caseStatusDescription() {
        return $('textarea[data-testid="add-edit-status-description-input"]')
    }
    get caseStatusSaveButton() {
        return $('button[data-testid="add-edit-status-save-button"]')
    }
    get createdStatusAll() {
        return $(`//span[contains(text(), "${CaseTypes.savedRandomLabel}")]`)
    }
    get createdStatusDescriptionAll() {
        return $(`//div[contains(text(), "${this.savedRandomSentence}")]`)
    }
    removeStatusButton(statusName) {
        return $(`[data-testid="case-status-remove-${statusName}-${CaseTypes.savedRandomLabel}"]`)
    }
    get createStatusCancel() {
        return $('[data-testid="add-edit-status-cancel-button"]')
    }
    async newBubble() {
        let retries = 0;
        let popupVisible = false;

        while (retries < 5 && popupVisible === false) {
            await this.infoBubble('New').click();
                if (await this.newPopupInfo.isExisting()) {
                    popupVisible = true;
                } else {
                    retries++;
                }
        }
                if (!popupVisible) {
                    console.log("Failed to display popup for 'New' bubble")
                }
    }
    async activeBubble() {
        let retries = 0;
        let popupVisible = false;

        while (retries < 5 && popupVisible === false) {
            await this.infoBubble('Active').click();
                if (await this.activePopupInfo.isExisting()) {
                    popupVisible = true;
                } else {
                    retries++;
                }
        }
                if (!popupVisible) {
                    console.log("Failed to display popup for 'New' bubble")
                }
    }
    async completedBubble() {
        let retries = 0;
        let popupVisible = false;

        while (retries < 5 && popupVisible === false) {
            await this.infoBubble('Completed').click();
                if (await this.completedPopupInfo.isExisting()) {
                    popupVisible = true;
                } else {
                    retries++;
                }
        }
                if (!popupVisible) {
                    console.log("Failed to display popup for 'New' bubble")
                }
    }
    async closedBubble() {
        let retries = 0;
        let popupVisible = false;

        while (retries < 5 && popupVisible === false) {
            await this.infoBubble('Closed').click();
                if (await this.closedPopupInfo.isExisting()) {
                    popupVisible = true;
                } else {
                    retries++;
                }
        }
                if (!popupVisible) {
                    console.log("Failed to display popup for 'New' bubble")
                }
    }
    async removedBubble() {
        let retries = 0;
        let popupVisible = false;

        while (retries < 5 && popupVisible === false) {
            await this.infoBubble('Removed').click();
                if (await this.removedPopupInfo.isExisting()) {
                    popupVisible = true;
                } else {
                    retries++;
                }
        }
                if (!popupVisible) {
                    console.log("Failed to display popup for 'New' bubble")
                }
    }
    async navNewStatus() {
        await browser.waitUntil(async () => {
            try {
                await this.caseStatusAdd('New').click();
                await this.createStatusWindow('New').waitForDisplayed({timeout:3000})
                await this.statusGeneration()
                return true;
            } catch (e) {
                return false;
            }
        }, {
            timeout: 20000,
            interval: 1000
        });
    }
    async navNewStatusBoundary() {
        await browser.waitUntil(async () => {
            try {
                await this.caseStatusAdd('New').click();
                await this.createStatusWindow('New').waitForDisplayed({timeout:3000})
                await this.typeUntilFullExpenseStatus();
                await this.typeUntilFullExpenseDescription();
                return true;
            } catch (e) {
                return false;
            }
        }, {
            timeout: 50000,
            interval: 1000
        });
    }
    async navActiveStatus() {
        await this.caseStatusAdd('Active').moveTo();
        await this.caseStatusAdd('Active').click();
        await this.createStatusWindow('Active').isDisplayed();
    }
    async navCompletedStatus() {
        await this.caseStatusAdd('Completed').moveTo();
        await this.caseStatusAdd('Completed').click();
        await this.createStatusWindow('Completed').isDisplayed();
    }
    async navClosedStatus() {
        await this.caseStatusAdd('Closed').moveTo();
        await this.caseStatusAdd('Closed').click();
        await this.createStatusWindow('Closed').isDisplayed();
    }
    async navRemovedStatus() {
        await this.caseStatusAdd('Removed').moveTo();
        await this.caseStatusAdd('Removed').click();
        await this.createStatusWindow('Removed').isDisplayed();
    }
    async navNewEdit() {
        await this.editPencilStatus('New').moveTo();
        await this.editPencilStatus('New').click();
    }
    async navActiveEdit() {
        await this.editPencilStatus('Active').moveTo();
        await this.editPencilStatus('Active').click();
    }
    async navCompletedEdit() {
        await this.editPencilStatus('Completed').moveTo();
        await this.editPencilStatus('Completed').click();
    }
    async navClosedEdit() {
        await this.editPencilStatus('Closed').moveTo();
        await this.editPencilStatus('Closed').click();
    }
    async navRemovedEdit() {
        await this.editPencilStatus('Removed').moveTo();
        await this.editPencilStatus('Removed').click();
    }
    async statusGeneration() {
        const status = CaseTypes.generateRandomEntry();
        await this.caseStatusStatus.setValue(status);
        await this.caseStatusSaveButton.click();
        await expect (this.createdStatusAll).toExist();
    }
    generateRandomDescription() {
        const newDescription = String(faker.lorem.sentence(2));
            if (newDescription.length > 200) {
                newDescription = newDescription.substring(0, 197) + "..."
            }
        this.savedRandomSentence = newDescription
        this.allRandomDescriptions.push(newDescription)
        return this.savedRandomSentence;
    }
    async descriptionGeneration() {
        const description = await this.generateRandomDescription();
        await this.caseStatusDescription.setValue(description);
        await this.caseStatusSaveButton.click();
        await this.createdStatusAll.moveTo();
        await expect(this.createdStatusDescriptionAll).toExist();
    }
    async verifyAllDescriptions() {
        for (const allRandomDescription of this.allRandomDescriptions) {
            const arrayDescriptions = $(`//div[contains(text(), "${allRandomDescription}")]`)
            await expect (arrayDescriptions).toExist();
        }
    }
    async removeCreatedStatusNew() {
        await this.removeStatusButton('New').moveTo();
        await this.removeStatusButton('New').click();
        await expect (this.createdStatusAll).not.toExist();
    }
    async removeCreatedStatusActive() {
        await this.removeStatusButton('Active').moveTo();
        await this.removeStatusButton('Active').click();
        await expect (this.createdStatusAll).not.toExist();
    }
    async removeCreatedStatusCompleted() {
        await this.removeStatusButton('Completed').moveTo();
        await this.removeStatusButton('Completed').click();
        await expect (this.createdStatusAll).not.toExist();
    }
    async removeCreatedStatusClosed() {
        await this.removeStatusButton('Closed').moveTo();
        await this.removeStatusButton('Closed').click();
        await expect (this.createdStatusAll).not.toExist();
    }
    async removeCreatedStatusRemoved() {
        await this.removeStatusButton('Removed').moveTo();
        await this.removeStatusButton('Removed').click();
        await expect (this.createdStatusAll).not.toExist();
    }
    async typeUntilFullExpenseStatus() {
        const input = await this.caseStatusStatus;
        await input.click();
        await input.clearValue();
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
        let prevLength = 0;
        let currLength = 0;

        do{
            prevLength = (await this.caseStatusStatus.getValue()).length;

            const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
            await browser.keys(randomChar);

            currLength = (await this.caseStatusStatus.getValue()).length;

            if (currLength >= 100) break;

        } while (currLength > prevLength);
        console.log(`The status field capped out at ${currLength}`);
        await expect (currLength).toBe(50)
    }
    async typeUntilFullExpenseDescription() {
        const input = await this.caseStatusDescription;
        await input.click();
        await input.clearValue();
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
        let prevLength = 0;
        let currLength = 0;

        do{
            prevLength = (await this.caseStatusDescription.getValue()).length;

            const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
            await browser.keys(randomChar);

            currLength = (await this.caseStatusDescription.getValue()).length;

            if (currLength >= 300) break;

        } while (currLength > prevLength);
        console.log(`The description field capped out at ${currLength}`);
        await expect (currLength).toBe(200)
        await this.createStatusCancel.click();
    }
}
export default new CaseStatus();