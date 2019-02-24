import extendPrototype from "../utils/ExtendPrototype";
import ValueSupport from "./extentions/ValueSupport";


extendPrototype(HTMLInputElement.prototype,ValueSupport);