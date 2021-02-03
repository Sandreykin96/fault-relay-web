import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { LoadPortModel } from "./LoadPortModel";

export class LoadNodeModel extends NodeModel {
	name : string;
	constructor(name: string = "Untitled") {
		super("load");
		this.addPort(new LoadPortModel("bottom"));
		this.name = name;
	}
}
