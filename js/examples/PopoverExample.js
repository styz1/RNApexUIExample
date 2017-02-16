
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, ScrollView, Text, TouchableHighlight} from 'react-native';
import {Button, Popover, LayerContainer} from 'react-native-apex-ui';

class PopoverExample extends Component {
	state = {
		open1: false,
		open2: false,
	};

	handleRequestClose = () => {
		this.setState({
			open1: false,
			open2: false,
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Button 
					ref='default'
					icon={{type: 'ionicon', name: 'ios-arrow-down', color: '#2c8cff'}}
					caption='default animation'
					onPress={() => this.setState({open1: true})}
					style={styles.button}
				/>

				<Button 
					ref='custom'
					icon={{type: 'ionicon', name: 'ios-arrow-down', color: '#2c8cff'}}
					caption='custom animation'
					onPress={() => this.setState({open2: true})}
					style={styles.button}
				/>

				<Popover
					masked={false}
					useLayerForClickAway={false}
					layerStyle={styles.layer}
					open={this.state.open1}
					anchorEl={this.refs.default}
					onRequestClose={this.handleRequestClose}>
					<Option>option 1</Option>
					<Option>option 2</Option>
					<Option>option 3</Option>
					<Option>option 4</Option>
					<Option>option 5</Option>
					<Option>option 6</Option>
				</Popover>

				<Popover
					masked={false}
					useLayerForClickAway={false}
					layerStyle={styles.layer}
					animation={CustomAnimation}
					open={this.state.open2}
					anchorEl={this.refs.custom}
					onRequestClose={this.handleRequestClose}>
					<Option>option 1</Option>
					<Option>option 2</Option>
					<Option>option 3</Option>
					<Option>option 4</Option>
					<Option>option 5</Option>
					<Option>option 6</Option>
				</Popover>

				<LayerContainer ref='layerContainer' />
			</View>
		);
	}
}

class CustomAnimation extends Popover.Animation {
	prepareStyle() {
		let {layout, anim} = this.state;
		return {
			opacity: anim,
			backgroundColor: this.interpolate('white', 'gray'),
			transform: [
				{rotateY: this.interpolate('180deg', '0deg')},
			],
		};
	}
}

function Option({children}) {
	if(typeof children == 'string') {
		children = <Text style={styles.optionText}>{children}</Text>;
	}
	return (
		<TouchableHighlight underlayColor='#ddd' onPress={() => {}}>
			{children}
		</TouchableHighlight>
	);
}

const styles = {
	container: {
        flex: 1,
    },
    layer: {
    	right: undefined,
    	bottom: undefined,
    },
    button: {
    	margin: 20,
    	backgroundColor: 'white',
    	borderWidth: 1,
    },
    optionText: {
    	paddingHorizontal: 40,
    	paddingVertical: 15,
    	fontSize: 16,
    	fontWeight: '600',
		color: '#333',    	
    	textAlign: 'center',
    },
};

module.exports = PopoverExample;
module.exports.title = 'PopoverExample';
module.exports.description = '弹出层，用于承载对话框、下拉框、操作菜单等';
