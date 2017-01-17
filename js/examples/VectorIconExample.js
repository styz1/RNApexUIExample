
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {VectorIcon} from 'react-native-apex-ui';

class FontAwesome extends Component {
	render() {
		return (
			<View style={styles.container}>
				<VectorIcon 
					name='address-book'
					color='#2c8cff'
					style={styles.icon}
				/>
				<VectorIcon 
					name='envelope-open'
					style={styles.icon}
				/>
				<VectorIcon 
					name='handshake-o'
					style={styles.icon}
				/>
				<VectorIcon 
					name='snowflake-o'
					style={styles.icon}
				/>
			</View>
		);
	}
}

class Ionicon extends Component {
	render() {
		return (
			<View style={styles.container}>
				<VectorIcon 
					type='ionicon'
					name='ios-alarm'
					style={[styles.icon, {color: '#ff0077'}]}
				/>
				<VectorIcon 
					type='ionicon'
					name='ios-alert'
					style={styles.icon}
				/>
				<VectorIcon 
					type='ionicon'
					name='ios-aperture'
					style={styles.icon}
				/>
				<VectorIcon 
					type='ionicon'
					name='ios-aperture-outline'
					style={styles.icon}
				/>
			</View>
		);
	}
}

class Material extends Component {
	render() {
		return (
			<View style={styles.container}>
				<VectorIcon 
					type='material'
					name='android'
					color='#93ce33'
					style={styles.icon}
				/>
				<VectorIcon 
					type='material'
					name='apple'
					style={styles.icon}
				/>
				<VectorIcon 
					type='material'
					name='soccer'
					style={styles.icon}
				/>
				<VectorIcon 
					type='material'
					name='alarm'
					style={styles.icon}
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
    icon: {
    	textAlign: 'center',
    	marginRight: 10,
    }
};

exports.title = 'VectorIconExample';
exports.description = '字体图标';
exports.examples = [
	{
		title: 'font-awesome  (http://fontawesome.io/icons/)',
		render: () => <FontAwesome />,
	},
	{
		title: 'ionicon (http://ionicframework.com/docs/v2/ionicons/)',
		render: () => <Ionicon />,
	},
	{
		title: 'material (https://cdn.materialdesignicons.com/1.6.50/)',
		render: () => <Material />,
	},
];
