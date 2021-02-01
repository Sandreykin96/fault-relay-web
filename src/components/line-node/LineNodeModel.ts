import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { LinePortModel } from "./LinePortModel";

export class LineNodeModel extends NodeModel {
	constructor() {
		super("line");
		this.addPort(new LinePortModel("top"));
		this.addPort(new LinePortModel("bottom"));
	}
}
