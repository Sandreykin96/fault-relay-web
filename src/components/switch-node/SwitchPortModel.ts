import * as _ from "lodash";
import { LinkModel, DiagramEngine, PortModel, DefaultLinkModel } from "@projectstorm/react-diagrams";

export class SwitchPortModel extends PortModel {
	position: string | "top" | "bottom";

	constructor(pos: string = "top") {
		super(pos, "switch");
		this.position = pos;
	}

	serialize() {
		return _.merge(super.serialize(), {
			position: this.position
		});
	}

	deSerialize(data: any, engine: DiagramEngine) {
		super.deSerialize(data, engine);
		this.position = data.position;
	}

	createLinkModel(): LinkModel {
		return new DefaultLinkModel();
	}
}
