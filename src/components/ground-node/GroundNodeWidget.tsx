import * as React from "react";
import { GroundNodeModel } from "./GroundNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";

export interface GroundNodeWidgetProps {
	node: GroundNodeModel;
	size?: number;
}

export interface GroundNodeWidgetState {}

export class GroundNodeWidget extends React.Component<GroundNodeWidgetProps, GroundNodeWidgetState> {
	public static defaultProps: GroundNodeWidgetProps = {
		size: 150,
		node: new GroundNodeModel
	};

	constructor(props: GroundNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
      <div>
       <svg
      width="35"
      height="30"
      viewBox="0 0 35 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="9"
        y1="22.5"
        x2="26"
        y2="22.5"
        stroke="#55D162"
        stroke-width="3"
      />
      <line
        x1="18"
        y1="17.5"
        x2="18"
        y2="0.5"
        stroke="#55D162"
        stroke-width="3"
      />
      <line
        x1="14"
        y1="28.5"
        x2="22"
        y2="28.5"
        stroke="#55D162"
        stroke-width="3"
      />
      <line y1="16.5" x2="35" y2="16.5" stroke="#55D162" stroke-width="3" />
    </svg>
        
        <div
          style={{
            position: "absolute",
            left: 50 / 2 - 15,
            top: -11,
          }}
        >
          <PortWidget name="top" node={this.props.node} />
        </div>
        
      
      </div>
    );
	}
}
