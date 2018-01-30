/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Button} from 'react-native-apex-ui';

const {AXHorizontalBarChart} = require('react-native-apex-charts');

const legend = {
    enabled: true,
    font: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    textColor: 'black',
    form: 'square',

};

const yaxis = {
    labelFont: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    labelPosition: 'outside',
    labelTextColor: 'black',
    labelCount: 5,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: true,
    drawAxisLineEnabled: true,
    customAxisMin: 0,
    customAxisMax: 20,
    title: '(y轴)',
    titlePosition: 'top',
    // xTitleOffset: -5,
};

const xaxis = {
    labelPosition: 'bottom',
    enabled: true,
    drawGridLinesEnabled: true,
    drawAxisLineEnabled: true,
    title: '(x轴)',
    titlePosition: 'right',
    // xTitleOffset:-10,
};

const parameter = {
    highlightPerTapEnabled: true,
    defaultHighlight: {
        x: 1,
        dataSetIndex: 0,
        stackIndex: 1,
    },
    highlightAllBarEnabled: true,
    highlightFullBarEnabled: true,
    scaleXEnabled: true,
}


const marker = {
    type: 'balloon',
    font: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 12,
    },
    color: 'white',
    xAxisLabelEnabled: true,
    labelEnabled: true,
    drawAllTipsEnabled: false,
}

class AXBarChartStackExample extends Component {

    render() {


        return <View style={{height: 300}}>
            <AXHorizontalBarChart style={{flex: 1}}
                                  parameter={parameter}
                                  legend={legend}
                                  rightAxis={yaxis}
                                  xAxis={xaxis}
                                  marker={marker}
                                  data={{
                                      valueFont: {
                                          fontFamily: 'HelveticaNeue-Light',
                                          fontSize: 12,
                                      },
                                      // valueTextColor:'black',
                                      xVals: ['1998', '2001', '2003', '2006', '2008'],
                                      verticalValueAlignment: 'bottom',
                                      horizontalValueAlignment: 'right',
                                      barWidth: 0.6,
                                      dataSets: [
                                          {
                                              yVals: [[10, 1], [7, 2], [6, 3], [9, 4], [6, 5]],
                                              stackLabels: ['label 1', 'label2'],
                                              // stackValueColors:['#ff3b30', '#33ffff'],
                                              // valueColors:['#ff3b30', '#33ffff'],
                                              axisDependency: 'right',
                                              drawValuesEnabled: true,
                                              colors: ['#ff3b30', '#33ffff'],
                                          }
                                      ]
                                  }
                                  }/>

        </View>;
    }
}


class AXBarChartMultiExample extends Component {

    render() {


        return <View style={{height: 300}}>
            <AXHorizontalBarChart style={{flex: 1}}
                                  parameter={parameter}
                                  legend={legend}
                                  rightAxis={yaxis}
                                  xAxis={xaxis}
                                  marker={marker}
                                  data={{
                                      valueFont: {
                                          fontFamily: 'HelveticaNeue-Light',
                                          fontSize: 12,
                                      },
                                      xVals: ['1998', '2001', '2003', '2006', '2008'],
                                      dataSets: [{
                                          yVals: [1, 10, 10, 10, 20],
                                          label: 'label 1',
                                          axisDependency: 'right',
                                          color: '#ff3b30'
                                      },
                                          {
                                              yVals: [10, 10, 10, 10, 20],
                                              label: 'label 2',
                                              axisDependency: 'right',
                                              color: '#ffe377'
                                          },
                                      ]


                                  }
                                  }/>

        </View>;
    }
}

class AXBarChartBaseExample extends Component {

