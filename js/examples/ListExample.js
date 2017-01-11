
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text, Image} from 'react-native';
import {List} from 'react-native-apex-ui';
const {ListItem, CheckItem, CheckCircleItem} = List;

const styles = {
	list: {
		marginTop: 0,
		borderWidth: 0,
	},
	plane: {
		width: 65,
		height: 65,
		borderWidth: 1,
		borderColor: '#b2b2b2',
		borderRadius: 10,
		marginRight: 10,
	}
};

class DescriptionList extends Component {
	render() {
		return (
			<List style={styles.list}>
				<ListItem 
					title='标题文字'
					description='说明文字'
					hideChevron={true}
				/>
				<ListItem 
					title='标题文字'
					description='说明文字'
					hideChevron={true}
				/>
			</List>
		);
	}
}

class IconList extends Component {
	render() {
		return (
			<List style={styles.list}>
				<ListItem 
					leftIcon={{name: 'github', color: 'rgb(255, 64, 129)'}}
					title='github'
					description='github.com'
					hideChevron={true}
				/>
				<ListItem 
					leftIcon={{name: 'facebook-square', color: '#39519c'}}
					title='facebook'
					description='facebook'
					hideChevron={true}
				/>
			</List>
		);
	}
}


class ChevronList extends Component {
	render() {
		return (
			<List style={styles.list}>
				<ListItem 
					leftIcon={{name: 'github', size: 40, color: 'rgb(255, 64, 129)'}}
					title='github'
					description='github'
					onPress={() => {}}
				/>
				<ListItem 
					leftIcon={{name: 'android', size: 40, color: 'rgb(164, 198, 57)'}}
					title='android'
					description='android'
					onPress={() => {}}
				/>
			</List>
		);
	}
}


class CustomList extends Component {
	render() {
		return (
			<List style={styles.list}>
				<ListItem 
					leftIcon={
						<Image 
							source={require('./img/plane.png')}
							style={styles.plane}
						/>
					}
					title={
						<View>
							<Text style={{fontSize: 20}}>标题(title)</Text>
							<Text style={{marginTop: 10}}>副标题(subtitle)</Text>
						</View>
					}
					onPress={() => {}}
				/>
			</List>
		);
	}
}

class SingleSelectList extends Component {
	state = {
		checkedValue: null,
	};

	setChecked(checkedValue) {
		if(this.state.checkedValue === checkedValue) {
			checkedValue = null;
		}
		this.setState({checkedValue});
	}

	render() {
		return (
			<List style={styles.list}>
				<CheckItem 
					title='github'
					checked={this.state.checkedValue === 0}
					onPress={() => this.setChecked(0)}
				/>
				<CheckItem 
					title='facebook'
					checked={this.state.checkedValue === 1}
					onPress={() => this.setChecked(1)}
				/>
			</List>
		);
	}
}

class MultiSelectList extends Component {
	state = {
		checkedValues: new Set(),
	};

	setChecked(value) {
		let {checkedValues} = this.state;
		if(checkedValues.has(value)) {
			checkedValues.delete(value);
		}
		else {
			checkedValues.add(value);
		}

		this.setState({checkedValues});
	}

	render() {
		return (
			<List style={styles.list}>
				<CheckCircleItem 
					title='github'
					checked={this.state.checkedValues.has(0)}
					onPress={() => this.setChecked(0)}
				/>
				<CheckCircleItem 
					title='facebook'
					checked={this.state.checkedValues.has(1)}
					onPress={() => this.setChecked(1)}
				/>
			</List>
		);
	}
}

exports.examples = [
	{
		title: '带说明',
		render: () => <DescriptionList />,
	},
	{
		title: '带图标、说明',
		render: () => <IconList />,
	},
	{
		title: '可点击',
		render: () => <ChevronList />,
	},
	{
		title: '自定义图标，标题',
		render: () => <CustomList />,
	},
	{
		title: '单选',
		render: () => <SingleSelectList />,
	},
	{
		title: '复选',
		render: () => <MultiSelectList />,
	},
];
