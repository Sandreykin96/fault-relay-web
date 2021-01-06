import * as React from 'react';
import "./../styles.css";

export class TrayWidget extends React.Component {
	render() {
		return <div>{this.props.children}</div>;
	}
}

