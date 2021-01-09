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
        <svg
      width="52"
      height="13"
      viewBox="0 0 52 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="11.5" x2="21" y2="11.5" stroke="#55D162" stroke-width="3" />
      <line
        x1="35.4118"
        y1="11.32"
        x2="19.2096"
        y2="1.27486"
        stroke="#55D162"
        stroke-width="3"
      />
      <line
        x1="35"
        y1="11.5"
        x2="52"
        y2="11.5"
        stroke="#55D162"
        stroke-width="3"
      />
    </svg>

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
