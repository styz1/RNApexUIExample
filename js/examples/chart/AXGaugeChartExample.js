/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';


const {AXGaugeChart}=require('react-native-apex-charts');

var parameterDef = {
    // edgeInsets: {top: 0, left: 0, right: 0, bottom: 0},
    holeRadiusPercent:0.58,
    maxAngle:360,
    drawHoleEnabled:true,
    // descriptionText:'服务覆盖率',
    centerText: '30%',
    drawCenterTextEnabled: true,
};

var xaxisDef = {
    // drawLabelsEnabled: true,
    // labelFont: {
    //     fontSize: 10
    // },
    // drawAxisLineEnabled: true,
    // axisLineColor: 'white',
    // axisLineLength: 20,
    // axisLineWidth: 1,
    labelCount: 11,
    axisMinimum: 0,
    axisMaximum: 100,
    rotationAngle: 180,
    maxAngle: 180,
    gaugeColor: '#ff8257',
    gaugeHoleRedius: 90,

}

class AXGaugeChartExample extends Component {

    render() {


        return <View style={{height:210,width:200}}>
            <AXGaugeChart style={{height:120,width:200}}
                          onChartValueSelected={()=>{console.log("==>select")}}
                          parameter={{...parameterDef}}
                          // xAxis={{...xaxisDef}}
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
