import { NodeModel, DefaultNodeModel } from "@projectstorm/react-diagrams";
import { ConnectorPortModel } from "./ConnectorPortModel";

export class ConnectorNodeModel extends NodeModel {
	constructor() {
		super("connector");
		this.addPort(new ConnectorPortModel("middle"));
		this.addPort(new ConnectorPortModel("left"));
		this.addPort(new ConnectorPortModel("right"));
	}
}
