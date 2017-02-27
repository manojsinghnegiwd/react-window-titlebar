import React from 'react';
import WindowControls from './WindowControls';

require('./style/index.scss');

export default class TitleBar extends React.Component {
	render () {
		let {title, theme} = this.props;

		if(!theme) {
			theme = 'light'
		}

		return (
			<div className={"reactWindowTitleBar " + theme}>
				<div>
					<WindowControls />
				</div>
				<div className="windowTitle">{title}</div>
				<div></div>
			</div>
		)
	}
}