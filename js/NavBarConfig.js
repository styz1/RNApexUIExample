
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {VectorIcon} from 'react-native-apex-ui';

var SCREEN_WIDTH = Dimensions.get('window').width;

const styles = {
	navBarTitleText: {
		color: '#fff',
		fontWeight: '600',
		fontSize: 17,
		lineHeight: 44,
		textAlign: 'center',
		width: Math.floor(SCREEN_WIDTH / 4 * 2),
	},
	navBarLeftButton: {
		paddingLeft: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	navBarButtonText: {
		color: '#fff',
		fontSize: 16,
		lineHeight: 44,
		width: Math.floor(SCREEN_WIDTH / 4),
	},
	backIcon: {
		fontSize: 36,
		color: 'white',
		marginRight: 5,
	},
};

var NavBarConfig = {
	LeftButton: function(route, navigator, index, navState) {
		if (index === 0) {
			return null;
		}
		var previousRoute = navState.routeStack[index - 1];
		return (
			<TouchableOpacity
				onPress={() => navigator.pop()}
				style={styles.navBarLeftButton}>
				<VectorIcon
					type='ionicon'
					name="ios-arrow-back"
					style={styles.backIcon}
				/>
				<Text style={styles.navBarButtonText} numberOfLines={1}>
					{extractRouteTitle(previousRoute) || '返回'}
				</Text>
			</TouchableOpacity>
		);
	},

	RightButton: function(route, navigator, index, navState) {
		return null;
	},

	Title: function(route, navigator, index, navState) {
		return (
			<Text style={styles.navBarTitleText}>
				{extractRouteTitle(route)}
			</Text>
		);
	},
};

function extractRouteTitle(route = {}) {
	return route.title || (route.module && route.module.title) || 'ReactNativeApexUI'
}

module.exports = NavBarConfig;
