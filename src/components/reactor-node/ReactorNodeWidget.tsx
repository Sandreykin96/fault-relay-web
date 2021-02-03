import * as React from "react";
import { ReactorNodeModel } from "./ReactorNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";
import { Reactor } from "../icons/Icons";

export interface ReactorNodeWidgetProps {
	node: ReactorNodeModel;
	size?: number;
}

export interface ReactorNodeWidgetState {}

export class ReactorNodeWidget extends React.Component<ReactorNodeWidgetProps, ReactorNodeWidgetState> {
	public static defaultProps: ReactorNodeWidgetProps = {
		size: 150,
		node: new ReactorNodeModel
	};

	constructor(props: ReactorNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
      <div>
       {Reactor()}
       
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
            left: 50 / 2 - 7,
            top: -13,
          }}
        >
          <PortWidget name="top" node={this.props.node} />
        </div>
{/* 
        <div
          style={{
            position: "absolute",
            left: 45,
            top: -13,
          }}
        >
          <PortWidget name="bottom" node={this.props.node} />
        </div> */}
        
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 - 7,
            top: 60,
          }}
        >
          <PortWidget name="bottom" node={this.props.node} />
        </div>
      </div>
    );
	}
}
