describe('To test the animal adoption flow', function() {

	beforeEach(function() {
		browser.get("http://www.thetestroom.com/jswebapp/");
	});

	xit ('should be to adopt an animal', function() {
		var	textMessage = "Manuel es el nombre de la persona";
		element(by.model("person.name")).sendKeys(textMessage);
		var dynamicText = element(by.binding("person.name")).getText();
		expect(dynamicText).toBe(textMessage);
		element(by.buttonText("CONTINUE")).click();

		element(by.model("animal")).$('[value="2"]').click();
		element(by.buttonText("CONTINUE")).click();

		var thankYouText = element(by.css("h1")).getText();
		expect(thankYouText).toBe('Thank you');
	});

	var home_page = require('../page/home_page.js');

	it('should be able to adopt an animal by page objects', function() {
		var	textMessage = "Francisco José López";
		home_page.enterFieldValue(textMessage);
		var getHomePageText = home_page.getDynamicText();
		expect(getHomePageText).toBe(textMessage);
		var animal_page = home_page.clickContinue();

		animal_page.selectAnimal(2);
		var confirm_page = animal_page.clickContinue();
		expect(confirm_page.getTitle()).toBe('Thank you');
	});

});