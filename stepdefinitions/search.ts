import {browser, ExpectedConditions, protractor} from "protractor";
import {pageObj} from "../pages/page";
import {Given, When, Then} from "cucumber";

const chai = require("chai").use(require("chai-as-promised"));
const expect =chai.expect;

const search: pageObj = new pageObj();

Given(/^I open "(.*?)" page$/, async (text) => {
    await expect(browser.getTitle()).to.eventually.equal("Google");
});

When(/^I type "(.*?)"$/, async (text) => {
    await search.searchTextBox.sendKeys(text);
});

Then(/^I click on search$/, async () => {
    await search.outline.click();
    await search.searchButton.click();
})