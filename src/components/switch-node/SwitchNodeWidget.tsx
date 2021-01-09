import * as React from "react";
import { SwitchNodeModel } from "./SwitchNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";

export interface SwitchNodeWidgetProps {
	node: SwitchNodeModel;
	size?: number;
}

export interface SwitchNodeWidgetState {}

export class SwitchNodeWidget extends React.Component<SwitchNodeWidgetProps, SwitchNodeWidgetState> {
	public static defaultProps: SwitchNodeWidgetProps = {
		size: 150,
		node: new SwitchNodeModel
	};

	constructor(props: SwitchNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
      <div>
       <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        stroke="#55D162"
        stroke-width="3"
      />
    </svg>

        
        <div
          style={{
            position: "absolute",
            left: 50 / 2 - 12,
            top: -12,
          }}
        >
          <PortWidget name="top" node={this.props.node} />
        </div>
        
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 - 13,
            top: 40,
          }}
        >
          <PortWidget name="bottom" node={this.props.node} />
        </div>
      </div>
    );
	}
}
