import Utils from "test/helpers/Utils";

describe("ValueSupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/ValueSupportTest.html"];
		done();
	});
	
	it("val all values", function(done){
		let element = find("#value-support-test-1 div > *");
		console.log("element:", element);
		let values = element.val();
		console.log("values:", Array.from(values).join(", "));
		
		expect(values).toBeDefined();
		expect(values.size).toBe(7);
		
		expect(values.get("text")).toBeDefined();
		expect(values.get("text")).toBe("text");
		
		expect(values.get("select")).toBeDefined();
		expect(values.get("select").length).toBe(3);
		expect(values.get("select")).toEqual(["option-1", "option-2", "option-3"]);
		
		expect(values.get("radio-1")).toBeDefined();
		expect(values.get("radio-1")).toBe("radio-1-2");
		
		expect(values.get("radio-2")).toBeDefined();
		expect(values.get("radio-2")).toBe(true);
		
		expect(values.get("checkbox-1")).toBeDefined();
		expect(values.get("checkbox-1")).toBe(true);
		
		expect(values.get("checkbox-2")).toBeUndefined();
		
		expect(values.get("checkbox-3")).toBeDefined();
		expect(values.get("checkbox-3")).toBe("checkbox-3");
		
		expect(values.get("textarea")).toBeDefined();
		expect(values.get("textarea")).toBe("textarea");
		
		done();
	});	
	
	
	
	
//	it("val set value to select", function(done){
//		let element = find("#value-support-test-1 select").first();
//		let expected = ["option-4", "option-5"]
//		let values = element.val(expected);
//		
//		values = element.val();
//		expect(values).toBeDefined();
//		expect(values).toEqual(expected);
//		done();
//	});	
	
//	it("val set value to input[type=text]", function(done){
//		let element = find("#value-support-test-1 *");
//		let values = element.val();
//		expect(values).toBeDefined();
//		expect(values.size).toBe(7);
//		
//		
//		expect(values.get("select")).toBeDefined();
//		expect(values.get("select").length).toBe(3);
//		expect(values.get("select")).toEqual(["option-1", "option-2", "option-3"]);		
//		
//		done();
//	});	
//	
//	it("val set value to input[type=radio]", function(done){
//		let element = find("#value-support-test-1 *");
//		let values = element.val();
//		expect(values).toBeDefined();
//		expect(values.size).toBe(7);
//		
//		expect(values.get("radio-1")).toBeDefined();
//		expect(values.get("radio-1")).toBe("radio-1-2");
//		
//		expect(values.get("radio-2")).toBeDefined();
//		expect(values.get("radio-2")).toBe(true);
//		
//		
//		done();
//	});	
//	
//	it("val set value to input[type=checkbox]", function(done){
//		let element = find("#value-support-test-1 *");
//		let values = element.val();
//		expect(values).toBeDefined();
//		expect(values.size).toBe(7);
//		
//		
//		expect(values.get("checkbox-1")).toBeDefined();
//		expect(values.get("checkbox-1")).toBe(true);
//		
//		expect(values.get("checkbox-2")).toBeUndefined();
//		
//		expect(values.get("checkbox-3")).toBeDefined();
//		expect(values.get("checkbox-3")).toBe("checkbox-3");
//		
//		done();
//	});	
//	
//	it("val set value to textarea", function(done){
//		let element = find("#value-support-test-1 *");
//		let values = element.val();
//		expect(values).toBeDefined();
//		expect(values.size).toBe(7);
//		
//		
//		expect(values.get("textarea")).toBeDefined();
//		expect(values.get("textarea")).toBe("textarea");
//		
//		done();
//	});	
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});