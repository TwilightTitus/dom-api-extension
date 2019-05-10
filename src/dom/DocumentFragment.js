import extendPrototype from "../utils/ExtendPrototype";
import BasicQuerySupport from "./extentions/BasicQuerySupport";
import ManipulationSupport from "./extentions/ManipulationSupport";

extendPrototype(DocumentFragment, BasicQuerySupport, ManipulationSupport);




