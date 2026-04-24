import Site from './casework.base'
import CaseTypes from './casework.casetypes'
import { faker } from '@faker-js/faker';

class CaseStatus extends Site {
    savedRandomSentence = '';
    allRandomDescriptions = [];

    get newInfoBubble() {
        return $('//label[text()="New"]/following-sibling::button')
    }
    get activeInfoBubble() {
        return $('//label[text()="Active"]/following-sibling::button')
    }
    get completedInfoBubble() {
        return $('//label[text()="Completed"]/following-sibling::button')
    }
    get closedInfoBubble() {
        return $('//label[text()="Closed"]/following-sibling::button')
    }
    get removedInfoBubble() {
        return $('//label[text()="Removed"]/following-sibling::button')
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
    get newCaseStatusAdd() {
        return $('button[data-testid="add-case-status-New"]')
    }
    get activeCaseStatusAdd() {
        return $('button[data-testid="add-case-status-Active"]')
    }
    get completedCaseStatusAdd() {
        return $('button[data-testid="add-case-status-Completed"]')
    }
    get closedCaseStatusAdd() {
        return $('button[data-testid="add-case-status-Closed"]')
    }
    get removedCaseStatusAdd() {
        return $('button[data-testid="add-case-status-Removed"]')
    }
    get createNewStatusWindow() {
        return $('//div/span[contains(text(), "New")]')
    }
    get createActiveStatusWindow() {
        return $('//div/span[contains(text(), "Active")]')
    }
    get createCompletedStatusWindow() {
        return $('//div/span[contains(text(), "Completed")]')
    }
    get createClosedStatusWindow() {
        return $('//div/span[contains(text(), "Closed")]')
    }
    get createRemovedStatusWindow() {
        return $('//div/span[contains(text(), "Removed")]')
    }
    get editPencilNewStatus() {
        return $(`button[data-testid="case-status-edit-New-${CaseTypes.savedRandomLabel}"]`)
    }
    get editPencilActiveStatus() {
        return $(`button[data-testid="case-status-edit-Active-${CaseTypes.savedRandomLabel}"]`)
    }
    get editPencilCompletedStatus() {
        return $(`button[data-testid="case-status-edit-Completed-${CaseTypes.savedRandomLabel}"]`)
    }
    get editPencilClosedStatus() {
        return $(`button[data-testid="case-status-edit-Closed-${CaseTypes.savedRandomLabel}"]`)
    }
    get editPencilRemovedStatus() {
        return $(`button[data-testid="case-status-edit-Removed-${CaseTypes.savedRandomLabel}"]`)
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
    async newBubble() {
        let retries = 0;
        let popupVisible = false;

        while (retries < 5 && popupVisible === false) {
            await this.newInfoBubble.click();
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
            await this.activeInfoBubble.click();
                if (await this.activePopupInfo.isExisting()) {
                    popupVisible = true;
                } else {
                    retries++;
                }
        }
                if (!popupVisible) {
                    console.log("Failed to display popup for 'Active' bubble")
                }
    }
    async completedBubble() {
        let retries = 0;
        let popupVisible = false;

        while (retries < 5 && popupVisible === false) {
            await this.completedInfoBubble.click();
                if (await this.completedPopupInfo.isExisting()) {
                    popupVisible = true;
                } else {
                    retries++;
                }
        }
                if (!popupVisible) {
                    console.log("Failed to display popup for 'Completed' bubble")
                }
    }
    async closedBubble() {
        let retries = 0;
        let popupVisible = false;

        while (retries < 5 && popupVisible === false) {
            await this.closedInfoBubble.click();
                if (await this.closedPopupInfo.isExisting()) {
                    popupVisible = true;
                } else {
                    retries++;
                }
        }
                if (!popupVisible) {
                    console.log("Failed to display popup for 'Closed' bubble")
                }
    }
    async removedBubble() {
        let retries = 0;
        let popupVisible = false;

        while (retries < 5 && popupVisible === false) {
            await this.removedInfoBubble.click();
                if (await this.removedPopupInfo.isExisting()) {
                    popupVisible = true;
                } else {
                    retries++;
                }
        }
                if (!popupVisible) {
                    console.log("Failed to display popup for 'Removed' bubble")
                }
    }
    async navNewStatus() {
        let retries = 0;
        let createWindowVisible = false;

        while (retries < 5 && createWindowVisible === false) {
            await this.newCaseStatusAdd
            await this.newCaseStatusAdd.moveTo();
            await this.newCaseStatusAdd.click();
                if ((await this.createNewStatusWindow.isDisplayed()) && (await this.caseStatusSaveButton.isDisplayed())) {
                    createWindowVisible = true;
                } else {
                    retries++;
                }
        }
                if (!createWindowVisible) {
                    console.log("'New' Case Status Creation Window didn't appear")
                }
    }
    async navActiveStatus() {
        let retries = 0;
        let createWindowVisible = false;

        while (retries < 5 && createWindowVisible === false) {
            await this.activeCaseStatusAdd.moveTo();
            await this.activeCaseStatusAdd.click();
                if (await this.createActiveStatusWindow.isExisting()) {
                    createWindowVisible = true;
                } else {
                    retries++;
                }
        }
                if (!createWindowVisible) {
                    console.log("'Active' Case Status Creation Window didn't appear")
                }
    }
    async navCompletedStatus() {
        let retries = 0;
        let createWindowVisible = false;

        while (retries < 5 && createWindowVisible === false) {
            await this.completedCaseStatusAdd.moveTo();
            await this.completedCaseStatusAdd.click();
                if (await this.createCompletedStatusWindow.isExisting()) {
                    createWindowVisible = true;
                } else {
                    retries++;
                }
        }
                if (!createWindowVisible) {
                    console.log("'Completed' Case Status Creation Window didn't appear")
                }
    }
    async navClosedStatus() {
        let retries = 0;
        let createWindowVisible = false;

        while (retries < 5 && createWindowVisible === false) {
            await this.closedCaseStatusAdd.moveTo();
            await this.closedCaseStatusAdd.click();
                if (await this.createClosedStatusWindow.isExisting()) {
                    createWindowVisible = true;
                } else {
                    retries++;
                }
        }
                if (!createWindowVisible) {
                    console.log("'Closed' Case Status Creation Window didn't appear")
                }
    }
    async navRemovedStatus() {
        let retries = 0;
        let createWindowVisible = false;

        while (retries < 5 && createWindowVisible === false) {
            await this.removedCaseStatusAdd.moveTo();
            await this.removedCaseStatusAdd.click();
                if (await this.createRemovedStatusWindow.isExisting()) {
                    createWindowVisible = true;
                } else {
                    retries++;
                }
        }
                if (!createWindowVisible) {
                    console.log("'Removed' Case Status Creation Window didn't appear")
                }
    }
    async navNewEdit() {
        await this.editPencilNewStatus.moveTo();
        await this.editPencilNewStatus.click();
    }
    async navActiveEdit() {
        await this.editPencilActiveStatus.moveTo();
        await this.editPencilActiveStatus.click();
    }
    async navCompletedEdit() {
        await this.editPencilCompletedStatus.moveTo();
        await this.editPencilCompletedStatus.click();
    }
    async navClosedEdit() {
        await this.editPencilClosedStatus.moveTo();
        await this.editPencilClosedStatus.click();
    }
    async navRemovedEdit() {
        await this.editPencilRemovedStatus.moveTo();
        await this.editPencilRemovedStatus.click();
    }
    async statusGeneration() {
        const status = CaseTypes.generateRandomEntry();
        await this.caseStatusStatus.setValue(status);
        await this.caseStatusSaveButton.click();
        await expect (this.createdStatusAll).toExist();
    }
    generateRandomDescription() {
        const newDescription = String(faker.lorem.sentence(2));
            if (this.newDescription.length > 200) {
                this.newDescription = this.newDescritpion.substring(0, 197) + "..."
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
        //have to find selectors for each entered status name, 
        //move to each one based on array position,
        //verify entered description based on array position
    }
}
export default new CaseStatus();