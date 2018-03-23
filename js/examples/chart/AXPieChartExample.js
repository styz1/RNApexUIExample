/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Button} from 'react-native-apex-ui';

const {AXPieChart} = require('react-native-apex-charts');


const parameter = {
    drawCenterTextEnabled: true,
    centerText: 'test',
    centerTextColor: 'red',
    rotationAngle: 0,
    rotationEnabled: true,
    drawSlicesUnderHoleEnabled: false,
    defaultHighlight: {
        x: 1,
    },
    xAxisDuration: 1,
    yAxisDuration: 2.5,
    easingOption: 'easeInOutQuart',
};

const legend = {
    enabled: false,
    font: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    textColor: 'black',
    drawInside: false,
    horizontalAlignment: 'center',
    verticalAlignment: 'center',
    orientation: 'vertical',
    form: 'circle',
};

class AXPieChartExample extends Component {

    render() {


        return <View style={{height: 300}}>
            <AXPieChart style={{flex: 1}}
                        parameter={parameter}
                        legend={legend}
                        marker={{
                            type: 'balloon',
                            font: {
                                fontFamily: 'HelveticaNeue-Bold',
                                fontSize: 12,
                            },
                            color: '#FFFFFFE0',
                            xAxisLabelEnabled: false,
                            valueEnabled: true,
                            percentEnabled: true,
                            drawAllTipsEnabled: false,
                        }}
                        data={{
                            valueFont: {
                                fontFamily: 'HelveticaNeue-Light',
                                fontSize: 12,
                            },
                            dataSets: [{
                                xVals: ['Java', 'OC', 'JS', 'C++', 'PHP'],
                                yVals: [20, 20, 30, 20, 20],
                                yValuePosition: 'outside',
                                xValuePosition: 'outside',
                                sliceSpace: 2,
                                valueLineColor: 'red',
                                valueLinePart1OffsetPercentage: 1,
                                valueLinePart1Length: 0.5,
                                valueLinePart2Length: 0.5,
                                valueLineVariableLength: true,
                                drawEntryLabelsEnabled: true,
                                drawValuesEnabled: true,
                                drawPercentsEnabled: true,
                                // minmumPercentValue: 1,
                                holeRadiusPercent: 0.4,
                                colors: ['red', 'green', 'blue', 'gray', 'black'],
                            }]
                        }}/>

        </View>;
    }
}

class AXPieChartChangeExample extends Component {

    constructor() {
        super();
        this.state = {
            yValues: [40, 10, 23, 20, 10]
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
            <AXPieChart style={{flex: 1}}
                        parameter={parameter}
                        legend={legend}
                        data={{
                            valueFont: {
                                fontFamily: 'HelveticaNeue-Light',
                                fontSize: 12,
                            },
                            dataSets: [{
                                xVals: ['Java', 'OC', 'JS', 'C++', 'PHP'],
                                yVals: this.state.yValues,
                                yValuePosition: 'outside',
                                xValuePosition: 'inside',
                                sliceSpace: 2,
                                valueLineColor: 'red',
                                valueLinePart1OffsetPercentage: 1,
                                valueLinePart1Length: 0.5,
                                valueLinePart2Length: 0.5,
                                valueLineVariableLength: true,
                                minmumPercentValue: 1,
                                selectionShift: 10,
                                colors: ['red', 'green', 'blue', 'gray', 'black'],
                            }]
                        }}/>

        </View>;
    }
}

class AXXPieChartExample extends Component {

    render() {
        return <View style={{height: 300}}>
            <AXPieChart style={{flex: 1}}
                        parameter={{
                          drawCenterTextEnabled: true,
                          centerText: 'test',
                          centerTextColor: 'red',
                            rotationAngle: 0,
                            rotationEnabled: true,
                            drawSlicesUnderHoleEnabled: false,
                            xAxisDuration: 1,
                            yAxisDuration: 2.5,
                            easingOption: 'easeInOutQuart',
                            xPieSpace: 5,
                        }}
                        marker={{
                            type: 'balloon',
                            font: {
                                fontFamily: 'HelveticaNeue-Bold',
                                fontSize: 12,
                            },
                            color: '#FFFFFFE0',
                            xAxisLabelEnabled: false,
                            percentEnabled: true,
                            valueEnabled: true,
                        }}
                        legend={{
                            enabled: true,
                            font: {
                                fontFamily: 'HelveticaNeue-Light',
                                fontSize: 12,
                            },
                            textColor: 'black',
                            drawInside: false,
                            horizontalAlignment: 'left',
                            verticalAlignment: 'bottom',
                            orientation: 'horizontal',
                            form: 'square',
                            xEntrySpace: 5,
                            yOffset: 5,
                            wordWrapEnabled: true,
                        }}
                        data={{
                            valueFont: {
                                fontFamily: 'HelveticaNeue-Light',
                                fontSize: 12,
                            },
                            // valueTextColor: 'black',
                            dataSets: [{
                                xVals: ['Java', 'OC', 'JS', 'C++', 'PHP', 'Java2', 'OC2', 'JS2', 'C++2', 'PHP2'],
                                yVals: [40, 15, 20, 20, 13, 40, 10, 20, 20, 10],
                                yValuePosition: 'outside',
                                xValuePosition: 'outside',
                                sliceSpace: 2,
                                // valueLineColor: 'red',
                                drawPercentsEnabled: true,
                                valueLinePart1OffsetPercentage: 1,
                                valueLinePart1Length: 0.5,
                                valueLinePart2Length: 0.5,
                                valueLineVariableLength: true,
                                minmumPercentValue: 1,
                                drawValuesEnabled: true,
                                drawEntryLabelsEnabled: false,
                                valueTextColor: 'black',
                                holeRadiusPercent: 0.7,
                                colors: ['red', 'green', 'blue', 'gray', 'black', 'red', 'green', 'blue', 'gray', 'black'],
                            }, {
                                xVals: ['Java', 'OC'],
                                yVals: [30, 30],
                                sliceSpace: 2,
                                selectionShift: 4,
                                minmumPercentValue: 1,
                                drawEntryLabelsEnabled: true,
                                drawValuesEnabled: true,
                                entryLabelColor: 'black',
                                valueTextColor: 'black',
                                holeRadiusPercent: 0.4,
                                colors: ['green', 'blue'],
                            }]
                        }}/>

        </View>;
    }
}


class AXPieChartDefaultExample extends Component {

    render() {


        return <View style={{height: 300}}>
            <AXPieChart style={{flex: 1}}
                        data={{
                            dataSets: [{
                                xVals: ['Java', 'OC', 'JS', 'C++', 'PHP', 'Java2', 'OC2', 'JS2', 'C++2', 'PHP2'],
                                yVals: [40, 10, 20, 20, 10, 40, 10, 20, 20, 10],
                                holeRadiusPercent: 0.7,
                                valueLineColor: 'black',
                                colors: ['red', 'green', 'blue', 'gray', 'black', 'red', 'green', 'blue', 'gray', 'black'],
                            }, {
                                xVals: ['Java', 'OC'],
                                yVals: [30, 30],
                                valueLineColor: 'black',
                                colors: ['green', 'blue'],
                            }]
                        }}/>

        </View>;
    }
}
module.exports = {
    title: 'AXPieChartExample',
    description: '饼图',
    examples: [
        {
            title: 'AXPieChart-default',
            render: () => <AXPieChartDefaultExample />
        },
        {
            title: 'AXPieChart-简单',
            render: () => <AXPieChartExample />
        },
        {
            title: 'AXPieChart-多数据',
            render: () => <AXXPieChartExample />
        }
    ]
}
