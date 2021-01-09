import * as SRD from "@projectstorm/react-diagrams";
import { LineNodeWidget } from "./LineNodeWidget";
import { LineNodeModel } from "./LineNodeModel";
import * as React from "react";

export class LineNodeFactory extends SRD.AbstractNodeFactory {
	constructor() {
		super("line");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: SRD.NodeModel): JSX.Element {
		return <LineNodeWidget node={node} />;
	}

	getNewInstance() {
		return new LineNodeModel();
	}
}
