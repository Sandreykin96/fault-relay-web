import * as React from "react";
import { ConnectorNodeModel } from "./ConnectorNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";
import { Connector } from "../icons/Icons";

export interface ConnectorNodeWidgetProps {
	node: ConnectorNodeModel;
	size?: number;
}

export interface ConnectorNodeWidgetState {}

export class ConnectorNodeWidget extends React.Component<ConnectorNodeWidgetProps, ConnectorNodeWidgetState> {
	public static defaultProps: ConnectorNodeWidgetProps = {
		size: 150,
		node: new ConnectorNodeModel
	};

	constructor(props: ConnectorNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
      <div>
      <svg
      width="300"
      height="9"
      viewBox="0 0 300 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.0"
        y1="5.61129"
        x2="300"
        y2="3.517"
        stroke="#2087E7"
        stroke-width="6"
      />
    </svg>
        
      <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 75,
            top: 6,
          }}
        >
          <PortWidget name="left" node={this.props.node} />
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 150,
            top: 6,
          }}
        >
          <PortWidget name="middle" node={this.props.node} />
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 225,
            top: 6,
          }}
        >
          <PortWidget name="right" node={this.props.node} />
        </div>

      </div>
    );
	}
}
