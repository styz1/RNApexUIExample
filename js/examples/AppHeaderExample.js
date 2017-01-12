
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {AppHeader} from 'react-native-apex-ui';

class AppHeaderExample extends Component {
	static title = 'AppHeaderExample';
	static description = '自定义导航栏';
	static navBarHidden = true;

	render() {
		return (
			<View style={styles.container}>
				<AppHeader 
					leftItem={{
						icon: {name: 'chevron-left', size: 28, color: 'red'},
						caption: <Text style={styles.backText}>返回</Text>,
						onPress: () => this.props.navigator.pop(),
					}}
					title='我是自定义的导航栏'
					rightItem={{
						icon: {name: 'search', color: 'red'}
					}}
				/>
			</View>
		);
	}
}

const styles = {
	container: {
        flex: 1,
    },
    backText: {
    	fontSize: 17,
    	color: 'red'
    }
};

module.exports = AppHeaderExample;
