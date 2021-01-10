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
      {Connector()}
        
      <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 -36,
            top: 6,
          }}
        >
          <PortWidget name="bottom-left" node={this.props.node} />
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 +93,
            top: 6,
          }}
        >
          <PortWidget name="bottom-right" node={this.props.node} />
        </div>
      </div>
    );
	}
}
