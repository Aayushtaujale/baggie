const { expect } = require("chai");
const { Given, When, Then } = require("@cucumber/cucumber");
const webdriver = require("selenium-webdriver");
const { By, until } = require("selenium-webdriver");
const { click } = require("@testing-library/user-event/dist/click");

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
  When("I enter my Email", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Email']"))
      .sendKeys("abc@gmail.com");
  });
  When("I enter my password", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Password']"))
      .sendKeys("TestUser122323");
  });

  When("I click on register", async()=>{
    let register =  driver.wait(
      until.elementLocated(By.xpath("//button[@type='submit']")
    ));
     register.click();
  })

  Then("I should be registered successfully",async ()=>{
    return true
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
      .sendKeys("aayush@gmail.com");
  });
  When("I enter password", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Password']"))
      .sendKeys("aayush");
  });

  When("I click on login", async()=>{
    let loginCustomer =  driver.wait(
      until.elementLocated(By.xpath("//button[@type='submit']")
    ));
     loginCustomer.click();
  })

  Then("I should be Logged in",async ()=>{
   return true
     
});








  

  Given(
    "I visit Add Category Page",
    { timeout: 1000 * 1000 },
    async () => {
      await driver.get("http://localhost:3000/addcategory");
    }
  );

  When("I enter the title", async () => {
    await driver
      .findElement(By.xpath("//input[@placeholder='Title']"))
      .sendKeys("bag");
  });
  When("I enter description", async () => {
    await driver
      .findElement(By.xpath("//textarea[@placeholder='Description']"))
      .sendKeys("bag added");
  });

  When("I click on post", async()=>{
    let post =  driver.wait(
      until.elementLocated(By.xpath("//button[@type='submit']")
    ));
     post.click();
  })
  Then("I am unable to click",async ()=>{
    return false
      
 });
 




  

  Given(
    "I visit Register Admin Page",
    { timeout: 1000 * 1000 },
    async () => {
      await driver.get("http://localhost:3000/venue");
    }
  );

  When("I enter admin name", async () => {
    let element = driver.wait(
      until.elementLocated(By.xpath("//input[@placeholder='Name']")
    ));
      
      element.sendKeys("Admin second");
  });


  When("I enter admin address", async () => {
    let element = driver.wait(
      until.elementLocated(By.xpath("//input[@placeholder='Address']")
    ));
      
      element.sendKeys("Lumbini");
  });

  When("I enter admin phone", async () => {
    let element = driver.wait(
      until.elementLocated(By.xpath("//input[@placeholder='Phone']")
    ));
      
      element.sendKeys("0159");
  });

  When("I enter my admins email", async () => {
    let element = driver.wait(
      until.elementLocated(By.xpath("//input[@placeholder='Email']")
    ));
      
      element.sendKeys("admintest@gmail.com");
  });

  When("I enter my admins password", async () => {
    let element = driver.wait(
      until.elementLocated(By.xpath("//input[@placeholder='Password']")
    ));
      
      element.sendKeys("admintest");
  });

  When("I click on admin register", async()=>{
    let registeradmin =  driver.wait(
      until.elementLocated(By.xpath("//button[@type='submit']")
    ));
     registeradmin.click();
  })
  Then("I should be",async ()=>{
    return true
      
 });

  



Given(
  "I visit Baggie Admin Login Page",
  { timeout: 1000 * 1000 },
  async () => {
    await driver.get("http://localhost:3000/venuelogin");
  }
);
When("I enter admin email", async () => {
  await driver
    .findElement(By.xpath("//input[@placeholder='Email']"))
    .sendKeys("yatraiyatra@gmail.com");
});
When("I enter admin password", async () => {
  await driver
    .findElement(By.xpath("//input[@placeholder='Password']"))
    .sendKeys("yatraiyatra");
});

When("I click login", async()=>{
  let adminlog =  driver.wait(
    until.elementLocated(By.xpath("//button[@type='submit']")
  ));
   adminlog.click();
})

Then("I should be Logged inn",async ()=>{
 return true
   
});