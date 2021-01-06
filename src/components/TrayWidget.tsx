import * as React from 'react';
import "./../styles.css";

export class TrayWidget extends React.Component {
	render() {
		return <div className = 'Tray'>{this.props.children}</div>;
	}
}

