/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';


const {AXBarChart}=require('react-native-apex-charts');

class AXBarChartStackExample extends Component {

  render() {


    return <View style={{height:300}}>
      <AXBarChart style={{flex:1}}
                  legend={{
    enabled: true,
    font: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    textColor: 'black',
    form: 'square',

  }}
                  rightAxis={{
    labelFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    labelPosition:'outside',
    labelTextColor: 'black',
    labelCount: 4,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
    customAxisMin:0
  }}
                  xAxis={{
    labelPosition:'bottom',
    enabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
  }}
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
                  legend={{
    enabled: true,
    font: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    textColor: 'black',
    form: 'square',

  }}
                  rightAxis={{
    labelFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    labelPosition:'outside',
    labelTextColor: 'black',
    labelCount: 4,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
    customAxisMin:0
  }}
                  xAxis={{
    labelPosition:'bottom',
    enabled: true,
    drawGridLinesEnabled: true,
    drawAxisLineEnabled: true,
  }}
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
                  legend={{
    enabled: true,
    font: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    textColor: 'black',
    form: 'square',

  }}
                  leftAxis={{
    labelFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    labelPosition:'outside',
    labelTextColor: 'black',
    labelCount: 4,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
    customAxisMin:0
  }}
                  xAxis={{
    labelPosition:'bottom',
    enabled: true,
    drawGridLinesEnabled: true,
    drawAxisLineEnabled: true,
  }}
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
        color: '#ff3b30',
        axisDependency: 'left'
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
                  legend={{
    enabled: true,
    font: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    textColor: 'black',
    form: 'square',

  }}
                  rightAxis={{
    labelFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    labelPosition:'outside',
    labelTextColor: 'black',
    labelCount: 4,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
    customAxisMin:0
  }}
                  xAxis={{
    labelPosition:'bottom',
    enabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
  }}
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
          stackLabels: ['label 1','label2'],
          colors: ['#ff3b30','#33ffff']
        },
        {
        yVals: [10,10,10,10,20],
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
  component:AXBarChartBaseExample,
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

  ]
}
