const { expect } = require("chai");
const { Given, When, Then } = require("@cucumber/cucumber");
const webdriver = require("selenium-webdriver");
const { By, until } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();


Given(
    "I visit Baggie Registration Page",
    { timeout: 1000 * 1000 },
    async () => {
      await driver.get("http://localhost:3000/register");
    }
  );
  When("I enter my firstname", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Firstname']"))
      .sendKeys("Test User");
  });
  When("I enter my lastname", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Lastname']"))
      .sendKeys("TestUser122323");
  });
  When("I enter my contact", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Contact']"))
      .sendKeys("9898");
  });
  When("I enter my email", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Email']"))
      .sendKeys("abc@gmail.com");
  });
  When("I enter my password", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Password']"))
      .sendKeys("TestUser122323");
  });



  Given(
    "I visit Baggie Login Page",
    { timeout: 1000 * 1000 },
    async () => {
      await driver.get("http://localhost:3000/login");
    }
  );
  When("I enter my email", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Email']"))
      .sendKeys("Test User");
  });
  When("I enter my password", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Password']"))
      .sendKeys("TestUser122323");
  });
  

  Given(
    "I visit Add Category Page",
    { timeout: 1000 * 1000 },
    async () => {
      await driver.get("http://localhost:3000/admin/category");
    }
  );
  When("I enter image", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Image']"))
      .sendKeys("Test User");
  });
  When("I enter title", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Title']"))
      .sendKeys("bag");
  });
  When("I enter description", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Description']"))
      .sendKeys("bag added");
  });
  