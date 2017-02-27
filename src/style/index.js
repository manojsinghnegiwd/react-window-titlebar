const style = {
	titleBar: {
		width: "100%",
		height: 30,
		paddingTop: 4,
		paddingBottom: 4,
		paddingRight: 10,
		paddingLeft: 10,
		WebkitAppRegion: "drag",
		backgroundColor: "rgba(230, 230, 230, 0.52)",
		position: "fixed",
		display: 'flex',
		justifyContent: 'space-between'
	},
	windowControls: {
		display: "inline",
		listStyle: "none",
		float: "left",
		padding: 0,
		margin: 0
	},
	windowControlsButtons: {
		width: 12,
		height: 12,
		float: "left",
		margin: 5,
		borderRadius: "50%"
	},
	closeButton: {
		backgroundColor: "#fe5e59",
	},
	minButton: {
		backgroundColor: "#fec42f",
	},
	maxButton: {
		backgroundColor: "#2bd648",
	}
}

export default style;