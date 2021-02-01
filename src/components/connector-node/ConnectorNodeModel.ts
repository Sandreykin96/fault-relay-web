import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { ConnectorPortModel } from "./ConnectorPortModel";

export class ConnectorNodeModel extends NodeModel {
	constructor() {
		super("connector");
		this.addPort(new ConnectorPortModel("top"));
		this.addPort(new ConnectorPortModel("bottom"));
	}
}
