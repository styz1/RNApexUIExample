
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
				color='tomato'
				style={{margin: 15}}
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
				color='#1c2228'
				style={{margin: 15}}
				onPress={this.doChange}
			/>
		);
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
