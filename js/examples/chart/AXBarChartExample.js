/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';


const {AXBarChart}=require('react-native-apex-charts');

class AXBarChartExample extends Component {

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
    position: 'aboveChartRight',

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
      [{
        yVals: [10,7,6,9,6],
        label: 'label 1',
        color: '#ff3b30',
      },
      {
        yVals: [8,6,7,10,5],
        label: 'label 2',
        lineWidth: 2,
        color: '#4cd964',
        drawValuesEnabled: false,
      }]
    }
  } />

      </View>;
  }
}


module.exports = {
  title: 'AXBarChartExample',
  description: '柱状图',
  examples: [{
    title: 'AXLineChart',
    render: () => <AXBarChartExample />
  }]
}
