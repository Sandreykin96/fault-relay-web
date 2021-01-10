import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { GroundPortModel } from "./GroundPortModel";

export class GroundNodeModel extends NodeModel {
	constructor() {
		super("ground");
		this.addPort(new GroundPortModel("top"));
		this.addPort(new GroundPortModel("bottom"));
	}
}
