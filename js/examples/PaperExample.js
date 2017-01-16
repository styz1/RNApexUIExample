
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Paper} from 'react-native-apex-ui';

class PaperExample extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Paper style={styles.paper} zDepth={1}>
					<Text>zDepth: 1</Text>
				</Paper>
				<Paper style={styles.paper} zDepth={2}>
					<Text>zDepth: 2</Text>
				</Paper>
				<Paper style={styles.paper} zDepth={3}>
					<Text>zDepth: 3</Text>
				</Paper>
				<Paper style={styles.paper} zDepth={4}>
					<Text>zDepth: 4</Text>
				</Paper>
				<Paper style={styles.paper} zDepth={5}>
					<Text>zDepth: 5</Text>
				</Paper>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: 'white',
	},
	paper: {
		height: 100,
		width: 100,
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center',
	}
};

module.exports = PaperExample;
module.exports.title = 'PaperExample';
module.exports.description = '阴影视图';
