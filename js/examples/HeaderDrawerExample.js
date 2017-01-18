
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {HeaderDrawer, Paper, VectorIcon, Button} from 'react-native-apex-ui';

class HeaderDrawerExample extends Component {
	state = {
		open: false,
	};

	toggle = () => {
		this.setState({open: !this.state.open});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	renderHeader() {
		return (
			<Paper style={styles.header}>
				<Button 
					onPress={this.toggle}
					style={styles.headerBtn}
					caption={
						<View style={styles.headerBtnContent}>
							<Text>上证指数</Text>
							{
								this.state.open ?
								<VectorIcon name='caret-up' />
								:
								<VectorIcon name='caret-down' />
							}
						</View>
					}
				/>
			</Paper>
		);
	}

	renderDrawer() {
		return (
			<View style={styles.drawer} />
		);
	}

	render() {
		const header = this.renderHeader();
		const drawer = this.renderDrawer();

		return (
			<HeaderDrawer
				header={header}
				drawer={drawer}
				style={styles.container}
				open={this.state.open}
				onRequestClose={this.handleClose}
			>
				<View style={styles.content}>

				</View>
			</HeaderDrawer>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
    content: {
    	flex: 1,
    },
    header: {
    	height: 70,
    	justifyContent: 'center',
    	alignItems: 'center',
    	backgroundColor: 'rgba(255,255,255,.8)',
    },
    headerBtn: {
    	borderWidth: 1,
    },
    headerBtnContent: {
    	justifyContent: 'center',
    	alignItems: 'center',
    },
    drawer: {
    	height: 250,
    	backgroundColor: '#3b3738',
    }
};

module.exports = HeaderDrawerExample;
module.exports.title = 'HeaderDrawerExample';
module.exports.description = '从头部下拉一个抽屉效果';

