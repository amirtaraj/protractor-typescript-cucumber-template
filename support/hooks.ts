const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import { browser } from "protractor";
import { config } from "../config/config";

BeforeAll({timeout: 100 * 1000}, async () => {
    await browser.get(config.baseUrl);
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});