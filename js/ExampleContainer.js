
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text, ScrollView} from 'react-native';
var ExampleBlock = require('./ExampleBlock');

class ExampleContainer extends Component {
	renderExample(example, i) {
		return (
			<ExampleBlock
				key={i}
				{...example}>
				{example.render()}
			</ExampleBlock>
		);
	}

	render() {
		const module = this.props.module;
		if(!module) {
			return null;
		}

		if (!module.examples) {
      		return React.createElement(module);
		}

		return (
			<ScrollView 
				style={styles.wrapper}
				contentContainerStyle={styles.content}
			>
				{module.examples.map(this.renderExample)}
			</ScrollView>
		);
	}
}


const styles = {
	wrapper: {
		flex: 1,
		paddingTop: 20,
	},
	content: {
		paddingBottom: 50,
	}
};

module.exports = ExampleContainer;
