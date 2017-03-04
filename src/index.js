import React from 'react';
import WindowControls from './WindowControls';

require('./style/index.scss');

export default class TitleBar extends React.Component {
	render () {
		let {title, theme, remote, className, style, actionsPos, hideControls} = this.props;

		if(!theme) {
			theme = 'light'
		}

		className = className || "";

		if(actionsPos == "left" || !actionsPos) {
			className += " controlLeft ";
		} else if (actionsPos == "right") {
			className += " controlRight ";
		}

		return (
			<div style={style} className={"reactWindowTitleBar " + className + theme}>
				<div className="windowControlsContainer">
					{!hideControls ? <WindowControls remote={remote} /> : null}
				</div>
				<div className="windowTitle">{title}</div>
				<div></div>
			</div>
		)
	}
}