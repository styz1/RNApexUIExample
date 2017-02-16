
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Button, Tooltip} from 'react-native-apex-ui';

const text = 'long long long prompt text.';

function createToolTipExample(placement) {
	return class TooltipExample extends Component {
		state = {
			tooltipShown: false,
		};

		showTooltip = () => {
			this.setState({tooltipShown: true});
		}

		hideTooltip = () => {
			this.setState({tooltipShown: false});
		}

		render() {
			return (
				<View style={styles.container}>
					<Button 
						ref='button' 
						caption={placement}
						onPress={this.showTooltip}
						activeOpacity={0.2}
						style={styles.button}
						captionColor='#108ee9'
					/>
					<Tooltip 
						title={text} 
						anchorEl={this.refs.button}
						placement={placement}
						open={this.state.tooltipShown}
						onRequestClose={this.hideTooltip}
					/>
				</View>
			);
		}
	}
}

const styles = {
	container: {
		padding: 15,
		backgroundColor: 'white',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#f5f5f5',
	},
};

exports.title = 'TooltipExample';
exports.description = `简单的文字提示气泡框。`;

const placementValues = [
	'top-center',
	'top-left',
	'top-right',
	'bottom-center',
	'bottom-left',
	'bottom-right',
];

exports.examples = placementValues.map(placement => ({
	title: placement,
	render: () => React.createElement(createToolTipExample(placement)),
}));
