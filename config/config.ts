import {browser, Config} from "protractor";

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
    },

specs: [
        "../../features/*.feature",
    ],     

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
    },   

};
