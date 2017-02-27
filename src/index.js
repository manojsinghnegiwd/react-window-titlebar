import React from 'react';
import style from './style';
import WindowControls from './WindowControls';

export default class TitleBar extends React.Component {
	render () {
		const {title} = this.props;
		return (
			<div style={style.titleBar}>
				<div>
					<WindowControls />
				</div>
				<div>{title}</div>
				<div></div>
			</div>
		)
	}
}