
'use strict';

import React, {Component, createElement} from 'react';
import ReactNative, {View, Text} from 'react-native';

module.exports = function createExamples(component, passProps) {
	const array = Array.isArray(passProps) ? passProps : [passProps];
	return array.map(props => {
		const {title, description, ...other} = props;
		return {
			title,
			description,
			render: () => createElement(component, other)
		}
	});
};