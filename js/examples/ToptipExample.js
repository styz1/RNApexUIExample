
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Button, Toptip, VectorIcon} from 'react-native-apex-ui';

function sleep(ms) {
	return new Promise( (resolve, reject) => setTimeout(resolve, ms) )
}

class ToptipExample extends Component {
	state = {
		open: false,
		type: null,
		message: null,
		icon: null,
	};

	createRequestOpenHandler = (type, message) => {
		return async () => {
			if(this.state.open) {
				this.setState({
					open: false,
				});
				await sleep(150);
			}
			this.setState({
				open: true,
				type,
				message,
			});
		}
	}

	handleRequestClose = () => {
		this.setState({
			open: false,
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Button 
					caption='显示消息'
					style={styles.button}
					onPress={this.createRequestOpenHandler('info', '显示消息')}
				/>

				<Button 
					caption='显示成功'
					style={styles.button}
					onPress={this.createRequestOpenHandler('success', '操作成功')}
				/>

				<Button 
					caption='显示失败'
					style={styles.button}
					onPress={this.createRequestOpenHandler('error', '操作失败')}
				/>

				<Button 
					caption='显示警告'
					style={styles.button}
					onPress={this.createRequestOpenHandler('warning', '警告')}
				/>

				<Toptip 
					style={styles.toptip}
					text={this.state.message}
					type={this.state.type}
					open={this.state.open}
					onRequestClose={this.handleRequestClose}
				/>
			</View>
		);
	}
}

const styles = {
	container: {
		padding: 15,
	},
	button: {
		padding: 13,
		marginBottom: 15,
		borderWidth: 1,
		backgroundColor: 'white',
	},
};

exports.title = 'ToptipExample';
exports.description = `显示在页面顶部的轻量级提示，一般用来反馈用户的操作结果，比如表单校验失败等。`;
exports.examples = [
	{
		title: 'Using a Component',
		render: () => <ToptipExample />,
	}
];
