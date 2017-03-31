/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Button} from 'react-native-apex-ui';

const {AXPieChart}=require('react-native-apex-charts');


const parameter={
    drawSliceTextEnabled: true,
    drawValuesEnabled: true,
    usePercentValuesEnabled: true,
    holeRadiusPercent: 0.4,
    highlightPerTapEnabled: true,
    transparentCircleRadiusPercent: 0.61,
    drawCenterTextEnabled: false,
    drawHoleEnabled: true,
    rotationAngle: 0,
    rotationEnabled: true,
    drawSlicesUnderHoleEnabled: false,
    defaultHighlight:{
        x:1,
    },
};

const legend={
    enabled: true,
    font: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    textColor: 'black',
    drawInside: false,
    horizontalAlignment:'center',
    verticalAlignment: 'center',
    orientation: 'vertical',
    form: 'circle',
};

class AXPieChartExample extends Component {

    render() {


        return <View style={{height:300}}>
            <AXPieChart style={{flex:1}}
                        parameter={parameter}
                        legend={legend}
                        data={{
      valueFont: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
      },
      valueTextColor: 'black',
      dataSet:{
        xVals: ['Java','OC','JS','C++','PHP'],
        yVals: [40,10,23,20,10],
        yValuePosition:'outside',
        xValuePosition:'inside',
        sliceSpace: 2,
        valueLineColor: 'red',
        valueLinePart1OffsetPercentage: 1,
        valueLinePart1Length: 0.5,
        valueLinePart2Length: 0.5,
        valueLineVariableLength: true,
        minmumPercentValue: 1,
        colors:['red','green','blue','gray','black'],
      }
    }}/>

        </View>;
    }
}

class AXPieChartChangeExample extends Component {

    constructor(){
        super();
        this.state={
            yValues:[40,10,23,20,10]
        };
    }

    render() {


        return <View style={{height:300}}>
            <Button
                caption='change'
                style={[ {borderWidth: 1}]}
                onPress={()=>{this.setState({yValues:[4,1,23,20,10]})}}
            />
            <AXPieChart style={{flex:1}}
                        parameter={parameter}
                        legend={legend}
                        data={{
      valueFont: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
      },
      valueTextColor: 'black',
      dataSet:{
        xVals: ['Java','OC','JS','C++','PHP'],
        yVals: this.state.yValues,
        yValuePosition:'outside',
        xValuePosition:'inside',
        sliceSpace: 2,
        valueLineColor: 'red',
        valueLinePart1OffsetPercentage: 1,
        valueLinePart1Length: 0.5,
        valueLinePart2Length: 0.5,
        valueLineVariableLength: true,
        minmumPercentValue: 1,
        colors:['red','green','blue','gray','black'],
      }
    }}/>

        </View>;
    }
}


module.exports = {
    title: 'AXPieChartExample',
    description: '饼图',
    examples: [
        {
            title: 'AXPieChart',
            render: () => <AXPieChartExample />
        },
        {
            title: 'AXPieChart-change',
            render: () => <AXPieChartChangeExample />
        }
    ]
}
