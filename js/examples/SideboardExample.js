
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Sideboard, Button, VectorIcon} from 'react-native-apex-ui';

const styles = {
	container: {
		
	},
	button: {
		margin: 20,
		borderWidth: 1,
		backgroundColor: 'white',
	},
	sideboard: {
		height: 200,
	},
	minimize: {
		alignSelf: 'center',
		marginVertical: 12,
		height: 6,
		width: 40,
		borderRadius: 6,
		backgroundColor: '#a5a5a5',
	},
	sideboardContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
};

class DockBottomBoard extends Component {
	state = {
		open: false,
	};

	toggle = () => {
		this.setState({open: !this.state.open});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		return (
			<View style={styles.container}>
				<Button 
					caption='Appear From Bottom'
					style={styles.button}
					onPress={this.toggle}
				/>
				<Sideboard
					open={this.state.open}
					onRequestClose={this.handleClose}
					style={styles.sideboard}>
					<View style={styles.minimize} />
					<View style={styles.sideboardContent}>
						<Text>docked: bottom</Text>
						<Text>masked: false</Text>
						<Text>gestureEnabled: true</Text>
					</View>
				</Sideboard>
			</View>
		);
	}
}

class DockTopBoard extends Component {
	state = {
		open: false,
	};

	toggle = () => {
		this.setState({open: !this.state.open});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		return (
			<View style={styles.container}>
				<Button 
					caption='Appear From Top'
					style={styles.button}
					onPress={this.toggle}
				/>
				<Sideboard
					docked='top'
					open={this.state.open}
					onRequestClose={this.handleClose}
					style={styles.sideboard}>
					<View style={styles.sideboardContent}>
						<Text>docked: top</Text>
						<Text>masked: false</Text>
						<Text>gestureEnabled: true</Text>
					</View>
					<View style={styles.minimize} />
				</Sideboard>
			</View>
		);
	}
}

class MaskBottomBoard extends Component {
	state = {
		open: false,
	};

	toggle = () => {
		this.setState({open: !this.state.open});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		return (
			<View style={styles.container}>
				<Button 
					caption='Appear From Bottom With Mask'
					style={styles.button}
					onPress={this.toggle}
				/>
				<Sideboard
					masked={true}
					open={this.state.open}
					onRequestClose={this.handleClose}
					style={styles.sideboard}>
					<View style={styles.minimize} />
					<View style={styles.sideboardContent}>
						<Text>docked: bottom</Text>
						<Text>masked: true</Text>
						<Text>gestureEnabled: true</Text>
					</View>
				</Sideboard>
			</View>
		);
	}
}

class MaskTopBoard extends Component {
	state = {
		open: false,
	};

	toggle = () => {
		this.setState({open: !this.state.open});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		return (
			<View style={styles.container}>
				<Button 
					caption='Appear From Top With Mask'
					style={styles.button}
					onPress={this.toggle}
				/>
				<Sideboard
					masked={true}
					docked='top'
					gestureEnabled={true}
					open={this.state.open}
					onRequestClose={this.handleClose}
					style={styles.sideboard}>
					<View style={styles.sideboardContent}>
						<Text>docked: top</Text>
						<Text>masked: true</Text>
						<Text>gestureEnabled: true</Text>
					</View>
					<View style={styles.minimize} />
				</Sideboard>
			</View>
		);
	}
}

exports.title = 'SideboardExample';
exports.description = '侧边弹出面板';
exports.examples = [
	{
		title: 'dock bottom board',
		render: () => <DockBottomBoard />,
	},
	{
		title: 'dock top board',
		render: () => <DockTopBoard />,
	},
	{
		title: 'mask bottom board',
		render: () => <MaskBottomBoard />,
	},
	{
		title: 'mask top board',
		render: () => <MaskTopBoard />,
	},
	
];
