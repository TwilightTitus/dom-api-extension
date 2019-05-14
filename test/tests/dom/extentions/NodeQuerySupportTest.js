import Utils from "test/helpers/Utils";

describe("NodeQuerySupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/NodeQuerySupportTest.html"];
		done();
	});
	
	it("is", function(done){		
		let element = find("#id-1").first();
		expect(element.is("#id-1")).toBe(true);
		expect(element.is(".class-1")).toBe(true);
		expect(element.is("[data-test-1]")).toBe(true);
		expect(element.is("#id-1.class-1")).toBe(true);
		expect(element.is("#id-1.class-1[data-test-1]")).toBe(true);
		expect(element.is("div")).toBe(true);
		
		done();
	});
	
	it("parent (direct parent)", function(done){
		let element = find("#id-1-1").first();
		expect(element).toBeDefined();
		expect(element.parent()).toBe(element.parentNode);
		
		done();
	});
	
	it("parent(div) (matching parent - 1 level)", function(done){
		let element = find("#id-1-2-1").first();
		expect(element).toBeDefined();
		expect(element.parent("div")).toBe(element.parentNode);
		
		done();
	});
	
	it("parent(div) (matching parent - nth level)", function(done){
		let expected = find("#id-1").first();
		expect(expected).toBeDefined();
		let element = find("#id-1-3-1-1-1-1-1").first();
		expect(element).toBeDefined();
		expect(element.parent("div")).toBe(expected);
		
		done();
	});
	
	it("parents (full hierachy)", function(done){
		let element = find("#id-1-3-1-1-1-1-1").first();
		let parents = element.parents();
		expect(parents).toBeDefined();
		expect(parents.length).toBe(8);
		
		done();
	});
	
	it("parents(:not(body))", function(done){
		let element = find("#id-1-3-1-1-1-1-1").first();
		let parents = element.parents(":not(body)");
		expect(parents).toBeDefined();
		expect(parents.length).toBe(7);
		
		done();
	});
	
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});