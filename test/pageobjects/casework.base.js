import { browser } from '@wdio/globals'

export default class Site{
    start (){
        return browser.url('https://app.thecasework.com/')
    
    }
}