import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { DividerPortModel } from "./DividerPortModel";

export class DividerNodeModel extends NodeModel {
	constructor() {
		super("divider");
		this.addPort(new DividerPortModel("left"));
		this.addPort(new DividerPortModel("right"));
	}
}