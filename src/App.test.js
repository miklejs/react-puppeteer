const faker = require('faker');
const puppeteer = require('puppeteer');

const person = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),  
  message: faker.random.words()
};

let browser;
let page;

beforeAll(async () => {
  
  browser = await puppeteer.launch(
	{
	  headless: false, 
	  slowMo: 100, 
	}
  )  
  page = await browser.newPage()
})

describe('Contact Form', () => {
  test('Can submit contact form', async () => {
	await page.goto('http://localhost:3000/');
	await page.waitForSelector('.contact-form');
	await page.click("input[name=fullname]");
	await page.type("input[name=fullname]", person.name);
	await page.click("input[name=email]");
	await page.type("input[name=email]", person.email);
	await page.click("textarea[name=message]");
	await page.type("textarea[name=message]", person.message);  
  await page.click("input[name=a]");  
  await page.click("button[type=submit]");
  	
  }, 9000000);
});



afterAll(() => {
  browser.close()
})