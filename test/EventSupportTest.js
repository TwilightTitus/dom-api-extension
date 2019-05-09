import "../index";


describe("EventSupport Tests", function() {
	beforeAll(function(){
		window.document.body.innerHTML = window.__html__['test/sites/EventSupportTest.html'];
	});
	
	it("is \"on\" function available", function(){		
		expect(typeof Document.prototype.on).toBe("function");
		expect(typeof HTMLElement.prototype.on).toBe("function");
	});
	
	it("test addEventListener", function(done){
		window.addEventListener("click", function(event){
			console.log("event:", event);
			expect(event).toBeDefined();
			done();
		});
		document.addEventListener("click", function(event){
			console.log("event:", event);
			expect(event).toBeDefined();
			done();
		});
		
		document.trigger("click");
	});
	
});