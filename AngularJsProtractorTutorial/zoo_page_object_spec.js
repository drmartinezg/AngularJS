describe('To test the animal adoption flow', function() {

	beforeEach(function() {
		browser.get("http://www.thetestroom.com/jswebapp/");
	});

	it('should be to adopt an animal', function() {
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
});