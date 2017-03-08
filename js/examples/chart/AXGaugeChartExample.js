/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';


const {AXGaugeChart}=require('react-native-apex-charts');

var parameterDef = {
    edgeInsets: {top: 0, left: 10, right: 20, bottom: 10},
    highlightPerTapEnabled: true,
};

var xaxisDef = {
    drawLabelsEnabled: true,
    labelFont: {
        fontSize: 10
    },
    drawAxisLineEnabled: true,
    axisLineColor: 'white',
    axisLineLength: 20,
    axisLineWidth: 1,
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


        return <View style={{height:300}}>
            <AXGaugeChart style={{flex:1}}
                          onChartValueSelected={()=>{console.log("==>select")}}
                          parameter={{...parameterDef}}
                          xAxis={{...xaxisDef}}
                          data={{
                              valueFont: {
                                fontFamily: 'HelveticaNeue-Light',
                                fontSize: 30,
                              },

                              valueTextColor: 'red',

                              labelTextColor:'blue',
                              labelFont:{
                                  fontSize:20
                              },

                              dataSet:{
                                yVal: 40,
                                color: 'red',
                                drawValuesEnabled:true,
                                highlightColor:'blue',
                                highlightLineWidth:2,
                                label:'完成率',
                                valueFormatter:{
                                    negativeSuffix:'%',
                                    positiveSuffix:'%',
                                }
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
