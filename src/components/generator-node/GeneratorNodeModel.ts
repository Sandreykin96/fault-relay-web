import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { GeneratorPortModel } from "./GeneratorPortModel";

export class GeneratorNodeModel extends NodeModel {
	constructor() {
		super("generator");
		this.addPort(new GeneratorPortModel("top"));
		this.addPort(new GeneratorPortModel("left"));
		this.addPort(new GeneratorPortModel("bottom"));
		this.addPort(new GeneratorPortModel("right"));
	}
}
