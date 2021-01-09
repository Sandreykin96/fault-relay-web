import * as React from "react";
import { LineNodeModel } from "./LineNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";

export interface LineNodeWidgetProps {
	node: LineNodeModel;
	size?: number;
}

export interface LineNodeWidgetState {}

export class LineNodeWidget extends React.Component<LineNodeWidgetProps, LineNodeWidgetState> {
	public static defaultProps: LineNodeWidgetProps = {
		size: 150,
		node: new LineNodeModel
	};

	constructor(props: LineNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
      <div>
       <svg
      width="21"
      height="76"
      viewBox="0 0 21 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.5" x2="21" y2="1.5" stroke="#55D162" stroke-width="3" />
      <line y1="74.5" x2="21" y2="74.5" stroke="#55D162" stroke-width="3" />
      <line
        x1="10.5"
        y1="73"
        x2="10.5"
        y2="3"
        stroke="#55D162"
        stroke-width="3"
      />
    </svg>
        
        <div
          style={{
            position: "absolute",
            left: 50 / 2 - 22,
            top: -11,
          }}
        >
          <PortWidget name="top" node={this.props.node} />
        </div>
        
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 - 22,
            top: 70,
          }}
        >
          <PortWidget name="bottom" node={this.props.node} />
        </div>
      </div>
    );
	}
}
