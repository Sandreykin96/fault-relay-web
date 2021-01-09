import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { TransformerPortModel3 } from "./TransformerPortModel3";

export class TransformerNodeModel3 extends NodeModel {
	constructor() {
		super("transformer3");
		this.addPort(new TransformerPortModel3("top"));
		this.addPort(new TransformerPortModel3("bottom-left"));
		this.addPort(new TransformerPortModel3("bottom-right"));
	}
}
