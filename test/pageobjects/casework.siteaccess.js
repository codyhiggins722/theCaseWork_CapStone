import Site from './casework.base'
import 'dotenv/config'

class Access extends Site {
    get inputUsername(){
        return $('[name="username"]')
        }
    get inputPassword(){
        return $('[name="password"]')
        }
    get loginButton(){
        return $('[data-testid="login-submit"]')
        }
    get dashboard(){
        return $('.fui-NavDrawerHeader')
        }
    get templates(){
        return $('button[value="/templates"]')
        }
    get caseDataTypesbtn(){
        return $('//button/span[contains(text(),"Case Data Types")]')
        }
    get caseDataTypesHeader(){
        return $('//label/span[contains(text(),"Case Data Types")]')
        }
    get logoutButton() {
        return $('[data-testid="menu-logout-button"]')
        }
    async login (username, password){
        await this.inputUsername.setValue(process.env.casework_id);
        await this.inputPassword.setValue(process.env.casework_pw);
        await this.loginButton.click();
        await expect(this.dashboard).toBeExisting();
        }
    async logout() {
        await this.logoutButton.click();
        await expect (this.inputUsername).toExist();
        }
    async cdtNav (){
        await this.templates.click();
        await this.caseDataTypesbtn.click();
        await expect(this.caseDataTypesHeader).toBeExisting();
        }
}
export default new Access();