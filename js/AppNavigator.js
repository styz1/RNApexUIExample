
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text, Platform, Navigator} from 'react-native';
var ExampleList = require('./ExampleList');
var ExampleContainer = require('./ExampleContainer');
var NavigationBar = require('./NavigationBar');

class AppNavigator extends Component {
	static contextTypes = {
		uiTheme: PropTypes.object.isRequired,
	};

	state = {
		navBarHidden: false,
	};

	onWillFocus = (route = {}) => {
		let {navBarHidden} = (route.module || {});
		navBarHidden = navBarHidden === true;
		if(navBarHidden !== this.state.navBarHidden) {
			this.setState({navBarHidden});
		}
	}

	renderScene = (route, navigator) => {
		const {spacing, palette} = this.context.uiTheme;
		let {navBarHidden} = (route.module || {});
		let scene;

		if(!route || !route.module) {
			scene = <ExampleList navigator={navigator} />;
		} else {
			scene = (
				<ExampleContainer 
					module={route.module}
					navigator={navigator} 
				/>
			);
		}

		let sceneStyle = !navBarHidden && {paddingTop: spacing.navbarHeight};
		return (
			<View style={[styles.scene, sceneStyle, {backgroundColor: palette.containerColor}]}>
				{scene}
			</View>
		);
	}

	render() {
		const {navBar, palette} = this.context.uiTheme;

		return (
			<Navigator
				onWillFocus={this.onWillFocus}
				style={styles.container}
				configureScene={(route = {}) => {
					if (Platform.OS === 'android') {
						return Navigator.SceneConfigs.FloatFromBottomAndroid;
					}
					if (route.share || route.settings) {
						return Navigator.SceneConfigs.FloatFromBottom;
					} else {
						return Navigator.SceneConfigs.FloatFromRight;
					}
				}}
				initialRoute={{}}
				renderScene={this.renderScene}
				navigationBar={
					<NavigationBar
						navBarHidden={this.state.navBarHidden}
						style={{backgroundColor: navBar.backgroundColor}}
					/>
				}
			/>
		);
	}
}

const styles = {
	container: {
        flex: 1,
    },
    scene: {
    	flex: 1,
    },
};

module.exports = AppNavigator;
