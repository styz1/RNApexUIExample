
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text, Platform, Navigator} from 'react-native';
var ExampleList = require('./ExampleList');
var ExampleContainer = require('./ExampleContainer');
var NavBarConfig = require('./NavBarConfig');

class AppNavigator extends Component {
	static contextTypes = {
		uiTheme: PropTypes.object.isRequired,
	};

	renderScene = (route = {}, navigator) => {
		const {spacing} = this.context.uiTheme;
		let scene;

		if(!route || !route.module) {
			scene = <ExampleList navigator={navigator} />;
		} else {
			scene = (
				<ExampleContainer 
					{...route} 
					navigator={navigator} 
				/>
			);
		}

		let sceneStyle = {paddingTop: spacing.navbarHeight};
		return (
			<View style={[styles.scene, sceneStyle]}>
				{scene}
			</View>
		);
	}

	render() {
		const {navBar, palette} = this.context.uiTheme;

		return (
			<Navigator
				style={[styles.container, {backgroundColor: palette.containerColor}]}
				configureScene={route => {
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
					<Navigator.NavigationBar
						routeMapper={NavBarConfig}
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
