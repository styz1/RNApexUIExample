
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Button, getUiTheme} from 'react-native-apex-ui';

var darkTheme = require('../themes/darkTheme');
var tomatoTheme = require('../themes/tomatoTheme');

class TomatoUIExample extends Component {
	static contextTypes = {
		changeuiTheme: PropTypes.func.isRequired,
	};

	doChange = () => {
		this.context.changeuiTheme(getUiTheme(tomatoTheme));
	}

	render() {
		return (
			<Button 
				caption='CHANGE'
				backgroundColor='tomato'
				captionColor='#fff'
				style={styles.button}
				onPress={this.doChange}
			/>
		);
	}
}

class DarkUIExample extends Component {
	static contextTypes = {
		changeuiTheme: PropTypes.func.isRequired,
	};

	doChange = () => {
		this.context.changeuiTheme(getUiTheme(darkTheme));
	}

	render() {
		return (
			<Button 
				caption='CHANGE'
				backgroundColor='#1c2228'
				captionColor='#fff'
				style={styles.button}
				onPress={this.doChange}
			/>
		);
	}
}

const styles = {
	button: {
		margin: 10,
	}
}


exports.title = 'ChangeUIExample';
exports.description = '变换皮肤';
exports.examples = [
	{
		title: 'tomatoTheme',
		render: () => <TomatoUIExample />,
	},
	{
		title: 'darkTheme',
		render: () => <DarkUIExample />,
	},
];
