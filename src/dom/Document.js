import extendPrototype from "../utils/ExtendPrototype";
import BasicQuerySupport from "./extentions/BasicQuerySupport";
import ReadyEventSupport from "./extentions/ReadyEventSupport";

extendPrototype(Document.prototype, BasicQuerySupport, ReadyEventSupport);

document.addEventListener("DOMContentLoaded", function(){
	document.trigger("ready");
});



