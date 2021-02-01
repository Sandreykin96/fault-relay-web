import * as SRD from "@projectstorm/react-diagrams";
import { GroundNodeWidget } from "./GroundNodeWidget";
import { GroundNodeModel } from "./GroundNodeModel";
import * as React from "react";

export class GroundNodeFactory extends SRD.AbstractNodeFactory {
	constructor() {
		super("ground");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: SRD.NodeModel): JSX.Element {
		return <GroundNodeWidget node={node} />;
	}

	getNewInstance() {
		return new GroundNodeModel();
	}
}
