/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';


const {AXLineChart}=require('react-native-apex-charts');


const parameter = {
    xAxisDuration: 1,
    yAxisDuration: 2.5,
    easingOption: 'easeInOutQuart',
    defaultHighlight: {
        x: 1,
        dataSetIndex: 1,
    },
    highlightPerTapEnabled: true,
    edgeInsets:{bottom:0,left:15,top:0,right:15},
    scaleXEnabled:true,
    scaleYEnabled:true,
}

const legend = {
    enabled: false,
    font: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    textColor: 'black',
    form: 'line',

};


const leftAxis = {
    title:'(y轴)',
    // titlePosition:'top',
    xTitleOffset:-10,
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
    gridLineColor:'red',
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
}

const rightAxis = {
    title:'(y轴)',
    titlePosition:'top',
    xTitleOffset:10,
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
    gridLineColor:'red',
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
    titleTextAlign: 'right',
};

const xAxis = {
    title:'(x轴)',
    titlePosition: 'right',
    labelPosition:'bottom',
    xTitleOffset:15,
    labelFont: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 14,

    },
    // labelRotationAngle: 60,
    // forceLabelsEnabled:true,
    // labelCount:5,
    enabled: true,
    drawGridLinesEnabled: true,
    gridLineColor:'red',
    drawGridDashEnabled: true,
    avoidFirstLastClippingEnabled: false,
    drawAxisLineEnabled: true,
};

const marker={
    type: 'balloon',
        // font: {
        // fontFamily: 'HelveticaNeue-Bold',
        //     fontSize: 12,
    // },
    color: '#FFffffAA',
        xAxisLabelEnabled: true,
        labelEnabled: true,
        drawAllTipsEnabled: true,
    // positiveColor:'gray',
    // negativeColor:'blue',
}

class AXLineChartExample extends Component {

    render() {


        return <View style={{height:300}}>
          <AXLineChart style={{flex:1}}
           onChartValueSelected={(e)=>{console.log("==>x",e)}}
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
              xVals: ['a','b','c','d','e',],

              dataSets:
                [{
                  yVals: [4.2,7,6,9,6,],
                  label: 'label 1',
                  color: '#ff3b30',
                },
                {
                  yVals: [8.6,6,7,10,5,],
                  label: 'label 2',
                  lineWidth: 2,
                  circleRadius: 4,
                  color: '#4cd964',
                  circleColor: '#c969e0',
                  drawValuesEnabled: true,
                  drawCubicEnabled: false,
                  drawCirclesEnabled: true,
                  cubicIntensity: 0.2,
                  drawCircleHoleEnabled: true,
                  circleHoleRadius: 2,
                  circleHoleColor: 'white',
                  selectXIndexes: [1,3],
                  selectXStyle: {
                      circleRadius: 5,
                      circleColor: 'red',
                  },
                }]
              }
            }/>
          </View>;
    }
}

class AXLineFillChartExample extends Component {

    render() {


        return <View style={{height:300}}><AXLineChart style={{flex:1}}
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
    xVals: ['1998','2001','2003','2006','2008','2001','2003','2006','2008'],
    dataSets:
      [
      {
        yVals: [18.6,16,17,10,15,16,17,10,10],
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
        drawFilledEnabled:true,
        fillColor:'red',
      },
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
        drawFilledEnabled:false,
        axisDependency:'right',
        fillColor:'#ff0000ff'
      }]
    }
  }/></View>;
    }
}


class AXLineDataChartExample extends Component {

    render() {

        //backgroundColor:'white'
        return <View style={{height:300,backgroundColor:'white'}}>
            <AXLineChart style={{flex:1}}
                         parameter={parameter}
                         legend={legend}
                         rightAxis={rightAxis}
                         xAxis={xAxis}
                         marker={marker}
                         data={{
    valueFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    xVals: ['1998','2001','2002','2003','2004','2005','2006','2007','2008'],
    dataSets:
      [
      {
        yVals: [18.6,16,17,10,15,16,17,10,10],
        label: 'label 1',
        lineWidth: 2,
        circleRadius: 3,
        color: '#d99299',
        circleColor: '#c969e0',
        drawValuesEnabled: false,
        drawCubicEnabled: false,
        drawHorizontalHighlightIndicatorEnabled: true,
        drawVerticalHighlightIndicatorEnabled: true,
        drawCirclesEnabled: false,
        cubicIntensity: 0.2,
        axisDependency:'right',
      },
      {
        yVals: [-8.6,6,7,10,-5,6,7,10,0],
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
        axisDependency:'right',
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
