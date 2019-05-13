import Utils from "./helpers/Utils";

describe("ManipulationSupportTest", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
	
	describe("function: create", function() {
		it("create a singele element", function(done){	
			let content = window.create("<div>test-1</div>");
			let element = content.first();
			expect(element).toBeDefined();
			done();
		});
		
		it("create a element with child elements)", function(done){
			let content = window.create("<div>test-2<div>test-2-1</div></div>");
			let element = content.first();
			expect(element).toBeDefined();
			done();
		});
		
		it("create multible elements", function(done){
			let content = window.create("<div>test-1</div><div>test-2</div>");		
			expect(content.length).toBe(2);
			done();
		});
	})
	
	describe("function: append", function() {
		it("single element", function(done){	
			let id = Utils.domId();
			let content = window.create("<div id=\"" + id + "\">test-1</div>");
			let element = content.first();		
			document.body.append(content);
			let result = find("#" + id).first();
			expect(element).toBeDefined();
			expect(element).toBe(result);
			element.remove();
			done();
		});	
		
		
		it("element with child elements", function(done){
			let id = Utils.domId();
			let content = window.create("<div id=\"" + id + "\">test-2<div id=\"test-2-1\">test-2-1</div></div>");
			let element = content.first();
			document.body.append(content);
			let result = find("#" + id).first();
			expect(element).toBeDefined();
			expect(element).toBe(result);
			expect(result.childNodes.length).toBe(2);
			element.remove();
			done();
		});
		
		it("single element as string", function(done){	
			let id = Utils.domId();	
			document.body.append("<div id=\"" + id + "\">test-1</div>");
			let element = find("#" + id).first();
			expect(element).toBeDefined();
			element.remove();
			done();
		});
		
		it("single complex element as string", function(done){	
			let id = Utils.domId();
			document.body.append("<div id=\"" + id + "\">test-1<div></div><span></span><input></div>");
			let element = find("#" + id).first();
			expect(element).toBeDefined();
			element.remove();
			done();
		});
		
		it("single multible elements as string", function(done){	
			let id = Utils.domId();	
			let element = window.create("<div id=\"" + id + "\">test-1</div>").first();
			document.body.append(element);
			expect(element.childNodes.length).toBe(1);
			element.append("<div></div><span></span><input>");
			expect(element.childNodes.length).toBe(4);
			element.remove();
			done();
		});
		
		it("node list", function(done){
			let id = Utils.domId();
			let element = window.create("<div id=\"" + id + "\">test-1</div>").first();		
			document.body.append(element);
			expect(element.childNodes.length).toBe(1);
			let content = create("<div>test-1-1</div><div>test-2</div>");
			element.append(content);
			expect(element.childNodes.length).toBe(3);
			element.remove();
			done();
		});	
		
		it("multible nodes", function(done){
			let id = Utils.domId();
			let element = window.create("<div id=\"" + id + "\">test-1</div>").first();
			document.body.append(element);
			expect(element.childNodes.length).toBe(1);
			let element1 = create("<div>test-1-1</div>").first();
			let element2 = create("<div>test-1-1</div>").first();
			let element3 = create("<div>test-1-1</div>").first();
			element.append(element1, element2, element3);
			expect(element.childNodes.length).toBe(4);
			element.remove();
			done();
		});	
		
		it("multible node elements, node list, multible nodes as String", function(done){
			let id = Utils.domId();
			let element = window.create("<div id=\"" + id + "\">test-1</div>").first();
			document.body.append(element);
			expect(element.childNodes.length).toBe(1);
			let element1 = create("<div>test-1-1</div>").first();
			let element2 = create("<div>test-1-1</div>").first();
			let element3 = create("<div>test-1-1</div>").first();
			let nodelist = window.create("<div>test-1-1</div><div>test-1-1</div><div>test-1-1</div>");			
			element.append(element1, element2, element3, nodelist, "<div>test-1-1</div><div>test-1-1</div><div>test-1-1</div>");
			expect(element.childNodes.length).toBe(10);
			element.remove();
			done();
		});		
	});
	
	describe("function: prepend", function() {
		it("simple element", function(done){
			let id = Utils.domId();
			let content = window.create("<div id=\"" + id + "\">test-3</div>");
			let element = content.first();		
			document.body.prepend(content);
			let result = find("#" + id).first();
			expect(element).toBeDefined();
			expect(element).toBe(result);
			expect(document.body.childNodes[0]).toBe(result);
			element.remove();
			done();
		});
		
		it("complex element", function(done){
			let id = Utils.domId();
			let content = window.create("<div id=\"" + id + "\">test-4<div>test-4-1</div></div>");
			let element = content.first();
			document.body.prepend(content);
			let result = find("#" + id).first();
			expect(element).toBeDefined();
			expect(element).toBe(result);
			expect(result.childNodes.length).toBe(2);
			expect(document.body.childNodes[0]).toBe(result);
			element.remove();
			done();
		});
	})
	
	it("function: empty", function(done){
		let id = Utils.domId();
		let content = window.create("<div id=\"" + id + "\">test-3<div >test-2-1</div></div>");
		let element = content.first();
		document.body.append(content);
		let result = find("#" + id).first();
		expect(element).toBeDefined();
		expect(element).toBe(result);
		expect(result.childNodes.length).toBe(2);
		
		element = find("#" + id).first();
		element.empty();
		expect(element.childNodes.length).toBe(0);
		element.remove();
		done(); 
	});
	
	it("function: content", function(done){		
		expect(document.body.childNodes).toBe(document.body.content());
		done();
	});
});