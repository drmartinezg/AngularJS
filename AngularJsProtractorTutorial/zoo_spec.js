describe('Test zoo site for input field on home page', function() {
	it('should test input field and check text output', function() {
		browser.get("http://www.thetestroom.com/jswebapp/")
		element(by.model("person.name")).sendKeys("I will subscribe to this channel");
		element(by.binding("person.name")).getText().then(function(text) {
			console.log(text);
		})
	});
});