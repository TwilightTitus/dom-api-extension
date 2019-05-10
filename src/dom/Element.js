import extendPrototype from "../utils/ExtendPrototype";
import BasicQuerySupport from "./extentions/BasicQuerySupport";
import AttributeSupport from "./extentions/AttributeSupport";
import NodeQuerySupport from "./extentions/NodeQuerySupport";
import ManipulationSupport from "./extentions/ManipulationSupport";

extendPrototype(Element,BasicQuerySupport, AttributeSupport, NodeQuerySupport, ManipulationSupport);