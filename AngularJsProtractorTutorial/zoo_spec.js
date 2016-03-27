describe('Adopt an animal on the zoo test site', function() {

	beforeEach(function() {
		browser.get("http://www.thetestroom.com/jswebapp/");
	});

	afterEach(function() {
		console.log("After method executed");
	});

	it('should able on correct page', function() {
		expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
	});	

	describe('should generate correct text', function() {
		var textMessage;

		beforeEach(function() {
			textMessage = "Manuel es el nombre de la persona";			
		});

		it('should check correct text', function() {
			element(by.model("person.name")).sendKeys(textMessage);
			element(by.binding("person.name")).getText().then(function(text) {
				expect(text).toEqual(textMessage);
			});
		});
	});	

	describe('should check the correct number of items in drop down', function() {

		var lengthOfItems;

		beforeEach(function() {
			lengthOfItems = 4;
		});

		it('should check number of items', function() {
			element(by.buttonText("CONTINUE")).click();
			element(by.model("animal")).$('[value="1"]').click();

			element.all(by.css(".ng-pristine option")).then(function(items) {
				expect(items.length).toBe(lengthOfItems);
				expect(items[1].getText()).toBe("George the Turtle");
			});
		});
	});	

	it('should check user is on the thank you page', function() {
		element(by.buttonText("CONTINUE")).click();
		element(by.buttonText("CONTINUE")).click();
		expect(browser.getCurrentUrl()).toContain("confirm");
	});	

});