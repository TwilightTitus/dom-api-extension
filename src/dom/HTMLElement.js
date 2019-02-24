import extendPrototype from "../utils/ExtendPrototype";
import BasicQuerySupport from "./extentions/BasicQuerySupport";
import NodeQuerySupport from "./extentions/NodeQuerySupport";
import HtmlClassSupport from "./extentions/HtmlClassSupport";
import EventSupport from "./extentions/EventSupport";
import ShowHideSupport from "./extentions/ShowHideSupport";


extendPrototype(HTMLElement.prototype,BasicQuerySupport,NodeQuerySupport,HtmlClassSupport,EventSupport,ShowHideSupport);