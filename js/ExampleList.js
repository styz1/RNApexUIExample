
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {StyleSheet, View, Text, ListView, TouchableHighlight} from 'react-native';
import {List} from 'react-native-apex-ui';

const Examples = [
	{
		title: 'ListExample',
		module: require('./examples/ListExample'),
	},
];

const dataSource = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2,
	sectionHeaderHasChanged: (h1, h2) => h1 !== h2,
}).cloneWithRows(Examples);

class ExampleList extends Component {
	static title = 'ReactNativeApexUI';

	static contextTypes = {
		uiTheme: PropTypes.object.isRequired,
	};

	_handleRowPress = (example) => {
		this.props.navigator.push(example);
	}

	_renderExampleRow = (example: {title: string, module: Object}) => {
		return this._renderRow(
			example.title,
			example.description,
			() => this._handleRowPress(example)
		);
	}

	_renderRow = (title, description, handler) => {
		return (
			<View>
				<TouchableHighlight onPress={handler}>
					<View style={styles.row}>
						<Text style={styles.rowTitleText}>
							{title}
						</Text>
						<Text style={styles.rowDescriptionText}>
							{description}
						</Text>
					</View>
				</TouchableHighlight>
				<View style={styles.separator} />
			</View>
		);
	}

	render() {
		return (
			<ListView
				style={styles.list}
				dataSource={dataSource}
				renderRow={this._renderExampleRow}
			/>
		);
	}
}

const styles = {
	list: {
		paddingTop: 20,
        flex: 1,
    },
	row: {
		justifyContent: 'center',
		paddingHorizontal: 15,
		paddingVertical: 8,
		backgroundColor: 'white',
	},
	separator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#bbbbbb',
		marginLeft: 15,
	},
	rowTitleText: {
		fontSize: 17,
		fontWeight: '500',
	},
	rowDescriptionText: {
		fontSize: 15,
		color: '#888888',
		lineHeight: 20,
	},
};

module.exports = ExampleList;
