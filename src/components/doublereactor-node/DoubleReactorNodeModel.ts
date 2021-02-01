import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { DoubleReactorPortModel } from "./DoubleReactorPortModel";

export class DoubleReactorNodeModel extends NodeModel {
	constructor() {
		super("doublereactor");
		this.addPort(new DoubleReactorPortModel("top"));
		this.addPort(new DoubleReactorPortModel("bottom"));
	}
}
