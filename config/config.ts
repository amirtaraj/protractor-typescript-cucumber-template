import {browser, Config} from "protractor";

import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    directConnect: true,
    baseUrl: "https://www.google.com",
    capabilities: {
        browserName: "chrome",
    },


framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

onPrepare: () => {
        browser.ignoreSynchronization = true;
        Reporter.createDirectory(jsonReports);
    },

specs: [
        "../../features/*.feature",
    ],     

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
    },   

    onComplete: () => {
        Reporter.createHTMLReport();
    },

};
