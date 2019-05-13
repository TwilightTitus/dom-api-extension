import Utils from "../../src/utils/Utils";

describe("utils/Utils Tests", function() {	
	it("global == window", function(done){
		expect(Utils.global).toBe(window);
		done();
	});
	
	it("globalVar", function(done){
		window.__test__var__1 = {};
		expect(Utils.globalVar("__test__var__1")).toBe(window.__test__var__1);
		
		const testVar2 = {};
		expect(Utils.globalVar("__test__var__2", testVar2)).toBe(testVar2);
		expect(window.__test__var__2).toBe(testVar2);
		
		done();
	});
	
	it("callWithList by function name", function(done){
		try{
			let target = {
				counter : 0,
				action : function(value){
					this.counter++;
					if(this.counter == 10)
						done();
				}
			};
			Utils.callWithList(target, "action", [1,2,3,4,5,6,7,8,9,10], target);
		}catch (e) {
			done(e);
		}
	});
	
	it("callWithList by function", function(done){
		try{
			let target = {
					counter : 0,
					action : function(value){
						this.counter++;
						if(this.counter == 10)
							done();
					}
				};
			Utils.callWithList(target, target.action.bind(target), [1,2,3,4,5,6,7,8,9,10], target);	
		}catch (e) {
			done(e);
		}
	});
	
	it("callWithList by function name with nodelist", function(done){
		try{
			let container = create("<div></div>").first();
			document.body.append(container);
			container.append(create("<input><input><input><input><input>"));
			let nodes = container.find("*");
			let counter = nodes.length;
			Node.prototype.testAction = function(value){
				counter--;
				if(counter == 0){			
					done();
					container.remove();
				}
			};
			Utils.callWithList(document.body, "testAction", nodes, document.body);
		}catch (e) {
			done(e);
		}
	});
	
	it("callWithList by function with nodelist", function(done){
		try{
			let container = create("<div></div>").first();
			document.body.append(container);
			container.append(create("<input><input><input><input><input>"));
			let nodes = container.find("*");
			let counter = nodes.length;
			let action = function(value){
				counter--;
				if(counter == 0)		
					done();
			};
			Utils.callWithList(document.body, action, nodes);
		}catch (e) {
			done(e);
		}
	});
});