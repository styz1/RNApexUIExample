/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';


const {AXLineChart} = require('react-native-apex-charts');


const parameter = {
    // xAxisDuration: 1,
    // yAxisDuration: 2.5,
    // easingOption: 'easeInOutQuart',
    defaultHighlight: {
        x: 1,
        dataSetIndex: 1,
    },
    highlightPerTapEnabled: true,
    edgeInsets: {bottom: 0, left: 15, top: 0, right: 15},
    scaleXEnabled: true,
    scaleYEnabled: false,
}

const legend = {
    enabled: true,
    font: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    textColor: 'black',
    form: 'line',
    verticalAlignment: 'bottom',

};


const leftAxis = {
    title: '(y轴)',
    // titlePosition:'top',
    // xTitleOffset:-10,
    labelFont: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    labelPosition: 'outside',
    labelTextColor: 'black',
    labelCount: 6,
    drawZeroLineEnabled: true,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: true,
    gridLineColor: 'red',
    drawAxisLineEnabled: true,
    drawGridDashEnabled: true,
    customAxisMax: 20,
    customAxisMin: -20,
    valueFormatter: {
        minimumIntegerDigits: 1,
        maximumIntegerDigits: 2,
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        negativeSuffix: '%',
        positiveSuffix: '%'
    },
    labelTextAlign: 'right',
    limitLines:[{
      limit:8,
      enabled: true,
      textFont: {
          fontSize: 12,
      },
      label: '测试',
      lineColor: '#ED5B5B',
      lineWidth: 2,
      textColor: '#ED5B5B',
      xOffset: 0,
      yOffset: 0,
      dashLineEnabled: true,
      labelPosition: 'rightTop',
    }],
}

const rightAxis = {
    title: '(y轴)',
    titlePosition: 'top',
    // xTitleOffset:10,
    labelFont: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    labelPosition: 'outside',
    labelTextColor: 'black',
    labelCount: 6,
    drawZeroLineEnabled: true,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: true,
    gridLineColor: 'red',
    drawAxisLineEnabled: true,
    drawGridDashEnabled: true,
    customAxisMax: 20,
    customAxisMin: -20,
    valueFormatter: {
        minimumIntegerDigits: 1,
        maximumIntegerDigits: 2,
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        negativeSuffix: '%',
        positiveSuffix: '%'
    },
    labelTextAlign: 'right',
    // titleTextAlign: 'left',
};

const xAxis = {
    title: '(x轴)',
    titlePosition: 'right',
    labelPosition: 'bottom',
    xTitleOffset: 15,
    labelFont: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 14,

    },
    labelRotationAngle: -60,
    // forceLabelsEnabled:true,
    // labelCount:5,
    enabled: true,
    drawGridLinesEnabled: true,
    gridLineColor: 'red',
    drawGridDashEnabled: true,
    avoidFirstLastClippingEnabled: false,
    drawAxisLineEnabled: true,
};

const marker = {
    type: 'balloon',
    // font: {
    // fontFamily: 'HelveticaNeue-Bold',
    //     fontSize: 12,
    // },
    color: '#FFffffAA',
    xAxisLabelEnabled: false,
    labelEnabled: false,
    drawAllTipsEnabled: true,
    // positiveColor:'gray',
    // negativeColor:'blue',
}

class AXLineChartExample extends Component {

    render() {


        return <View style={{height: 200}}>
            <AXLineChart style={{flex: 1}}
                         onChartValueSelected={(e) => {
                             console.log("==>x", e)
                         }}
                         parameter={parameter}
                         legend={legend}
                         leftAxis={leftAxis}
                         xAxis={xAxis}
                         marker={marker}
                         data={{
                             valueFont: {
                                 fontFamily: 'HelveticaNeue-Light',
                                 fontSize: 12,
                             },
                             xVals: ['a', 'b', 'c', 'd', 'e',],

                             dataSets: [{
                                 yVals: [4.2, 7, 6, 9, 6,],
                                 label: 'label 1',
                                 color: '#ff3b30',
                                 fillColor: 'red',
                                 drawFilledEnabled: true,
                             },
                                 {
                                     yVals: [0, 3, 0, 3, 0, 2],
                                     label: 'label 2',
                                     lineWidth: 2,
                                     circleRadius: 10,
                                     color: '#4cd964',
                                     circleColor: '#c969e0',
                                     drawValuesEnabled: false,
                                     drawCubicEnabled: true,
                                     drawCirclesEnabled: true,
                                     cubicIntensity: 0.2,
                                     drawCircleHoleEnabled: true,
                                     circleHoleRadius: 8,
                                     circleHoleColor: 'white',
                                     selectXIndexes: [0, 3],
                                     selectXStyle: {
                                         circleRadius: 5,
                                         circleColor: 'red',
                                     },
                                     highlightCircleRadius: 8,
                                     highlightCircleColor: '#F4FA1A',
                                     highlightTransparentCircleRadius: 14,
                                     highlightTransparentCircleColor: '#F4FA1AA0'
                                 },
                             ]
                         }
                         }/>
        </View>;
    }
}

class AXLineFillChartExample extends Component {

