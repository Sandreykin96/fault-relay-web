import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { LoadPortModel } from "./LoadPortModel";

export class LoadNodeModel extends NodeModel {
	constructor() {
		super("load");
		this.addPort(new LoadPortModel("bottom"));
	}
}
