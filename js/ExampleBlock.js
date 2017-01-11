
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {StyleSheet, View, Text} from 'react-native';

class ExampleBlock extends Component {
	static propTypes = {
		title: PropTypes.string,
		description: PropTypes.string,
	};

	render() {
		var description;
		if (this.props.description) {
			description =
				<Text style={styles.descriptionText}>
					{this.props.description}
				</Text>;
		}

		return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.titleText}>
					{this.props.title}
				</Text>
				{description}
			</View>
			<View style={styles.children}>
				{this.props.children}
			</View>
		</View>
		);
	}
}

const styles = {
	container: {
		borderRadius: 3,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#d6d7da',
		backgroundColor: 'white',
		margin: 10,
		marginVertical: 5,
		overflow: 'hidden',
	},
	titleContainer: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderTopLeftRadius: 3,
		borderTopRightRadius: 2.5,
		borderBottomColor: '#d6d7da',
		backgroundColor: '#f6f7f8',
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	titleText: {
		fontSize: 14,
		lineHeight: 24,
		fontWeight: '500',
	},
	descriptionText: {
		fontSize: 14,
	},
	children: {
	}
};

module.exports = ExampleBlock;
