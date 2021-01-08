import * as React from 'react';
import "./../styles.css";

export class TrayWidget extends React.Component {
	render() {
		return <div className="TrayWidget">{this.props.children}</div>;
	}
}

