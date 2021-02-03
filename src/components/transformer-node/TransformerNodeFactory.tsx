import * as SRD from "@projectstorm/react-diagrams";
import { TransformerNodeWidget } from "./TransformerNodeWidget";
import { TransformerNodeModel } from "./TransformerNodeModel";
import * as React from "react";

export class TransformerNodeFactory extends SRD.AbstractNodeFactory {
	constructor() {
		super("transformer");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: TransformerNodeModel): JSX.Element {
		return <TransformerNodeWidget node={node} />;
	}

	getNewInstance() {
		return new TransformerNodeModel();
	}
}
