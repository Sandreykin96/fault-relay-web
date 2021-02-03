import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { StringLiteralLike } from "typescript";
import { GeneratorPortModel } from "./GeneratorPortModel";

export class GeneratorNodeModel extends NodeModel {
	name : string;
	constructor(name: string = "Untitled") {
		super("generator");
		this.addPort(new GeneratorPortModel("top"));
		this.addPort(new GeneratorPortModel("left"));
		this.addPort(new GeneratorPortModel("bottom"));
		this.addPort(new GeneratorPortModel("right"));
		this.name = name;
	}
}
