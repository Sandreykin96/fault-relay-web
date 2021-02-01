import * as React from "react";
import { LineNodeModel } from "./LineNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";
import { Line } from "../icons/Icons";

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
       {Line()}
        
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
            top: 75,
          }}
        >
          <PortWidget name="bottom" node={this.props.node} />
        </div>
      </div>
    );
	}
}
