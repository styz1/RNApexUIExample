/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';


const {AXCombinedChart} = require('react-native-apex-charts');


const parameter = {
    // xAxisDuration: 1,
    // yAxisDuration: 2.5,
    easingOption: 'easeInOutQuart',
    defaultHighlight: {
        x: 1,
        dataSetIndex: 0,
        stackIndex: 0,
        chartType: 'bar',
    },
    highlightPerTapEnabled: true,
    highlightFullBarEnabled: true,
    highlightAllBarEnabled: true,
    edgeInsets: {bottom: 0, left: 0, top: 0, right: 0},
}

const legend = {
    enabled: true,
    font: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    textColor: 'black',
    form: 'line',

};
const leftAxis = {
    labelFont: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    labelPosition: 'outside',
    labelTextColor: 'red',
    labelCount: 5,
    drawZeroLineEnabled: true,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: true,
    customAxisMax: 20,
    customAxisMin: 0,
    title: '(中国)',
    titlePosition: 'top',
    valueFormatter: {
        minimumIntegerDigits: 1,
        maximumIntegerDigits: 2,
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        negativeSuffix: '%',
        positiveSuffix: '%'
    },
    labelTextAlign: 'right',
};

const rightAxis = {
    labelFont: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    labelPosition: 'outside',
    labelTextColor: 'black',
    labelCount: 5,
    drawZeroLineEnabled: true,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: true,
    customAxisMax: 20,
    customAxisMin: 0,
    title: '(中国)',
    titlePosition: 'top',
    // valueFormatter: {
    //     minimumIntegerDigits: 1,
    //     maximumIntegerDigits: 2,
    //     maximumFractionDigits: 2,
    //     minimumFractionDigits: 2,
    //     negativeSuffix: '%',
    //     positiveSuffix: '%'
    // },
    labelTextAlign: 'left',
};

const xAxis = {
    labelPosition: 'bottom',
    labelFont: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,

    },
    // labelRotationAngle: 60,
    enabled: true,
    drawGridLinesEnabled: false,
    avoidFirstLastClippingEnabled: false,
    drawAxisLineEnabled: true,
    // title: '(月分)',
    // titlePosition: 'right',
};

const lineData = {
    dataSets: [{
        yVals: [8.6, 6, 7, 10, 5,],
        label: 'line2',
        lineWidth: 2,
        circleRadius: 3,
        color: '#4cd964',
        circleColor: '#c969e0',
        drawValuesEnabled: true,
        drawCubicEnabled: true,
        drawCirclesEnabled: true,
        cubicIntensity: 0.2,
    }, {
        yVals: [4.2, 7, 6, 9, 6,],
        label: 'line1',
        color: '#514fb3',
        fillColor: 'red',
        drawFilledEnabled: true,
    }]
}

const barData_simple = {
    dataSets: [{
        yVals: [10, 10, 10, 10, 20],
        label: 'bar1',
        color: '#ff3b30',
        axisDependency: 'right',
        highlightColor: '#cccccc',

    }]
};

const xVals = ['a', 'b', 'c', 'd', 'e'];
const barData_stack = {
    barWidth: 0.8,
    dataSets: [
        {
            yVals: [[10, 1], [7, 2], [6, 3], [9, 4], [6, 5]],
            stackLabels: ['stack1', 'stack2'],
            colors: ['#ff3b30', '#33ffff']
        }
    ]
};

const barData_combined = {
    barWidth: 0.8,
    dataSets: [
        {
            yVals: [[10, 1], [7, 2], [6, 3], [9, 4], [6, 5]],
            stackLabels: ['stack1', 'stack2'],
            colors: ['#ff3b30', '#33ffff'],
            highlightColor: '#4ecc4a9f',
            drawValuesEnabled:true,
            axisDependency: 'left',
        },
        {
            yVals: [10, 10, 10, 10, 20],
            label: 'bar1',
            color: '#464aff',
            drawValuesEnabled:true,
            highlightColor: 'red',
            axisDependency: 'left',
        }
    ]
}


const barData_paralleling = {
    dataSets: [{
        yVals: [10, 10, 10, 10, 20],
        label: 'label 1',
        color: '#ff3b30'
    },
        {
            yVals: [10, 10, 10, 10, 20],
            label: 'label 2',
            color: '#ffe377'
        },
    ]
};

const marker = {
    type: 'balloon',
    font: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 12,
    },
    color: '#ffffffAA',
    xAxisLabelEnabled: true,
    labelEnabled: true,
    drawAllTipsEnabled: true,
}

class AXCombinedChartExample1 extends Component {

    render() {
        return <View style={{height: 300}}>
            <AXCombinedChart style={{flex: 1}}
                             onChartValueSelected={(e) => {
                                 console.log("==>x", e)
                             }}
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
                                 xVals: xVals,

                                 lineData: lineData,
                                 barData: barData_simple
                             }}/>
        </View>;
    }
}

class AXCombinedChartExample2 extends Component {

