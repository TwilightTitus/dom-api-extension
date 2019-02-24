import extendPrototype from "../utils/ExtendPrototype";
import DataSupport from "./extentions/DataSupport";
import ManipulationSupport from "./extentions/ManipulationSupport";

extendPrototype(Node.prototype,DataSupport,ManipulationSupport);