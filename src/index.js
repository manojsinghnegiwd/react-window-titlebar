import React from 'react';
import WindowControls from './WindowControls';

require('./style/index.scss');

export default class TitleBar extends React.Component {

	// render side buttons

	renderButtons = (buttons) => {
		return buttons.map((button, index) => {
			return React.cloneElement(button, {key: index});
		})
	}

	render () {
		let {title, theme, remote, className, style, actionsPos, hideControls, buttons} = this.props;

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
				<div className="sideButtons">{buttons && buttons.length > 0 ? this.renderButtons(buttons) : null}</div>
			</div>
		)
	}
}