    render() {


        return <View style={{height: 300}}><AXCombinedChart style={{flex: 1}}
                                                            onChartValueSelected={(e) => {
                                                                console.log("==>x", e)
                                                            }}
                                                            parameter={parameter}
                                                            legend={legend}
                                                            leftAxis={rightAxis}
                                                            xAxis={xAxis}
                                                            marker={marker}
                                                            data={{
                                                                valueFont: {
                                                                    fontFamily: 'HelveticaNeue-Light',
                                                                    fontSize: 12,
                                                                },
                                                                xVals: xVals,

                                                                lineData: lineData,
                                                                barData: barData_stack
                                                            }}/></View>;
    }
}

class AXCombinedChartExample3 extends Component {

    render() {


        return <View style={{height: 300}}><AXCombinedChart style={{flex: 1}}
                                                            onChartValueSelected={(e) => {
                                                                console.log("==>x", e)
                                                            }}
                                                            parameter={parameter}
                                                            legend={legend}
                                                            leftAxis={rightAxis}
                                                            xAxis={xAxis}
                                                            marker={marker}
                                                            data={{
                                                                valueFont: {
                                                                    fontFamily: 'HelveticaNeue-Light',
                                                                    fontSize: 12,
                                                                },
                                                                xVals: xVals,

                                                                lineData: lineData,
                                                                barData: barData_paralleling
                                                            }}/></View>;
    }
}

class AXCombinedChartExample4 extends Component {

    render() {


        return <View style={{height: 300}}><AXCombinedChart style={{flex: 1}}
                                                            onChartValueSelected={(e) => {
                                                                console.log("==>x", e)
                                                            }}
                                                            parameter={parameter}
                                                            legend={legend}
                                                            leftAxis={rightAxis}
                                                            xAxis={xAxis}
                                                            marker={marker}
                                                            data={{
                                                                valueFont: {
                                                                    fontFamily: 'HelveticaNeue-Light',
                                                                    fontSize: 12,
                                                                },
                                                                xVals: xVals,

                                                                lineData: lineData,
                                                                barData: barData_combined
                                                            }}/></View>;
    }
}


class AXCombinedChartExample5 extends Component {

    render() {


        return <View style={{height: 300}}><AXCombinedChart style={{flex: 1,}}
                                                            onChartValueSelected={(e) => {
                                                                console.log("==>x", e)
                                                            }}
                                                            parameter={parameter}
                                                            legend={legend}
                                                            rightAxis={rightAxis}
                                                            leftAxis={leftAxis}
                                                            xAxis={{
                                                                ...xAxis,
                                                                forceLabelsEnabled: false,
                                                                labelCount: 5,
                                                            }}
                                                            marker={marker}
                                                            data={{
                                                                valueFont: {
                                                                    fontFamily: 'HelveticaNeue-Light',
                                                                    fontSize: 12,
                                                                },
                                                                valueTextColor: 'red',
                                                                xVals: xVals,
                                                                barData: {},
                                                                lineData: lineData,
                                                            }}/></View>;
    }
}

class AXCombinedChartExample6 extends Component {

    render() {


        return <View style={{height: 300}}><AXCombinedChart style={{flex: 1}}
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
                                                                xVals: xVals,

                                                                barData: barData_combined
                                                            }}/></View>;
    }
}

class AXCombinedChartDefaultExample extends Component {

    render() {
        return <View style={{height: 300}}>
            <AXCombinedChart style={{flex: 1}}
                             leftAxis={{
                                 customAxisMin: 0,
                             }}
                             data={{
                                 xVals: xVals,
                                 barData: {
                                     dataSets: [{
                                         yVals: [10, 10, 10, 10, 20],
                                         label: 'bar1',
                                         color: '#ff3b30',
                                     }]
                                 },
                                 lineData: {
                                     dataSets: [{
                                         yVals: [8.6, 6, 7, 10, 5,],
                                         label: 'line2',
                                         color: '#4cd964',
                                     }, {
                                         yVals: [4.2, 7, 6, 9, 6,],
                                         label: 'line1',
                                         color: '#514fb3',
                                         // fillColor:'red',
                                     }]
                                 },

                             }}/>
        </View>;
    }
}


module
    .exports = {
    title: 'AXCombinedChartExample',
    description: '复合图',
    examples: [
        {
            title: 'default',
            render: () => <AXCombinedChartDefaultExample />
        },
        {
            title: '单图-线',
            render: () => <AXCombinedChartExample5 />
        },
        {
            title: '单图-柱',
            render: () => <AXCombinedChartExample6 />
        },
        {
            title: '基本',
            render: () => <AXCombinedChartExample1 />
        },
        {
            title: '堆',
            render: () => <AXCombinedChartExample2 />
        },
        {
            title: '并列',
            render: () => <AXCombinedChartExample3 />
        },
        {
            title: '柱状图复合',
            render: () => <AXCombinedChartExample4 />
        },
    ]
}