    render() {


        return <View style={{height: 300}}>
          <AXLineChart style={{flex: 1}}
              parameter={parameter}
              legend={legend}
              leftAxis={leftAxis}
              rightAxis={rightAxis}
              xAxis={xAxis}
              marker={marker}
              data={{
                  valueFont: {
                      fontFamily: 'HelveticaNeue-Light',
                      fontSize: 12,
                  },
                  xVals: ['1998', '2001', '2003', '2006', '2008', '2001', '2003', '2006', '2008'],
                  dataSets: [
                      {
                          yVals: [18.6, 16, 17, 10, 15, 16, 17, 10, 10],
                          label: 'label 2',
                          lineWidth: 2,
                          circleRadius: 3,
                          color: '#4cd964',
                          circleColor: '#c969e0',
                          drawValuesEnabled: false,
                          drawCubicEnabled: false,
                          drawHorizontalHighlightIndicatorEnabled: false,
                          drawVerticalHighlightIndicatorEnabled: false,
                          drawCirclesEnabled: false,
                          cubicIntensity: 0.2,
                          drawFilledEnabled: true,
                          fillColor: 'red',
                          fillValue: 0,
                          valueFormatter:{
                              positiveSuffix:'%'
                          }
                      },
                      {
                          yVals: [8.6, 6, 7, 10, 5, 6, 7, 10, 0],
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
                          drawFilledEnabled: false,
                          axisDependency: 'right',
                          fillColor: '#ff0000ff',
                          fillValue: 0
                      }]
              }
              }/>
            </View>;
    }
}


class AXLineDataChartExample extends Component {

    render() {

        //backgroundColor:'white'
        return <View style={{height: 300, backgroundColor: 'white'}}>
            <AXLineChart style={{flex: 1}}
                         parameter={parameter}
                         legend={legend}
                         leftAxis={leftAxis}
                         rightAxis={rightAxis}
                         xAxis={xAxis}
                         marker={marker}
                         data={{
                             valueFont: {
                                 fontFamily: 'HelveticaNeue-Light',
                                 fontSize: 12,
                             },
                             xVals: ['1998', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008'],
                             dataSets: [
                                 {
                                     yVals: [18.6, 16, 17, 10, 15, 16, 17, 10, 10],
                                     label: 'label 1',
                                     lineWidth: 2,
                                     circleRadius: 10,
                                     circleHoleRadius: 8,
                                     color: '#d99299',
                                     circleColor: '#c969e0',
                                     drawValuesEnabled: false,
                                     drawCubicEnabled: false,
                                     drawHorizontalHighlightIndicatorEnabled: true,
                                     drawVerticalHighlightIndicatorEnabled: true,
                                     drawCirclesEnabled: true,
                                     drawCircleHoleEnabled: true,
                                     cubicIntensity: 0.2,
                                     axisDependency: 'right',
                                 },
                                 {
                                     yVals: [-8.6, 6, 7, 10, -5, 6, 7, 10, 0],
                                     label: 'label 2',
                                     lineWidth: 2,
                                     circleRadius: 3,
                                     color: '#4cd964',
                                     circleColor: '#c969e0',
                                     drawValuesEnabled: false,
                                     drawCubicEnabled: false,
                                     drawHorizontalHighlightIndicatorEnabled: true,
                                     drawVerticalHighlightIndicatorEnabled: true,
                                     drawCirclesEnabled: true,
                                     cubicIntensity: 0.2,
                                     axisDependency: 'right',
                                 }]
                         }
                         }/></View>;
    }
}


class AXLineChartDefaultExample extends Component {

    render() {

        //backgroundColor:'white'
        return <View style={{height: 300, backgroundColor: 'white'}}>
            <AXLineChart style={{flex: 1}}
                         data={{
                             xVals: ['1998', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008'],
                             dataSets: [
                                 {
                                     yVals: [18.6, 16, 17, 10, 15, 16, 17, 10, 10],
                                     label: 'label 1',
                                     color: '#d99299',
                                     valueFormatter:{
                                         positiveSuffix:'%',
                                         negativeSuffix:'%',
                                     }
                                 },
                             ]
                         }
                         }/></View>;
    }
}

class AXLineChartScopeExample extends Component {

    render() {

        //backgroundColor:'white'
        return <View style={{height: 300, backgroundColor: 'white'}}>
            <AXLineChart style={{flex: 1}}
                        parameter={parameter}
                         scopeView={{
                             enabled:true,
                             thumbSize:30,
                         }}
                         data={{
                             xVals: ['1998', '2001', '2002', '2003', '2004', '2005', '2006', '2007',
                             '1998', '2001', '2002', '2003', '2004', '2005', '2006', '2007',
                             '1998', '2001', '2002', '2003', '2004', '2005', '2006', '2007','2008'],
                             dataSets: [
                                 {
                                     yVals: [18.6, 16, 17, 10, 15, 16, 17, 10,
                                       18.6, 16, 17, 10, 15, 16, 17, 10,
                                       18.6, 16, 17, 10, 15, 16, 17, 10, 10],
                                     label: 'label 1',
                                     color: '#d99299',
                                 },
                             ]
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
            title: 'AXLineChart--default',
            render: () => <AXLineChartDefaultExample />
        },
        {
            title: 'AXLineChart--scope',
            render: () => <AXLineChartScopeExample />
        },
        {
            title: 'AXLineChart-数据弹窗',
            render: () => <AXLineDataChartExample />
        },
        {
            title: 'AXLineChart--基本',
            render: () => <AXLineChartExample />
        },
        {
            title: 'AXLineChart-填充',
            render: () => <AXLineFillChartExample />
        },

    ]
}
