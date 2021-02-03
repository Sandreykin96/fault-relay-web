import * as SRD from "@projectstorm/react-diagrams";
import { LoadNodeWidget } from "./LoadNodeWidget";
import { LoadNodeModel } from "./LoadNodeModel";
import * as React from "react";

export class LoadNodeFactory extends SRD.AbstractNodeFactory {
	constructor() {
		super("load");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: LoadNodeModel): JSX.Element {
		return <LoadNodeWidget node={node} />;
	}

	getNewInstance() {
		return new LoadNodeModel();
	}
}
