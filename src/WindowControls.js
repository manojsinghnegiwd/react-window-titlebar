import React from 'react';

class WindowControls extends React.Component {

	constructor(props){
		super(props);
	}

	closeWindow = (remote) => {
		remote.getCurrentWindow().close();
	}

	minimize = (remote) => {
		remote.getCurrentWindow().minimize();
	}

	maximize = (remote) => {
		let window = remote.getCurrentWindow();

		if(window.isMaximized())
			window.unmaximize();
		else
			window.maximize();
	}


	render () {
		const {remote} = this.props;
		return (
			<ul className="windowControls">
				<li onClick={ () => this.closeWindow(remote) } className="windowControlsButtons closeButton"></li>
				<li onClick={ () => this.minimize(remote) } className="windowControlsButtons minButton"></li>
				<li onClick={ () => this.maximize(remote) } className="windowControlsButtons maxButton"></li>
			</ul>
		)
	}
}

export default WindowControls;