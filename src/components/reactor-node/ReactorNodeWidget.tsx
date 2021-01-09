import * as React from "react";
import { ReactorNodeModel } from "./ReactorNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";

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
        <svg
      width="51"
      height="63"
      viewBox="0 0 51 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27 7.54426C26.5038 7.51489 26.0036 7.5 25.5 7.5C11.6929 7.5 0.5 18.6929 0.5 32.5C0.5 46.3071 11.6929 57.5 25.5 57.5C39.3071 57.5 50.5 46.3071 50.5 32.5C50.5 31.9964 50.4851 31.4962 50.4557 31H47.4497H27H23V54.3595C12.0269 53.1183 3.5 43.805 3.5 32.5C3.5 20.3497 13.3497 10.5 25.5 10.5C26.0063 10.5 26.5064 10.5132 27 10.5396V7.54426ZM47.4497 34C46.6897 45.2864 37.4179 54.2398 26 54.4944V34H47.4497Z"
        fill="#55D162"
      />
      <path
        d="M26 0C26 0.8 26 7.33333 26 10.5"
        stroke="#55D162"
        stroke-width="3"
      />
      <path
        d="M24.5 52C24.5 52.8 24.5 59.3333 24.5 62.5"
        stroke="#55D162"
        stroke-width="3"
      />
    </svg>
        
        <div
          style={{
            position: "absolute",
            left: 50 / 2 - 7,
            top: -13,
          }}
        >
          <PortWidget name="top" node={this.props.node} />
        </div>
        
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
