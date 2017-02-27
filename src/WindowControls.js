import React from 'react';
import style from './style';

class WindowControls extends React.Component {
	render () {
		return (
			<ul style={style.windowControls}>
				<li style={{...style.windowControlsButtons, ...style.closeButton}}></li>
				<li style={{...style.windowControlsButtons, ...style.minButton}}></li>
				<li style={{...style.windowControlsButtons, ...style.maxButton}}></li>
			</ul>
		)
	}
}

export default WindowControls;