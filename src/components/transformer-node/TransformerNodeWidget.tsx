import * as React from "react";
import { TransformerNodeModel } from "./TransformerNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";
import { TransformerIcon } from "../icons/Icons";

export interface TransformerNodeWidgetProps {
	node: TransformerNodeModel;
	size?: number;
}

export interface TransformerNodeWidgetState {}

export class TransformerNodeWidget extends React.Component<TransformerNodeWidgetProps, TransformerNodeWidgetState> {
	public static defaultProps: TransformerNodeWidgetProps = {
		size: 150,
		node: new TransformerNodeModel
	};

	constructor(props: TransformerNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
      <div>
       {TransformerIcon()}
       <div style={{
            position: "absolute",
            left: 45,
            top: -30,
          }}>
          {this.props.node.name}
        </div>
        
        <div
          style={{
            position: "absolute",
            left: 50 / 2 - 7,
            top: -10,
          }}
        >
          <PortWidget name="top" node={this.props.node} />
        </div>
        
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 - 7,
            top: 70,
          }}
        >
          <PortWidget name="bottom" node={this.props.node} />
        </div>
      </div>
    );
	}
}
