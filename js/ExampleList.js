'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {StyleSheet, View, Text, ListView, TouchableHighlight} from 'react-native';
import {List} from 'react-native-apex-ui';
const ListItem = List.ListItem;

const Examples = [
    require('./examples/chart/AXScatterChartExample'),
    require('./examples/chart/AXGaugeChartExample'),
    require('./examples/chart/AXCombinedChartExample'),
    require('./examples/chart/AXLineChartExample'),
    require('./examples/chart/AXHBarChartExample'),
    require('./examples/chart/AXBarChartExample'),
    require('./examples/chart/AXPieChartExample'),
    require('./examples/ActionSheetExample'),
    require('./examples/TooltipExample'),
    require('./examples/ToptipExample'),
    require('./examples/TagExample'),
    require('./examples/ToastExample'),
    require('./examples/TouchableRippleExample'),

    require('./examples/ChangeUIExample'),

    require('./examples/VectorIconExample'),
    require('./examples/ButtonExample'),
    require('./examples/ListExample'),
    require('./examples/AppHeaderExample'),
    require('./examples/PaperExample'),
    require('./examples/PopoverExample'),
    require('./examples/DialogExample'),
    require('./examples/SideboardExample'),
    require('./examples/HeaderDrawerExample'),

    require('./examples/PureListViewExample'),
    require('./examples/ViewPagerExample'),
    require('./examples/CarouselExample'),


];

const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (h1, h2) => h1 !== h2,
}).cloneWithRows(Examples);

class ExampleList extends Component {
    static title = 'ReactNativeApexUI';

    static contextTypes = {
        uiTheme: PropTypes.object.isRequired,
    };

    _handleRowPress = (module) => {
        this.props.navigator.push({module});
    }

    _renderExampleRow = (module: Object, sectionID, rowID) => {
        return this._renderRow(
            module.title,
            module.description,
            () => this._handleRowPress(module),
            rowID,
        );
    }

    _renderRow = (title, description, handler, rowID) => {
        let isLastRow = rowID == (dataSource.getRowCount() - 1);
        return (
            <ListItem
                title={<ListItemTitle title={title} description={description} />}
                onPress={handler}
                style={styles.row}
                hideSeparator={isLastRow}
            />
        );
    }

    render() {
        return (
            <ListView
                style={styles.list}
                contentContainerStyle={styles.content}
                contentOffset={{y: -20}}
                contentInset={{top: 20, bottom: 60}}
                dataSource={dataSource}
                renderRow={this._renderExampleRow}
            />
        );
    }
}

function ListItemTitle({title, description}) {
    if (description) {
        description =
            <Text style={styles.description}>{description}</Text>
    }
    return (
        <View>
            <Text style={styles.title}>
                {title}
            </Text>
            {description}
        </View>
    );
}

const styles = {
    list: {
        flex: 1,
    },
    content: {
        borderColor: '#d9d9d9',
        borderWidth: StyleSheet.hairlineWidth,
    },
    row: {
        backgroundColor: 'rgba(255,255,255,.95)',
    },
    title: {
        fontSize: 17,
    },
    description: {
        color: '#999',
        marginTop: 5,
    },
};

module.exports = ExampleList;
