import * as React from "react";
import { DividerNodeModel } from "./DividerNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";
import { Divider } from "../icons/Icons";

export interface DividerNodeWidgetProps {
	node: DividerNodeModel;
	size?: number;
}

export interface DividerNodeWidgetState {}

export class DividerNodeWidget extends React.Component<DividerNodeWidgetProps, DividerNodeWidgetState> {
	public static defaultProps: DividerNodeWidgetProps = {
		size: 150,
		node: new DividerNodeModel
	};

	constructor(props: DividerNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
      <div>
      {Divider()}

        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 -36,
            top: 9,
          }}
        >
          <PortWidget name="bottom-left" node={this.props.node} />
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 +24,
            top: 9,
          }}
        >
          <PortWidget name="bottom-right" node={this.props.node} />
        </div>
      </div>
    );
	}
}
