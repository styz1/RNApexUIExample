
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Tag, VectorIcon} from 'react-native-apex-ui';

class TagExample extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Tag 
					style={styles.tag} 
					closable={false}>
					Tag1
				</Tag>
				<Tag 
					style={styles.tag}>
					Tag2
				</Tag>

				<Tag 
					style={styles.tag} 
					textColor='#ffbf00' 
					backgroundColor='#fff3cf'>
					yellow
				</Tag>
				<Tag 
					style={styles.tag} 
					textColor='#00A854' 
					backgroundColor='#cfefdf'>
					green
				</Tag>

				<Tag 
					style={styles.tag} 
					textColor='#fff' 
					backgroundColor='#f5317f'>
					pink-white
				</Tag>

				<Tag 
					style={styles.tag} 
					textColor='#fff' 
					backgroundColor='#2db7f5'>
					<VectorIcon 
						name='tags'
						color='#fff'
						size={20}
						style={styles.tagIcon}
					/>
				</Tag>

				<Tag 
					style={[styles.tag, styles.bellTag]} 
					textColor='#fff' 
					backgroundColor='#fffaf3'>
					<VectorIcon 
						name='bell-o'
						color='#fb6900'
						size={18}
						style={styles.tagIcon}
					/>
					<Text style={{color: '#fb6900'}}>
						您有2张待领取的优惠券
					</Text>
				</Tag>

			</View>
		);
	}
}

const styles = {
	container: {
		padding: 10,
		backgroundColor: '#fff',
	},
	tag: {
		marginRight: 8,
		marginBottom: 8,
	},
	tagIcon: {
		paddingHorizontal: 10,
	},
	bellTag: {
		borderWidth: 1,
		borderColor: '#f3e2c4',
	}
};

exports.title = 'TagExample';
exports.description = `进行标记和分类的小标签`;
exports.examples = [
	{
		title: 'Tag example',
		render: () => <TagExample />,
	},
];
