/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Button} from 'react-native-apex-ui';

const {AXScatterChart}=require('react-native-apex-charts');

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
    labelCount: 4,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
};

const xaxis = {
    labelPosition: 'bottom',
    enabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
};

const parameter = {
    // xAxisDuration: 1,
    // yAxisDuration: 2.5,
    // easingOption: 'easeInOutQuart',
    highlightPerTapEnabled: true,
    highlightAllBarEnabled: true,
    highlightFullBarEnabled: false,
    defaultHighlight: {
        x: 1,
        dataSetIndex: 0,
        stackIndex: 1,
    },
}
//type: 'rectangle',
const marker={
    type: 'balloon',
    font: {
        fontSize: 12,
    },
    // color: '#FF000066',
    xAxisLabelEnabled: true,
    labelEnabled: false,
    drawAllTipsEnabled: false,
}


class AXScatterChartExample extends Component {

    render() {


        return <View style={{height:300}}>
            <AXScatterChart style={{flex:1}}
                        parameter={parameter}
                        onChartValueSelected={(e)=>{console.log("==>",e)}}
                        legend={legend}
                        rightAxis={yaxis}
                        xAxis={xaxis}
                        marker={marker}
                        data={{
    valueFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    xVals: ['1998','1999','2000','2001','2002','2003'],
    dataSets:
      [{
        yVals: [10,13,14,5,6,7,10],
        label: 'label 1',
        colors: ['#ff3b30','blue'],
        axisDependency: 'left',
        highlightColor:'#cccccc',
        scatterShape: 'circle',
              scatterShapeHoleColor: '#ff3b30',
              scatterShapeHoleRadius: 0,
              scatterShapeSize: 5,
      }]




    }
  }/>

        </View>;
    }
}



class AXScatterChartDefaultExample extends Component {

    render() {


        return <View style={{height:300}}>
            <AXScatterChart style={{flex:1}}
                            data={{
                                valueFont: {
                                    fontFamily: 'HelveticaNeue-Light',
                                    fontSize: 12,
                                },
                                xVals: ['1998','1999','2000','2001','2002','2003'],
                                dataSets:
                                    [{
                                        yVals: [10,13,14,5,6,7],
                                        label: 'label 1',
                                    }]




                            }
                            }/>

        </View>;
    }
}

module.exports = {
    title: 'AXScatterChartExample',
    description: '散点图',
    examples: [
        {
            title: 'AXScatterChart-default',
            render: () => <AXScatterChartDefaultExample/>
        },

        {
            title: 'AXScatterChart-简单',
            render: () => <AXScatterChartExample/>
        },


    ]
}
