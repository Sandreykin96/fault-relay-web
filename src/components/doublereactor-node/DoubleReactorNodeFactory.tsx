import * as SRD from "@projectstorm/react-diagrams";
import { DoubleReactorNodeWidget } from "./DoubleReactorNodeWidget";
import { DoubleReactorNodeModel } from "./DoubleReactorNodeModel";
import * as React from "react";

export class DoubleReactorNodeFactory extends SRD.AbstractNodeFactory {
	constructor() {
		super("doublereactor");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: SRD.NodeModel): JSX.Element {
		return <DoubleReactorNodeWidget node={node} />;
	}

	getNewInstance() {
		return new DoubleReactorNodeModel();
	}
}
