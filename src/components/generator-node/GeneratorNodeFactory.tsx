import * as SRD from "@projectstorm/react-diagrams";
import { GeneratorNodeWidget } from "./GeneratorNodeWidget";
import { GeneratorNodeModel } from "./GeneratorNodeModel";
import * as React from "react";

export class GeneratorNodeFactory extends SRD.AbstractNodeFactory {
	constructor() {
		super("generator");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: GeneratorNodeModel): JSX.Element {
		return <GeneratorNodeWidget node={node} />;
	}

	getNewInstance() {
		return new GeneratorNodeModel();
	}
}
