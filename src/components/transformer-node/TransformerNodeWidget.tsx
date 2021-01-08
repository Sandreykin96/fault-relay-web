import * as React from "react";
import { TransformerNodeModel } from "./TransformerNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";

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
        <svg
          width="50"
          height="75"
          viewBox="0 0 50 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="23.5" stroke="#55D162" stroke-width="3" />
          <circle cx="25" cy="25" r="23.5" stroke="#55D162" stroke-width="3" />
          <circle cx="25" cy="50" r="23.5" stroke="#55D162" stroke-width="3" />
        </svg>

        
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
