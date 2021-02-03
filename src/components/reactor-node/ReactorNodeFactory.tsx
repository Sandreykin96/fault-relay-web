import * as SRD from "@projectstorm/react-diagrams";
import { ReactorNodeWidget } from "./ReactorNodeWidget";
import { ReactorNodeModel } from "./ReactorNodeModel";
import * as React from "react";

export class ReactorNodeFactory extends SRD.AbstractNodeFactory {
	constructor() {
		super("reactor");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: ReactorNodeModel): JSX.Element {
		return <ReactorNodeWidget node={node} />;
	}

	getNewInstance() {
		return new ReactorNodeModel();
	}
}