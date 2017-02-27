import React from 'react';
import style from './style';

export default class TitleBar extends React.Component {
	render () {
		const {title} = this.props;
		return (
			<div style={style.titleBar}>
				<div></div>
				<div>{title}</div>
				<div></div>
			</div>
		)
	}
}