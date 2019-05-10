import extendPrototype from "../utils/ExtendPrototype";
import BasicQuerySupport from "./extentions/BasicQuerySupport";
import HtmlClassSupport from "./extentions/HtmlClassSupport";
import ShowHideSupport from "./extentions/ShowHideSupport";


extendPrototype(HTMLElement, HtmlClassSupport, ShowHideSupport);