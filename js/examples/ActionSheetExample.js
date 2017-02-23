
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {ActionSheet, Button, VectorIcon} from 'react-native-apex-ui';

const editIcon = <VectorIcon name='edit' size={18} color='#f60' />;

//属性配置参照Button
const ACTIONS = [
	{caption: '发布', captionColor: '#04BE02'},
	{caption: '编辑', captionColor: '#f60', icon: editIcon},
	{caption: '删除', captionColor: '#fff', backgroundColor: '#f6383a'},
];

class ActionSheetExample extends Component {
	state = {
		shown: false,
	};

	showSheet = () => {
		this.setState({shown: true});
	}

	hideSheet = () => {
		this.setState({shown: false});
	}

	onPressAction = (action, index) => {
		console.log(action, index);
	}

	render() {
		return (
			<View style={styles.container}>
				<Button 
					caption='显示ActionSheet'
					backgroundColor='#fff'
					onPress={this.showSheet}
				/>
				<ActionSheet 
					title='选择操作'
					actions={ACTIONS}
					onPress={this.onPressAction}
					open={this.state.shown}
					onRequestClose={this.hideSheet}
				/>
			</View>
		);
	}
}

const styles = {
	container: {
        margin: 15,
    },
};

exports.title = 'ActionSheetExample';
exports.description = '用于显示按钮集合，由底部弹出';
exports.examples = [
	{
		title: 'ActionSheetExample',
		render: () => <ActionSheetExample />,
	}
];