
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
				<MyButton 
					caption='显示消息'
					onPress={this.createRequestOpenHandler('info', '显示消息')}
				/>

				<MyButton 
					caption='显示成功'
					onPress={this.createRequestOpenHandler('success', '操作成功')}
				/>

				<MyButton 
					caption='显示失败'
					onPress={this.createRequestOpenHandler('error', '操作失败')}
				/>

				<MyButton 
					caption='显示警告'
					onPress={this.createRequestOpenHandler('warning', '警告')}
				/>

				<Toptip 
					text={this.state.message}
					type={this.state.type}
					open={this.state.open}
					onRequestClose={this.handleRequestClose}
					testID='1'
				/>
			</View>
		);
	}
}

class CustomToptipExample extends Component {
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
				icon: TOPTIP_ICONS[type]
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
				<MyButton 
					caption='显示成功'
					onPress={this.createRequestOpenHandler('success', '操作成功')}
				/>

				<MyButton 
					caption='显示失败'
					onPress={this.createRequestOpenHandler('error', '操作失败')}
				/>

				<Toptip 
					style={styles.toptip}
					type={this.state.type}
					open={this.state.open}
					onRequestClose={this.handleRequestClose}
					testID='2'
				>
					<VectorIcon {...this.state.icon} />
					<Text style={styles.message}>{this.state.message}</Text>
				</Toptip>
			</View>
		);
	}
}

function MyButton(props) {
	return (
		<Button 
			{...props}
			style={styles.button}
			caption={<Text style={styles.caption}>{props.caption}</Text>}
		/>
	);
}


const TOPTIP_ICONS = {
	success: {
		name: 'check',
		color: '#fff'
	},
	error: {
		name: 'close',
		color: '#fff'
	}
};

const styles = {
	container: {
		padding: 15,
		backgroundColor: 'white',
	},
	button: {
		marginBottom: 15,
		backgroundColor: '#f5f5f5',
	},
	caption: {
		fontSize: 14,
		paddingVertical: 5,
		fontWeight: '500',
		backgroundColor: 'transparent',
		color: '#108ee9',
	},
	toptip: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	message: {
		fontSize: 24,
		padding: 10,
		fontWeight: 'bold',
		color: '#fff'
	},
};

exports.title = 'ToptipExample';
exports.description = `显示在页面顶部的轻量级提示，一般用来反馈用户的操作结果，比如表单校验失败等。`;
exports.examples = [
	{
		title: 'Using a Component',
		render: () => <ToptipExample />,
	},
	{
		title: 'Custom Toptip',
		render: () => <CustomToptipExample />,
	}
];
