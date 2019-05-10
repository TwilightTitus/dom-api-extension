import "../index";


describe("ManipulationSupportTest", function() {
	beforeAll(function(){
	});
	
	it("create a simple element", function(){		
		let content = window.create("<div id=\"test1\">create a simple element test</div>");
		let element = content.first();		
		document.body.append(content);
		let result = window.find("#test1");
		expect(element).toBeDefined();
		expect(element).toBe(result.first());
	});	
});