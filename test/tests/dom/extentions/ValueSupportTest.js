import Utils from "test/helpers/Utils";

describe("ValueSupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/ValueSupportTest.html"];
		done();
	});
	
	it("val all values", function(done){
		let element = find("#value-support-test-1 *");
		let values = element.val();
		console.log("values:", values);
		expect(values).toBeDefined();
		expect(values.size).toBe(6);
		
		done();
	});	
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});