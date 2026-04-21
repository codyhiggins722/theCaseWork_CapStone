import Site from './casework.base'

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
}