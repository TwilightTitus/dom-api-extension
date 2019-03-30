import extendPrototype from "../utils/ExtendPrototype";
import BasicQuerySupport from "./extentions/BasicQuerySupport";
import EventSupport from "./extentions/EventSupport";
import ReadyEventSupport from "./extentions/ReadyEventSupport";

extendPrototype(Document.prototype, BasicQuerySupport, EventSupport, ReadyEventSupport);

document.addEventListener("DOMContentLoaded", function(){
	document.trigger("ready");
});



