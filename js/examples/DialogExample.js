
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
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
    }
};

exports.title = 'DialogExample';
exports.description = '若系统的alert无法满足需求，则可以自定义实现与alert形式相似的dialog';
exports.examples = [
	{
		title: 'Open a dialog',
		render: () => <DialogExample />,
	},
];

