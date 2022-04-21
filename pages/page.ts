import {$, $$, ElementFinder, element} from "protractor";
import { By } from "selenium-webdriver";

export class pageObj {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public outline: ElementFinder;

    constructor() {
        this.searchTextBox = $("input[title='Search']");
        this.searchButton = element(By.xpath("//body/div[1]/div[3]/form[1]/div[1]/div[1]/div[3]/center[1]/input[1]"));
        this.outline =element(By.xpath("//body/div[1]/div[3]/form[1]/div[1]"));
    }
}

