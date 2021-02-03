import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { SwitchPortModel } from "./SwitchPortModel";

export class SwitchNodeModel extends NodeModel {
	name : string;
	constructor(name: string = "Untitled") {
		super("switch");
		this.addPort(new SwitchPortModel("top"));
		this.addPort(new SwitchPortModel("bottom"));
		this.addPort(new SwitchPortModel("left"));
		this.addPort(new SwitchPortModel("right"));
		this.name = name;
	}
}
