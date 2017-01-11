
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {StyleSheet, View, Text, ListView, TouchableHighlight} from 'react-native';
import {List} from 'react-native-apex-ui';
const ListItem = List.ListItem;

const Examples = [
	{
		title: 'ButtonExample',
		module: require('./examples/ButtonExample'),
	},
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
			<ListItem 
				title={title}
				onPress={handler}
				style={styles.row}
			/>
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
    	height: 50,
    	backgroundColor: 'white',
    }
};

module.exports = ExampleList;
