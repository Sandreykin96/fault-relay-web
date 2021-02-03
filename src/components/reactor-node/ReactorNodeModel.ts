import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { ReactorPortModel } from "./ReactorPortModel";

export class ReactorNodeModel extends NodeModel {
	name : string;
	constructor(name: string = "Untitled") {
		super("reactor");
		this.addPort(new ReactorPortModel("top"));
		this.addPort(new ReactorPortModel("bottom"));
		this.name = name;
	}
}
