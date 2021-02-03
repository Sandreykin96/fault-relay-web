import * as SRD from "@projectstorm/react-diagrams";
import { SwitchNodeWidget } from "./SwitchNodeWidget";
import { SwitchNodeModel } from "./SwitchNodeModel";
import * as React from "react";

export class SwitchNodeFactory extends SRD.AbstractNodeFactory {
	constructor() {
		super("switch");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: SwitchNodeModel): JSX.Element {
		return <SwitchNodeWidget node={node} />;
	}

	getNewInstance() {
		return new SwitchNodeModel();
	}
}
