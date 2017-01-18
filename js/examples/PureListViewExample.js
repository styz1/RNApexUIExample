
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {PureListView} from 'react-native-apex-ui';

function arrayInitialize(length, v) {
	return Array.from({length}, () => v);
}

class PureListViewExample extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	data: arrayInitialize(10, {}),
		// };

		this.state = {
			data: {
				's1': arrayInitialize(10, {}),
				's2': arrayInitialize(10, {}),
				's3': arrayInitialize(10, {}),
			},
		};
	}

	renderSectionHeader = (sectionData: string, sectionID: string) => {
		return (
			<View style={styles.section}>
				<Text style={styles.text}>
					{sectionID}
				</Text>
			</View>
		);
	}

	renderRow = (rowData: string, sectionID: string, rowID: string) => {
		return (
			<View style={styles.row}>
				<Text style={styles.text}>
					{rowID}
				</Text>
			</View>
		);
	}

	render() {
		return (
			<PureListView 
				style={styles.container}
				contentOffset={{y: -20}}
				contentInset={{top: 20, bottom: 20}}
				data={this.state.data}
				renderSectionHeader={this.renderSectionHeader}
				renderRow={this.renderRow}
			/>
		);
	}
}

const styles = {
	container: {
        flex: 1,
    },
	section: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: 6,
		backgroundColor: '#5890ff',
	},
	row: {
		marginHorizontal: 5,
		marginVertical: 3,
		padding: 5,
		backgroundColor: 'white',
		borderRadius: 3,
		paddingVertical: 10,
	},
	text: {
		color: 'white',
		paddingHorizontal: 8,
	},
};

module.exports = PureListViewExample;
module.exports.title = 'PureListViewExample';
module.exports.description = '对ListView封装';
