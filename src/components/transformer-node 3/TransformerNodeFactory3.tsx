import * as SRD from "@projectstorm/react-diagrams";
import { TransformerNodeWidget3 } from "./TransformerNodeWidget3";
import { TransformerNodeModel3 } from "./TransformerNodeModel3";
import * as React from "react";

export class TransformerNodeFactory3 extends SRD.AbstractNodeFactory {
	constructor() {
		super("transformer3");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: SRD.NodeModel): JSX.Element {
		return <TransformerNodeWidget3 node={node} />;
	}

	getNewInstance() {
		return new TransformerNodeModel3();
	}
}
