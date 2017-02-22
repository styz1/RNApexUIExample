
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text, TextInput} from 'react-native';
import {Dialog, Button} from 'react-native-apex-ui';

class DialogExample extends Component {
	state = {
		open: false,
	};

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		return (
			<View>
				<Button 
					caption='BUTTON'
					style={styles.showButton}
					onPress={this.handleOpen}
				/>

				<Dialog
					title='自定义标题'
					open={this.state.open}
					onRequestClose={this.handleClose}
					style={styles.dialog}
				>
					<Text style={styles.message}>
						自定义的消息内容.
					</Text>
					<Button 
						caption={<Text style={styles.okText}>确认</Text>}
						style={styles.okButton}
						onPress={this.handleClose}
						activeOpacity={.2}
					/>
				</Dialog>
			</View>
		);
	}
}

class ScrollToKeyboardExample extends Component {
	state = {
		open: false,
	};

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		return (
			<View>
				<Button 
					caption='BUTTON'
					style={styles.showButton}
					onPress={this.handleOpen}
				/>

				<Dialog
					title='标题'
					scrollToKeyboardOnFocus={true}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<Text style={styles.description}>
						输入框在获取焦点时，会自动滚动到键盘之上。
					</Text>
					<TextInput 
						placeholder='Text input' 
						style={styles.input} 
						underlineColorAndroid='transparent'
					/>
				</Dialog>
			</View>
		);
	}
}

const styles = {
    showButton: {
    	margin: 10,
    	backgroundColor: 'white',
    	borderWidth: 1,
    },
    dialog: {
    	// height: 200
    },
    message: {
    	fontSize: 15,
    	lineHeight: 20,
    	paddingHorizontal: 24,
    	paddingBottom: 12,
    },
    okButton: {
    	borderTopWidth: 1,
    	borderColor: '#d5d5d6',
    	height: 48,
    },
    okText: {
    	fontSize: 18,
    	color: '#2c8cff',
    },
    description: {
    	margin: 20,
    	fontSize: 16,
    	color: 'rgba(0, 0, 0, 0.6)',
    },
    input: {
    	marginHorizontal: 10,
    	marginVertical: 50,
    	paddingHorizontal: 7,
    	paddingVertical: 4,
    	borderWidth: 1,
    	borderRadius: 4,
    	height: 50,
    	borderColor: '#49a9ee',
    	shadowOffset: {width: 0, height: 0},
    	shadowRadius: 2,
    	shadowColor: 'rgba(16,142,233,.2)',
    	shadowOpacity: 1,
    	color: 'rgba(0,0,0,.65)',
    	backgroundColor: '#fff',
    }
};

exports.title = 'DialogExample';
exports.description = '若系统的alert无法满足需求，则可以自定义实现与alert形式相似的dialog';
exports.examples = [
	{
		title: 'Open a dialog',
		render: () => <DialogExample />,
	},
	{
		title: 'Scroll dialog to keyboard',
		render: () => <ScrollToKeyboardExample />,
	},
];

