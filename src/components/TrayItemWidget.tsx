import * as React from 'react';

export interface TrayItemWidgetProps {
	model: any;
	color?: string;
	name: string;
}


export class TrayItemWidget extends React.Component<TrayItemWidgetProps> {
	render() {
		return (
			<div
				color={this.props.color}
				draggable={true}
				onDragStart={(event) => {
					event.dataTransfer.setData('storm-diagram-node', JSON.stringify(this.props.model));
				}}
				className="TrayItemWidget">
				{this.props.name}
			</div>
		);
	}
}