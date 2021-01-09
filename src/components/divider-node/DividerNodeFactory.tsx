import * as SRD from "@projectstorm/react-diagrams";
import { DividerNodeWidget } from "./DividerNodeWidget";
import { DividerNodeModel } from "./DividerNodeModel";
import * as React from "react";

export class DividerNodeFactory extends SRD.AbstractNodeFactory {
	constructor() {
		super("divider");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: SRD.NodeModel): JSX.Element {
		return <DividerNodeWidget node={node} />;
	}

	getNewInstance() {
		return new DividerNodeModel();
	}
}
