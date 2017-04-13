
'use strict';

import React, {Component, PropTypes, createElement} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Collapse, VectorIcon} from 'react-native-apex-ui';
var createExamples = require('./createExamples');

class Panel extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.expanded !== nextProps.expanded; 
	}

	render() {
		const {
			rowID,
			rowData,
			expanded,
			...other,
		} = this.props;

		const headerText = (
			<Text style={[styles.headerText, expanded && styles.expandedHeaderText]}>
				This is panel header {rowID}
			</Text>
		);

		return (
			<Collapse.Panel 
				{...other}
				expanded={expanded}
				style={styles.panel}
				headerContainerStyle={[styles.headerContainer, expanded && styles.expandedHeaderContianer]}
				header={headerText}
			>
				<Text style={styles.contentText}>{rowData}</Text>
			</Collapse.Panel>
		);
	}
}

function createPanel(props) {
	return (rowData, sectionID, rowID) => 
		<Panel {...props} rowData={rowData} rowID={rowID} />
}

const styles = {
	panel: {
		marginVertical: 3,
		marginHorizontal: 5,
		borderRadius: 3,
		borderWidth: 1,
		borderColor: '#c5c5c5',
	},
	headerContainer: {
		padding: 12,
		backgroundColor: '#fff',
	},
	expandedHeaderContianer: {
		backgroundColor: '#007fff',
	},
	headerText: {
		fontSize: 15,
	    lineHeight: 21,
	    color: '#002350',
	    flex: 1,
	},
	expandedHeaderText: {
		color: '#fff'
	},
	contentText: {
		paddingVertical: 15,
		paddingHorizontal: 30,
		backgroundColor: 'white',
	},
	arrowIcon: {
		width: 30,
		fontSize: 18,
		textAlign: 'center',
	}
};

const text = `可以同时展开多个面板，手风琴\`accordion=true\`是一种特殊的折叠面板，只允许单个内容区域展开。`;
const data = [text, text, text, text, text];

const CustomArrowIcon = ({expanded}) => <VectorIcon 
	name='star-o' 
	color={expanded ? 'red' : 'yellow'} 
	style={styles.arrowIcon} 
/>

exports.title = 'CollapseExample';
exports.description = '可以折叠/展开的内容区域';
exports.examples = createExamples(Collapse, [
{
	title: '手风琴',
	accordion: true,
	data,
	renderPanel: createPanel(),
},
{
	title: '自定义图标',
	accordion: false,
	data,
	renderPanel: createPanel({
		arrowIcon: <CustomArrowIcon />,
	}),
}
]);