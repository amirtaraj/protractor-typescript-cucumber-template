import {$, $$, ElementFinder, element} from "protractor";
import { By } from "selenium-webdriver";

export class pageObj {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public outline: ElementFinder;

    constructor() {
        this.searchTextBox = $("input[title='Search']");
        this.searchButton = element(By.xpath("//div[@class='FPdoLc tfB0Bf']//input[@name='btnK']"))
        this.outline =$("div[id='lga']");
    }
}

