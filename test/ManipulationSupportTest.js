import "../index";

describe("ManipulationSupportTest", function() {
	beforeAll(function(){
		
	});
	
	it("function: create (simple div element)", function(){	
		let content = window.create("<div>test-1</div>");
		let element = content.first();
		expect(element).toBeDefined();
	});
	
	it("function: create (div with div element)", function(){
		let content = window.create("<div>test-2<div>test-2-1</div></div>");
		let element = content.first();
		expect(element).toBeDefined();
	});
	
	it("function: create (multible element)", function(){
		let content = window.create("<div>test-1</div><div>test-2</div>");		
		expect(content.length).toBe(2);
	});
	
	
	it("function: append (simple div element)", function(){	
		let content = window.create("<div id=\"test-1\">test-1</div>");
		let element = content.first();		
		document.body.append(content);
		let result = find("#test-1").first();
		expect(element).toBeDefined();
		expect(element).toBe(result);
		element.remove();
	});	
	
	
	it("function: append (div with div element)", function(){
		let content = window.create("<div id=\"test-2\">test-2<div id=\"test-2-1\">test-2-1</div></div>");
		let element = content.first();
		document.body.append(content);
		let result = find("#test-2").first();
		expect(element).toBeDefined();
		expect(element).toBe(result);
		expect(result.childNodes.length).toBe(2);
		element.remove();
	});
	
	it("function: append (NodeList)", function(){
		let element = window.create("<div id=\"test-1\">test-1</div>").first();		
		document.body.append(element);
		expect(element.childNodes.length).toBe(1);
		let content = create("<div id=\"test-1-1\">test-1-1</div><div id=\"test-1-2\">test-2</div>");
		element.append(content);
		expect(element.childNodes.length).toBe(3);
		element.remove();
	});	
	
	it("function: prepend (simple div element)", function(){	
		let content = window.create("<div id=\"test-3\">test-3</div>");
		let element = content.first();		
		document.body.prepend(content);
		let result = find("#test-3").first();
		expect(element).toBeDefined();
		expect(element).toBe(result);
		expect(document.body.childNodes[0]).toBe(result);
		element.remove();
	});
	
	it("function: prepend (div with div element)", function(){
		let content = window.create("<div id=\"test-4\">test-4<div id=\"test-4-1\">test-4-1</div></div>");
		let element = content.first();
		document.body.prepend(content);
		let result = find("#test-4").first();
		expect(element).toBeDefined();
		expect(element).toBe(result);
		expect(result.childNodes.length).toBe(2);
		expect(document.body.childNodes[0]).toBe(result);
		element.remove();
	});
	
	it("function: empty", function(){
		let content = window.create("<div id=\"test-3\">test-3<div id=\"test-3-1\">test-2-1</div></div>");
		let element = content.first();
		document.body.append(content);
		let result = find("#test-3").first();
		expect(element).toBeDefined();
		expect(element).toBe(result);
		expect(result.childNodes.length).toBe(2);
		
		element = find("#test-3").first();
		element.empty();
		expect(element.childNodes.length).toBe(0);
		element.remove();
	});
	
	it("function: content", function(){		
		expect(document.body.childNodes).toBe(document.body.content());
	});
});