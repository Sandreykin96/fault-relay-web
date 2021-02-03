import * as React from "react";
import { SwitchNodeModel } from "./SwitchNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";
import { Switch } from "../icons/Icons";

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
       {Switch()}

       <div style={{
            position: "absolute",
            left: 40,
            top: -30,
          }}>
          {this.props.node.name}
        </div>
        
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
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 -36,
            top: 15,
          }}
        >
          <PortWidget name="left" node={this.props.node} />
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 +12,
            top: 15,
          }}
        >
          <PortWidget name="right" node={this.props.node} />
        </div>
        
      </div>
    );
	}
}
