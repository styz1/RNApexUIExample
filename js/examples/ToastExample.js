
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {RippleButton, Paper, Toast, VectorIcon} from 'react-native-apex-ui';

class SimpleToastExample extends Component {
	state = {
		open: false,
	};

	handleTouchTap = () => {
		this.setState({
			open: true,
		});
	}

	handleRequestClose = () => {
		this.setState({
			open: false,
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Paper>
					<RippleButton 
						caption='BUTTON'
						backgroundColor='#ff0077'
						onPress={this.handleTouchTap}
					/>
				</Paper>
				<Toast 
					open={this.state.open}
					message='Hello toast!'
					onRequestClose={this.handleRequestClose}
				/>
			</View>
		);
	}
}

class CustomToastExample extends Component {
	state = {
		open: false,
	};

	handleTouchTap = () => {
		this.setState({
			open: true,
		});
	}

	handleRequestClose = () => {
		this.setState({
			open: false,
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Paper>
					<RippleButton 
						caption='BUTTON'
						backgroundColor='#ff0077'
						onPress={this.handleTouchTap}
					/>
				</Paper>
				<Toast 
					open={this.state.open}
					onRequestClose={this.handleRequestClose}
				>
					<VectorIcon 
						type='ionicon'
						name='ios-checkmark'
						style={styles.icon}
					/>
					<Text style={styles.message}>
						This is a custom toast.
					</Text>
				</Toast>
			</View>
		);
	}
}

const styles = {
	container: {
		padding: 10,
	},
	icon: {
		color: '#00aaff',
    	textAlign: 'center',
		fontSize: 150,
		height: 80,
		paddingTop: -40,
	},
	message: {
		color: 'white',
    	textAlign: 'center',
    	fontSize: 16,
    	lineHeight: 28,
	},
};

exports.title = 'ToastExample';
exports.description = `Toast 用于临时显示某些轻量级信息，并且会在数秒后自动消失。`;
exports.examples = [
	{
		title: 'The Basics',
		render: () => <SimpleToastExample />,
	},
	{
		title: 'Creating a Custom Toast View',
		render: () => <CustomToastExample />,
	}
];
