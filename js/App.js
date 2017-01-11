
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

	render() {
		let {uiTheme} = this.state;

		return (
			<UiThemeProvider uiTheme={uiTheme}>
				<View style={styles.container}>
					<StatusBar
						translucent={true}
						{...uiTheme.statusBar}
					/>
					<AppNavigator />
				</View>
			</UiThemeProvider>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

module.exports = App;
