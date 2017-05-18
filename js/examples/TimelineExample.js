
'use strict';

import React, {Component, PropTypes, createElement} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Timeline, VectorIcon} from 'react-native-apex-ui';
const Item = Timeline.Item;

class TimelineExample extends Component {
	render() {
		return (
			<Timeline style={styles.timeline}>
				<Item dot={<VectorIcon color='#f04134' name='clock-o' />}>
					<View>
						<Text style={styles.h2}>自定义时间轴点</Text>
						<Text style={styles.p}>可以设置为图标或其他自定义元素。</Text>
					</View>
				</Item>
				<Item color='#00a854'>
					<Text style={styles.p}>时间轴的每一个节点<Text style={{color: '#00a854'}}>(绿色)</Text>。</Text>
				</Item>
				<Item color='#f04134'>
					<Text style={styles.p}>时间轴的每一个节点<Text style={{color: '#f04134'}}>(红色)</Text>。</Text>
				</Item>

				<Item>
					<Text style={styles.p}>时间轴的最后一个节点<Text style={{color: '#108ee9'}}>(默认)</Text>。</Text>
				</Item>
			</Timeline>
		);
	}
}

const styles = {
	timeline: {
		padding: 15,
		backgroundColor: 'white',
	},
	h2: {
		fontSize: 16,
		lineHeight: 24,
		marginBottom: 10,
		fontWeight: '800',
	},
	p: {
		fontSize: 13,
		marginBottom: 20,
		color: '#777',
	}
};

exports.title = 'TimelineExample';
exports.description = '垂直展示时间流信息';
exports.examples = [{
	title: 'Timeline',
	render: () => <TimelineExample />
}];