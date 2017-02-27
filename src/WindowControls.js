import React from 'react';

class WindowControls extends React.Component {
	render () {
		return (
			<ul className="windowControls">
				<li className="windowControlsButtons closeButton"></li>
				<li className="windowControlsButtons minButton"></li>
				<li className="windowControlsButtons maxButton"></li>
			</ul>
		)
	}
}

export default WindowControls;