/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';

const {AXRadarChart} = require('react-native-apex-charts');



class AXRadarChartDefaultExample extends Component {

    render() {


        return <View style={{height: 300}}>
            <AXRadarChart style={{flex: 1}}
                          legend={{
                              enabled:false,
                          }}
                        data={{
                            xVals: ['Java', 'OC', 'JS', 'C++', 'PHP'],
                            dataSets: [{
                                yVals: [40, 10, 20, 20, 10],
                                color: 'red',
                            }]
                        }}/>

        </View>;
    }
}
module.exports = {
    title: 'AXRadarChartExample',
    description: '雷达图',
    examples: [
        {
            title: 'AXRadarChart-default',
            render: () => <AXRadarChartDefaultExample />
        },
    ]
}
