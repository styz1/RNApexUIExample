
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text, SegmentedControlIOS, Platform} from 'react-native';
import {Carousel} from 'react-native-apex-ui';

class CarouselExample extends Component {
	state = {
		selectedIndex: 0,
	};

	onChange = (selectedIndex) => {
		this.setState({selectedIndex});
	}

	renderCard = (index) => {
		return (
			<View key={index} style={styles.card} />
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Carousel
					style={styles.carousel}
					count={3}
					renderCard={this.renderCard}
					selectedIndex={this.state.selectedIndex}
					onSelectedIndexChange={this.onChange}
				/>
			</View>
		);
	}
}

const styles = {
	container: {
        flex: 1,
    },
    carousel: {
    	height: 300,
    },
    card: {
    	flex: 1,
    	margin: 10,
    	backgroundColor: '#2c8cff',
    }
};

module.exports = CarouselExample;
module.exports.title = 'CarouselExample';
module.exports.description = '多页面，带指示点，同时优化可视区域部分渲染';