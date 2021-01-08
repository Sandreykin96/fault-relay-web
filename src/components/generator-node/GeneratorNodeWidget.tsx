import * as React from "react";
import { GeneratorNodeModel } from "./GeneratorNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";

export interface GeneratorNodeWidgetProps {
	node: GeneratorNodeModel;
	size?: number;
}

export interface GeneratorNodeWidgetState {}

/**
 * @author Dylan Vorster
 */
export class GeneratorNodeWidget extends React.Component<GeneratorNodeWidgetProps, GeneratorNodeWidgetState> {
	public static defaultProps: GeneratorNodeWidgetProps = {
		size: 150,
		node: new GeneratorNodeModel
	};

	constructor(props: GeneratorNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
      <div>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="28" cy="28" r="26.5" stroke="#55D162" stroke-width="3"/>
<path d="M12 27.7727C18.6 37.2398 26.0938 31.7174 29.0156 27.7727C36.4406 19.1289 42.7656 24.1711 45 27.7727" stroke="#32C95C" stroke-width="3"/>
</svg>

        <div
          style={{
            position: "absolute",
            top: 50 / 2 - 6,
			left: -6,
          }}
        >
          <PortWidget name="left" node={this.props.node}/>
        </div>
        <div
          style={{
            position: "absolute",
            left: 50 / 2 - 3,
            top: -10,
          }}
        >
          <PortWidget name="top" node={this.props.node} />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50,
            top: 50 / 2 - 6,
          }}
        >
          <PortWidget name="right" node={this.props.node} />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            left: 50 / 2 - 3,
            top: 50,
          }}
        >
          <PortWidget name="bottom" node={this.props.node} />
        </div>
      </div>
    );
	}
}
