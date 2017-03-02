import React from 'react';
import WindowControls from './WindowControls';

require('./style/index.scss');

export default class TitleBar extends React.Component {
	render () {
		let {title, theme, remote, className, style} = this.props;

		if(!theme) {
			theme = 'light'
		}

		return (
			<div style={style} className={"reactWindowTitleBar " + className + " " + theme}>
				<div>
					<WindowControls remote={remote} />
				</div>
				<div className="windowTitle">{title}</div>
				<div></div>
			</div>
		)
	}
}