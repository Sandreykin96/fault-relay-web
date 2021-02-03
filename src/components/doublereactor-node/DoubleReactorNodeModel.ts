import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { DoubleReactorPortModel } from "./DoubleReactorPortModel";

export class DoubleReactorNodeModel extends NodeModel {
	name : string;
	constructor(name: string = "Untitled") {
		super("doublereactor");
		this.addPort(new DoubleReactorPortModel("top"));
		this.addPort(new DoubleReactorPortModel("bottom-left"));
		this.addPort(new DoubleReactorPortModel("bottom-right"));
		this.name = name;
	}
}
