import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { ReactorPortModel } from "./ReactorPortModel";

export class ReactorNodeModel extends NodeModel {
	constructor() {
		super("reactor");
		this.addPort(new ReactorPortModel("top"));
		this.addPort(new ReactorPortModel("bottom"));
	}
}
