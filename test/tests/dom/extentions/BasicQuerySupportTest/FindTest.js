describe("EventSupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/BasicQuerySupportTest.html"];
		done();
	});
	
	it("find ", function(done){
		
		let element = document.find("#id-1");
		expect(element).toBeDefined();
		expect(element.length).toBe(1);
		expect(element.first().tagName.toLowerCase()).toBe("div");		
		done();
	});
	
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});