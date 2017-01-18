
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text, SegmentedControlIOS, Platform} from 'react-native';
import {ViewPager} from 'react-native-apex-ui';

class ViewPagerExample extends Component {
	state = {
		selectedIndex: 0,
	};

	onChange = (selectedIndex) => {
		this.setState({selectedIndex});
	}

	render() {
		if(Platform.OS === 'ios') {
			var segments = 
				<SegmentedControlIOS 
					style={styles.segments}
					values={['One', 'Two', 'Three']}
					selectedIndex={this.state.selectedIndex}
					onChange={(event) => {
						this.onChange(event.nativeEvent.selectedSegmentIndex);
					}}
				/>
		}

		return (
			<View style={styles.container}>
				{segments}
				<ViewPager
					selectedIndex={this.state.selectedIndex}
					onSelectedIndexChange={this.onChange}
				>
					<View style={[styles.page, {backgroundColor: '#00d8ff'}]} />
					<View style={[styles.page, {backgroundColor: 'yellow'}]} />
					<View style={[styles.page, {backgroundColor: 'deeppink'}]} />
				</ViewPager>
			</View>
		);
	}
}

const styles = {
	container: {
        flex: 1,
    },
    segments: {
    	margin: 15,
    },
    page: {
    	flex: 1,
    },
};

module.exports = ViewPagerExample;
module.exports.title = 'ViewPagerExample';
module.exports.description = '多页面，子视图全部渲染';