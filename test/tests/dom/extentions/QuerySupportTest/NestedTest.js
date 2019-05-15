import Utils from "test/helpers/Utils";

describe("QuerySupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/QuerySupportTest.html"];
		done();
	});
	
//	it("Nested are child elements", function(done){		
//		let expected = find("#closest-closests-test-1 [data-closest-target]");
//		let elements = find("#closest-closests-test-1").first().closests("[data-closest-target]");
//		expect(elements).toBeDefined();
//		expect(elements.length).toBe(expected.length);
//		
//		done();
//	});
//	
//	it("Nested is a parent", function(done){		
//		let expected = find("#closest-closests-test-2 [data-closest-target]");
//		let elements = find("#closest-closests-test-2 > span > span > span").first().closests("[data-closest-target]");
//		expect(elements).toBeDefined();
//		expect(elements.length).toBe(expected.length);;	
//		
//		done();
//	});
//	
//	it("closests is the element your self", function(done){		
//		let expected = find("#closest-closests-test-1 [data-closest-target]").first();
//		let element = find("#closest-closests-test-1 > span > span > span").first().closest("[data-closest-target]");		
//		expect(element).toBe(expected);	
//		
//		done();
//	});
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});