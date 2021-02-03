import * as React from "react";
import { DoubleReactorNodeModel } from "./DoubleReactorNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";
import { DoubleReactor } from "../icons/Icons";

export interface DoubleReactorNodeWidgetProps {
	node: DoubleReactorNodeModel;
	size?: number;
}

export interface DoubleReactorNodeWidgetState {}

export class DoubleReactorNodeWidget extends React.Component<DoubleReactorNodeWidgetProps, DoubleReactorNodeWidgetState> {
	public static defaultProps: DoubleReactorNodeWidgetProps = {
		size: 150,
		node: new DoubleReactorNodeModel
	};

	constructor(props: DoubleReactorNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
      <div>
        {DoubleReactor()}
        
        <div style={{
            position: "absolute",
            left: 60,
            top: -30,
          }}>
          {this.props.node.name}
        </div>
        
        <div
          style={{
            position: "absolute",
            left: 50 / 2 + 5,
            top: -12,
          }}
        >
          <PortWidget name="top" node={this.props.node} />
        </div>
        
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 - 30,
            top: 65,
          }}
        >
          <PortWidget name="bottom-left" node={this.props.node} />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 + 42,
            top: 65,
          }}
        >
          <PortWidget name="bottom-right" node={this.props.node} />
        </div>
      </div>
    );
	}
}
