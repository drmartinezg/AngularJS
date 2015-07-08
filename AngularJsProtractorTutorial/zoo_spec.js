describe('Adopt an animal on the zoo test site', function() {

	it('should able on correct page', function() {
		browser.get("http://www.thetestroom.com/jswebapp/");
		expect(browser.getCurrentUrl()).toContain("jswebapp");
		expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
	});	

	it('should generate correct text', function() {
		browser.get("http://www.thetestroom.com/jswebapp/");
		var textMessage = "Manuel es el nombre de la persona";

		element(by.model("person.name")).sendKeys(textMessage);
		element(by.binding("person.name")).getText().then(function(text) {
			expect(text).toEqual(textMessage);
		});
	});	

	it('should check the correct number of items in drop down', function() {
		browser.get("http://www.thetestroom.com/jswebapp/");
		element(by.buttonText("CONTINUE")).click();
		element(by.model("animal")).$('[value="1"]').click();

		element.all(by.css(".ng-pristine option")).then(function(items) {
			expect(items.length).toBe(4);
			expect(items[1].getText()).toBe("George the Turtle");
		});
	});	

	it('should check user is on the thank you page', function() {
		browser.get("http://www.thetestroom.com/jswebapp/");
		element(by.buttonText("CONTINUE")).click();
		element(by.buttonText("CONTINUE")).click();
		expect(browser.getCurrentUrl()).toContain("confirm");
	});	

});