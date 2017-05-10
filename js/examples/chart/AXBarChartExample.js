/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Button} from 'react-native-apex-ui';

const {AXBarChart}=require('react-native-apex-charts');

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
    customAxisMin: 0
};

const xaxis = {
    labelPosition: 'bottom',
    enabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
    labelCount:1,
};

const parameter = {
    xAxisDuration: 1,
    yAxisDuration: 2.5,
    easingOption: 'easeInOutQuart',
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

class AXBarChartStackExample extends Component {

    render() {


        return <View style={{height:300}}>
            <AXBarChart style={{flex:1}}
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
    xVals: ['1998','2001','2003','2006','2008'],

    dataSets:
      [
        {
          yVals: [[10,1],[7,2],[6,3],[9,4],[6,5]],
          stackLabels: ['label 1','label2'],
          colors: ['#ff3b30','#33ffff']
        }
      ]
    }
  }/>

        </View>;
    }
}


class AXBarChartMultiExample extends Component {

    render() {


        return <View style={{height:300}}>
            <AXBarChart style={{flex:1}}
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
    xVals: ['1998','2001','2003','2006','2008'],
    dataSets:
      [{
        yVals: [10,10,10,10,20],
        label: 'label 1',
        color: '#ff3b30'
      },
      {
        yVals: [10,10,10,10,20],
        label: 'label 2',
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


        return <View style={{height:300}}>
            <AXBarChart style={{flex:1}}
                        parameter={parameter}
                        onChartValueSelected={(e)=>{console.log("==>",e)}}
                        legend={legend}
                        leftAxis={yaxis}
                        xAxis={xaxis}
                        marker={marker}
                        data={{
    valueFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    xVals: ['1998'],
    dataSets:
      [{
        yVals: [10],
        label: 'label 1',
        color: '#ff3b30',
        axisDependency: 'left',
        highlightColor:'#cccccc',
      }]




    }
  }/>

        </View>;
    }
}


class AXBarChartCombineExample extends Component {

    render() {


        return <View style={{height:300}}>
            <AXBarChart style={{flex:1}}
                        parameter={{...parameter,highlightAllBarEnabled:true}}
                        legend={legend}
                        rightAxis={yaxis}
                        xAxis={xaxis}
                        marker={marker}
                        data={{
    valueFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    xVals: ['1998','2001','2003','2006','2008'],
    barWidth:0.3,
    dataSets:
      [
        {
          yVals: [[10,1],[7,2],[6,3],[9,4],[6,5]],
          stackLabels: ['label1','label2'],
          colors: ['#ff3b30','#33ffff'],
          highlightColor:'#4ecc4a9f',
        },
        {
        yVals: [10,10,10,10,20],
        label: 'label1',
        color: '#464aff',
        highlightColor:'red',
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


        return <View style={{height:300}}>
            <Button
                caption='change'
                style={[ {borderWidth: 1}]}
                onPress={()=>{this.setState({yValues:[4,1,23,20,10]})}}
            />
            <AXBarChart style={{flex:1}}
                        parameter={parameter}
                        legend={legend}
                        rightAxis={yaxis}
                        xAxis={xaxis}
                        data={{
    valueFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    xVals: ['1998','2001','2003','2006','2008'],
    barWidth:0.3,
    dataSets:
      [
        {
            yVals: this.state.yValues,
            label: 'label 1',
            color: '#464aff'
        }
      ]
    }
  }/>

        </View>;
    }
}

module.exports = {
    component: AXBarChartBaseExample,
    title: 'AXBarChartExample',
    description: '柱状图',
    examples: [
        {
            title: 'AXBarChart-简单',
            render: () => <AXBarChartBaseExample/>
        },
        {
            title: 'AXBarChart-堆',
            render: () => <AXBarChartStackExample/>
        },
        {
            title: 'AXBarChart-并排',
            render: () => <AXBarChartMultiExample/>
        },
        {
            title: 'AXBarChart-复合',
            render: () => <AXBarChartCombineExample/>
        },
        {
            title: 'AXBarChart-change',
            render: () => <AXBarChartChangeExample/>
        },

    ]
}
