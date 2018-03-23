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
                          parameter={{
                              webLineWidth:0,
                              webFillColors:['white','#eeeeee']
                          }}
                          legend={{
                              enabled:false,
                          }}
                          xAxis={{
                              labelTextColor:'black',
                          }}
                          yAxis={{
                              enabled:false,
                          }}

                        data={{
                            xVals: ['资管', '服务', '股票', '功能'],
                            dataSets: [{
                                yVals: [40, 60, 20, 35],
                                fillGradientColors:["#67ABE0AA","#ffffff00"]
                            },{
                                yVals: [25, 50, 40, 60],
                                fillGradientColors:['red', '#ffffff00']
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
