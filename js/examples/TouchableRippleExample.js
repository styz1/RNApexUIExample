
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {TouchableRipple, Paper, RippleButton} from 'react-native-apex-ui';

class BasicTouchableRippleExample extends Component {
	render() {
		return (
			<Paper style={styles.container}>
				<TouchableRipple style={styles.button}>
					<Text style={styles.text}>
						BUTTON
					</Text>
				</TouchableRipple>
			</Paper>
		);
	}
}

class ColorTouchableRippleExample extends Component {
	render() {
		return (
			<Paper style={styles.container}>
				<TouchableRipple 
					rippleColor='#ff0077'
					rippleOpacity={1}
					style={styles.button}>
					<Text style={styles.text}>
						BUTTON
					</Text>
				</TouchableRipple>
			</Paper>
		);
	}
}

class RippleButtonExample extends Component {
	render() {
		return (
			<Paper style={styles.container}>
				<RippleButton 
					caption='BUTTON'
					icon={{name: 'android'}}
					color='#93ce33'
				/>
			</Paper>
		);
	}
}

const styles = {
	container: {
		margin: 15,
    },
    button: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
    },
    icon: {
    	backgroundColor: 'transparent',
    	color: '#93ce33',
    	marginRight: 6,
    },
    text: {
    	backgroundColor: 'transparent',
    	fontWeight: '500',
    },
};

exports.title = 'TouchableRippleExample';
exports.description = '触摸能产生波纹效果的按钮';
exports.examples = [
	{
		title: 'Default',
		render: () => <BasicTouchableRippleExample />,
	},
	{
		title: 'Custom Ripple Color',
		render: () => <ColorTouchableRippleExample />,
	},
	{
		title: 'Ripple Button',
		render: () => <RippleButtonExample />,
	}
];
