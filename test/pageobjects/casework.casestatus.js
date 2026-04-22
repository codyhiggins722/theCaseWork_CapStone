import Site from './casework.base'
import CaseTypes from './casework.casetypes'

class CaseStatus extends Site {
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
        return $('//div/span[contains(text(), "Active)]')
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
                    console.log("Failed to display popup for 'Completed' bubble")
                }
    }
    async generateNewCaseStatus(){
        await this.newCaseStatusAdd.click();
        await expect (this.createNewStatusWindow).toExist();
        const status = CaseTypes.generateRandomEntry();
        await this.caseStatusStatus.setValue(status);
        await this.caseStatusSaveButton.click();
        await expect (this.createdStatusAll).toExist();
    }
}
export default new CaseStatus();