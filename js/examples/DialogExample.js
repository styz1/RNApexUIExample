
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
			<View style={styles.container}>
				
				<Button 
					caption='Dialog'
					style={styles.showButton}
					captionStyle={styles.showText}
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
						caption='确认'
						style={styles.okButton}
						captionStyle={styles.okText}
						onPress={this.handleClose}
					/>
				</Dialog>
			</View>
		);
	}
}

const styles = {
	container: {
        flex: 1,
        alignItems: 'center',
    },
    showButton: {
    	marginTop: 64,
    	padding: 0,
    	paddingHorizontal: 15,
    	borderRadius: 3,
    	backgroundColor: 'white',
    },
    showText: {
    	fontSize: 18,
    	lineHeight: 46,
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

module.exports = DialogExample;
module.exports.title = 'DialogExample';
module.exports.description = '若系统的alert无法满足需求，则可以自定义实现与alert形式相似的dialog';
