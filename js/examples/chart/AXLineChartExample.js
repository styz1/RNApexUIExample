/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';


const {AXLineChart}=require('react-native-apex-charts');

class AXLineChartExample extends Component {

    render() {


        return <View style={{height:300}}><AXLineChart style={{flex:1}}
                                                       onChartValueSelected={(e)=>{console.log("==>x",e)}}
                                                       parameter={{
    xAxisDuration: 1,
    yAxisDuration: 2.5,
    easingOption: 'easeInOutQuart',
    //edgeInsets:{bottom:100,left:10,top:10,right:10}
  }}
                                                       legend={{
    enabled: true,
    font: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    textColor: 'black',
    form: 'line',

  }}
                                                       rightAxis={{
    labelFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    labelPosition:'outside',
    labelTextColor: 'black',
    labelCount: 5,
    drawZeroLineEnabled: true,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
    customAxisMax : 20,
    customAxisMin : -20,
    valueFormatter: {
      minimumIntegerDigits: 1,
      maximumIntegerDigits: 2,
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      negativeSuffix: '%',
      positiveSuffix: '%'
    },
    labelTextAlign: 'right',
  }}
                                                       xAxis={{
    labelPosition:'bottom',
    labelFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,

    },
    labelRotationAngle:60,
    enabled: true,
    drawGridLinesEnabled: false,
    avoidFirstLastClippingEnabled: false,
    drawAxisLineEnabled: true,
  }}
                                                       data={{
    valueFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    xVals: ['19981111','20011111','20031111','20061111','20081111','20011111','20031111','20061111','20081111'],
    dataSets:
      [{
        yVals: [4.2,7,6,9,6,10,5,-6,9],
        label: 'label 1',
        color: '#ff3b30',
      },
      {
        yVals: [8.6,6,7,10,5,6,7,10,-5],
        label: 'label 2',
        lineWidth: 2,
        circleRadius: 3,
        color: '#4cd964',
        circleColor: '#c969e0',
        drawValuesEnabled: true,
        drawCubicEnabled: false,
        drawHorizontalHighlightIndicatorEnabled: false,
        drawVerticalHighlightIndicatorEnabled: false,
        drawCirclesEnabled: true,
        cubicIntensity: 0.2,
      }]
    }
  }/></View>;
    }
}

class AXLineFillChartExample extends Component {

    render() {


        return <View style={{height:300}}><AXLineChart style={{flex:1}}
                                                       parameter={{
    xAxisDuration: 1,
    yAxisDuration: 2.5,
    easingOption: 'easeInOutQuart',
    //edgeInsets:{bottom:100,left:10,top:10,right:10}
  }}
                                                       legend={{
    enabled: true,
    font: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    textColor: 'black',
    form: 'line',

  }}
                                                       rightAxis={{
    labelFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    labelPosition:'outside',
    labelTextColor: 'black',
    labelCount: 5,
    drawZeroLineEnabled: true,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
    customAxisMax : 20,
    customAxisMin :-20,
    valueFormatter: {
      minimumIntegerDigits: 1,
      maximumIntegerDigits: 2,
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      negativeSuffix: '%',
      positiveSuffix: '%'
    },
    labelTextAlign: 'right',
  }}
                                                       xAxis={{
    labelPosition:'bottom',
    labelFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,

    },

    labelRotationAngle:60,
    enabled: true,
    drawGridLinesEnabled: false,
    avoidFirstLastClippingEnabled: false,
    drawAxisLineEnabled: true,
  }}
                                                       data={{
    valueFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    xVals: ['19981111','20011111','20031111','20061111','20081111','20011111','20031111','20061111','20081111'],
    dataSets:
      [
      {
        yVals: [8.6,6,7,10,5,6,7,10,0],
        label: 'label 2',
        lineWidth: 2,
        circleRadius: 3,
        color: '#4cd964',
        circleColor: '#c969e0',
        drawValuesEnabled: true,
        drawCubicEnabled: false,
        drawHorizontalHighlightIndicatorEnabled: false,
        drawVerticalHighlightIndicatorEnabled: false,
        drawCirclesEnabled: true,
        cubicIntensity: 0.2,
        drawFilledEnabled:true,
        fillColor:'#ff000033'
      },
      {
        yVals: [18.6,16,17,10,15,16,17,10,10],
        label: 'label 2',
        lineWidth: 2,
        circleRadius: 3,
        color: '#4cd964',
        circleColor: '#c969e0',
        drawValuesEnabled: true,
        drawCubicEnabled: false,
        drawHorizontalHighlightIndicatorEnabled: false,
        drawVerticalHighlightIndicatorEnabled: false,
        drawCirclesEnabled: true,
        cubicIntensity: 0.2,
        drawFilledEnabled:true,
        fillColor:'#ffff0033'
      }]
    }
  }/></View>;
    }
}


module.exports = {
    component: AXLineChartExample,
    title: 'AXLineChartExample',
    description: '线性图',
    examples: [
        {
            title: 'AXLineChart--基本',
            render: () => <AXLineChartExample />
        },
        {
            title: 'AXLineChart-填充',
            render: () => <AXLineFillChartExample />
        }
    ]
}


