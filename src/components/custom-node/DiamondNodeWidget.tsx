import * as React from "react";
import { DiamondNodeModel } from "./DiamondNodeModel";
import { PortWidget } from "@projectstorm/react-diagrams";

export interface DiamonNodeWidgetProps {
	node: DiamondNodeModel;
	size?: number;
}

export interface DiamonNodeWidgetState {}

/**
 * @author Dylan Vorster
 */
export class DiamonNodeWidget extends React.Component<DiamonNodeWidgetProps, DiamonNodeWidgetState> {
	public static defaultProps: DiamonNodeWidgetProps = {
		size: 150,
		node: new DiamondNodeModel
	};

	constructor(props: DiamonNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div
				className={"diamond-node"}
				style={{
					position: "relative",
					width: this.props.size,
					height: this.props.size
				}}
			>

<svg width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
<g filter="url(#filter0_d)">
<circle cx="79" cy="75" r="73.5" stroke="#6EFA00" stroke-width="3"/>
</g>
<path d="M24 75C49.6 100.6 72 85.6667 80 75C107.2 51.8 126.667 65.3333 133 75" stroke="#7CEADD" stroke-width="3"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>





				<div
					style={{
						position: "absolute",
						zIndex: 10,
						top: 150 / 2-6,
						left: -6
					}}
				>
					<PortWidget name="left" node={this.props.node} />
				</div>
				<div
					style={{
						position: "absolute",
						zIndex: 10,
						left: 150 / 2-3,
						top: -10
					}}
				>
					<PortWidget name="top" node={this.props.node} />
				</div>
				<div
					style={{
						position: "absolute",
						zIndex: 10,
						left: 150-1,
						top: 150 / 2 - 6
					}}
				>
					<PortWidget name="right" node={this.props.node} />
				</div>
				<div
					style={{
						position: "absolute",
						zIndex: 10,
						left: 150 / 2-3,
						top: 150 - 5
					}}
				>
					<PortWidget name="bottom" node={this.props.node} />
				</div>
			</div>
		);
	}
}
