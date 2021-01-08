import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { TransformerPortModel } from "./TransformerPortModel";

export class TransformerNodeModel extends NodeModel {
	constructor() {
		super("transformer");
		this.addPort(new TransformerPortModel("top"));
		this.addPort(new TransformerPortModel("bottom"));
	}
}
