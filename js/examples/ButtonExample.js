
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Button} from 'react-native-apex-ui';

class CaptionButton extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button 
					caption='Default'
					style={styles.button}
				/>
				<Button 
					caption='Default'
					backgroundColor='#108ee9'
					style={styles.button}
				/>
			</View>
		);
	}
}

class IconButton extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button 
					icon={{name: 'github'}}
					backgroundColor='rgb(255, 64, 129)'
					iconColor='#fff'
					style={styles.iconButton}
				/>
				<Button 
					icon={{name: 'android'}}
					backgroundColor='rgb(164, 198, 57)'
					iconColor='#fff'
					style={styles.iconButton}
				/>
			</View>
		);
	}
}

class IconCaptionButton extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button 
					icon={{name: 'github'}}
					caption='github'
					backgroundColor='rgb(255, 64, 129)'
					iconColor='#fff'
					captionColor='#fff'
					style={styles.button}
				/>
				<Button 
					icon={{name: 'android'}}
					caption='android'
					backgroundColor='rgb(164, 198, 57)'
					iconColor='#fff'
					captionColor='#fff'
					style={styles.button}
				/>
			</View>
		);
	}
}

class LoadingButton extends Component {
	state = {
		loading: true,
	};

	render() {
		return (
			<View style={styles.container}>
				<Button 
					loading={this.state.loading}
					icon={{name: 'github'}}
					caption='github'
					backgroundColor='rgb(255, 64, 129)'
					iconColor='#fff'
					captionColor='#fff'
					style={styles.button}
				/>
				<Button 
					loading={this.state.loading}
					icon={{name: 'android'}}
					caption='android'
					backgroundColor='rgb(164, 198, 57)'
					iconColor='#fff'
					captionColor='#fff'
					style={styles.button}
				/>
			</View>
		);
	}
}

const styles = {
	container: {
		padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    button: {
    	marginRight: 20,
    },
    iconButton: {
    	marginRight: 20,
    	width: 40,
    	height: 40,
    	borderRadius: 20,
    	padding: 0,
    },

};

exports.title = 'ButtonExample';
exports.description = '按钮';
exports.examples = [
	{
		title: 'caption',
		render: () => <CaptionButton />,
	},
	{
		title: 'icon',
		render: () => <IconButton />,
	},
	{
		title: 'caption, icon',
		render: () => <IconCaptionButton />,
	},
	{
		title: 'loading',
		render: () => <LoadingButton />,
	},
];
