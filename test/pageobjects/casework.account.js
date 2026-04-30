import Site from './casework.siteaccess'
import CaseTypes from './casework.casetypes'

class Account extends Site {
    get nameField(){
        return $('[name="name"]')
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
    get updateButton(){
        return $('data-testid="edit-user=update-button"]')
    }
    phoneType(type){
        return $(`//span[contains(text(), "${type}")]`)
    }
    get enteredValue(){
        return $(`[value=${randomEntry}`)
    }
}