import * as SRD from "@projectstorm/react-diagrams";
import { ConnectorNodeWidget } from "./ConnectorNodeWidget";
import { ConnectorNodeModel } from "./ConnectorNodeModel";
import * as React from "react";

export class ConnectorNodeFactory extends SRD.AbstractNodeFactory {
	constructor() {
		super("connector");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: SRD.NodeModel): JSX.Element {
		return <ConnectorNodeWidget node={node} />;
	}

	getNewInstance() {
		return new ConnectorNodeModel();
	}
}
