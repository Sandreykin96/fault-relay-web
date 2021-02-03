import * as SRD from "@projectstorm/react-diagrams";
import { DoubleReactorNodeWidget } from "./DoubleReactorNodeWidget";
import { DoubleReactorNodeModel } from "./DoubleReactorNodeModel";
import * as React from "react";
import { ReactorNodeModel } from "../reactor-node/ReactorNodeModel";

export class DoubleReactorNodeFactory extends SRD.AbstractNodeFactory {
	constructor() {
		super("doublereactor");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: ReactorNodeModel): JSX.Element {
		return <DoubleReactorNodeWidget node={node} />;
	}

	getNewInstance() {
		return new DoubleReactorNodeModel();
	}
}