    render() {


        return <View style={{height: 300}}>
            <AXHorizontalBarChart style={{flex: 1}}
                                  parameter={parameter}
                                  onChartValueSelected={(e) => {
                                      console.log("==>", e)
                                  }}
                                  legend={legend}
                                  rightAxis={{labelFont: {
                                      fontFamily: 'HelveticaNeue-Light',
                                      fontSize: 12,
                                  },
                                  labelPosition: 'outside',
                                  labelTextColor: 'black',
                                  labelCount: 4,
                                  forceLabelsEnabled: true,
                                  drawGridLinesEnabled: true,
                                  drawAxisLineEnabled: true,
                                  customAxisMin: -20,
                                  drawZeroLineEnabled: true,
                                  customAxisMax: 40,
                                  title: '(y轴)',
                                  titlePosition: 'top'}}
                                  xAxis={xaxis}
                                  marker={marker}
                                  data={{
                                      valueFont: {
                                          fontFamily: 'HelveticaNeue-Light',
                                          fontSize: 12,
                                      },
                                      barWidth: 0.5,
                                      verticalValueAlignment: 'bottom',
                                      horizontalValueAlignment: 'right',
                                      xVals: ['1998', '2001', '2003', '2006', '2008'],
                                      dataSets: [{
                                          yVals: [-10, 10, 30, -5, 20],
                                          label: 'label 1',
                                          drawValuesEnabled: true,
                                          color: '#ff3b30',
                                          axisDependency: 'right',
                                          highlightColor: '#cccccc',
                                      }]


                                  }
                                  }/>

        </View>;
    }
}


class AXBarChartCombineExample extends Component {

    render() {


        return <View style={{height: 300}}>
            <AXHorizontalBarChart style={{flex: 1}}
                                  parameter={parameter}
                                  legend={legend}
                                  rightAxis={yaxis}
                                  xAxis={xaxis}
                                  marker={marker}
                                  data={{
                                      valueFont: {
                                          fontFamily: 'HelveticaNeue-Light',
                                          fontSize: 12,
                                      },
                                      xVals: ['1998', '2001', '2003', '2006', '2008'],
                                      barWidth: 0.3,
                                      dataSets: [
                                          {
                                              yVals: [[10, 1], [7, 2], [6, 3], [9, 4], [6, 5]],
                                              stackLabels: ['label 1', 'label2'],
                                              colors: ['#ff3b30', '#33ffff'],
                                              highlightColor: '#4ecc4a9f',
                                              axisDependency: 'right',
                                          },
                                          {
                                              yVals: [10, 10, 10, 10, 20],
                                              label: 'label 1',
                                              color: '#464aff',
                                              axisDependency: 'right',
                                              highlightColor: 'red',
                                          }
                                      ]
                                  }
                                  }/>

        </View>;
    }
}

class AXBarChartChangeExample extends Component {

    constructor() {
        super();
        this.state = {
            yValues: [10, 10, 10, 10, 20],
        };
    }

    render() {


        return <View style={{height: 300}}>
            <Button
                caption='change'
                style={[{borderWidth: 1}]}
                onPress={() => {
                    this.setState({yValues: [4, 1, 23, 20, 10]})
                }}
            />
            <AXHorizontalBarChart style={{flex: 1}}
                                  legend={legend}
                                  rightAxis={yaxis}
                                  xAxis={xaxis}
                                  marker={marker}
                                  data={{
                                      valueFont: {
                                          fontFamily: 'HelveticaNeue-Light',
                                          fontSize: 12,
                                      },
                                      xVals: ['1998', '2001', '2003', '2006', '2008'],
                                      barWidth: 0.3,
                                      dataSets: [
                                          {
                                              yVals: this.state.yValues,
                                              label: 'label 1',
                                              axisDependency: 'right',
                                              color: '#464aff'
                                          }
                                      ]
                                  }
                                  }/>

        </View>;
    }
}

class AXBarChartDefaultExample extends Component {

    render() {


        return <View style={{height: 300}}>
            <AXHorizontalBarChart style={{flex: 1}}
                                  xAxis={{
                                      title:'中国',
                                  }}
                                  data={{
                                      xVals: ['1998', '2001', '2003', '2006', '2008'],
                                      dataSets: [{
                                          yVals: [10, 10, 10, 10, 20],
                                          label: 'label 1',
                                      }]
                                  }
                                  }/>

        </View>;
    }
}

module.exports = {
    title: 'AXHBarChartExample',
    description: '水平柱状图',
    examples: [
        {
            title: 'AXHBarChart-default',
            render: () => <AXBarChartDefaultExample/>
        },
        {
            title: 'AXHBarChart-简单',
            render: () => <AXBarChartBaseExample/>
        },
        {
            title: 'AXHBarChart-堆',
            render: () => <AXBarChartStackExample/>
        },
        {
            title: 'AXHBarChart-并排',
            render: () => <AXBarChartMultiExample/>
        },
        {
            title: 'AXHBarChart-复合',
            render: () => <AXBarChartCombineExample/>
        },
        {
            title: 'AXHBarChart-change',
            render: () => <AXBarChartChangeExample/>
        },

    ]
}
