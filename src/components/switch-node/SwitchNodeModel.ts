import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { SwitchPortModel } from "./SwitchPortModel";

export class SwitchNodeModel extends NodeModel {
	constructor() {
		super("switch");
		this.addPort(new SwitchPortModel("top"));
		this.addPort(new SwitchPortModel("bottom"));
	}
}
