/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';


const {AXGaugeChart}=require('react-native-apex-charts');

var parameterDef = {
    holeRadiusPercent:0.58,
    maxAngle:180,
    centerText: '30%',
    drawCenterTextEnabled: true,
};

class AXGaugeChartExample extends Component {

    render() {


        return <View style={{height:160,width:320}}>
          <AXGaugeChart style={{height:160,width:320}}
                        parameter={{holeRadiusPercent:0.58,
                        maxAngle:180,
                        centerText: '30%',
                        drawCenterTextEnabled: true,}}
                        data={{
                            dataSet:{
                              yVals: [40],
                              colors: ['red'],
                              currentPercentValue:0.3,
                              needleColor:'red',
                              label:'完成率',
                            }
                         }}
          />

        </View>;
    }
}


module.exports = {
    title: 'AXGaugeChartExample',
    description: '仪表盘',
    examples: [{
        title: 'AXGaugeChart',
        render: () => <AXGaugeChartExample />
    }]
}
