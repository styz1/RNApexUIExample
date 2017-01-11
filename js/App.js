
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {StyleSheet, View, Text, StatusBar} from 'react-native';
import {UiThemeProvider, getUiTheme} from 'react-native-apex-ui';
var AppNavigator = require('./AppNavigator');

var darkTheme = require('./themes/darkTheme');

class App extends Component {
	state = {
		uiTheme: getUiTheme(darkTheme),
	};

	static childContextTypes = {
		changeuiTheme: PropTypes.func.isRequired,
	};

	getChildContext() {
		return {
			changeuiTheme: this.changeuiTheme,
		};
	}

	changeuiTheme = (uiTheme) => {
		this.setState({
			uiTheme: uiTheme,
		});
	}

	render() {
		let {uiTheme} = this.state;

		return (
			<UiThemeProvider uiTheme={uiTheme}>
				<StatusBar
					translucent={true}
					{...uiTheme.statusBar}
				/>
				<AppNavigator />
			</UiThemeProvider>
		);
	}
}

module.exports = App;
