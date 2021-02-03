import * as React from "react";
import { TransformerNodeModel3 } from "./TransformerNodeModel3";
import { PortWidget } from "@projectstorm/react-diagrams";
import { ThreeTransformerIcon } from "./../icons/Icons"

export interface TransformerNodeWidgetProps3 {
	node: TransformerNodeModel3;
	size?: number;
}

export interface TransformerNodeWidgetState3 {}

export class TransformerNodeWidget3 extends React.Component<TransformerNodeWidgetProps3, TransformerNodeWidgetState3> {
	public static defaultProps: TransformerNodeWidgetProps3 = {
		size: 150,
		node: new TransformerNodeModel3
	};

	constructor(props: TransformerNodeWidgetProps3) {
		super(props);
		this.state = {};
	}

	render() {
		return (
      <div>
        {ThreeTransformerIcon()}

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
            left: 50 / 2 + 10,
            top: -10,
          }}
        >
          <PortWidget name="top" node={this.props.node} />
        </div>
        
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 -10,
            top: 70,
          }}
        >
          <PortWidget name="bottom-left" node={this.props.node} />
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 +35,
            top: 70,
          }}
        >
          <PortWidget name="bottom-right" node={this.props.node} />
        </div>
      </div>
    );
	}
}
