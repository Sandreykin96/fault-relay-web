import * as React from "react";
import { LoadNodeModel } from "./LoadNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";
import { Load } from "../icons/Icons";

export interface LoadNodeWidgetProps {
	node: LoadNodeModel;
	size?: number;
}

export interface LoadNodeWidgetState {}

export class LoadNodeWidget extends React.Component<LoadNodeWidgetProps, LoadNodeWidgetState> {
	public static defaultProps: LoadNodeWidgetProps = {
		size: 150,
		node: new LoadNodeModel
	};

	constructor(props: LoadNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
      <div>
      {Load()}
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 - 20,
            top: 49,
          }}
        >
          <PortWidget name="bottom" node={this.props.node} />
        </div>
      </div>
    );
	}
}
