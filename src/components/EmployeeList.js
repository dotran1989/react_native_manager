import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, FlatList, View, Text, Platform } from 'react-native';
import * as actions from '../actions';
// import ListItem from './ListItem';

class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Employee List';
        
        return { headerTitle };
    };

    constructor(props) {
        super(props);

        // this.employeeFetch = this.employeeFetch.bind(this);
    }

    componentWillMount() {
        this.props.employeeFetch();

        console.log(`this.props: ${JSON.stringify(this.props)}`);
        this._createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this._createDataSource(nextProps);
    }

    _createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    _renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this._renderRow}
            />
        );
    }

    /* render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <FlatList
                    data={}
                    renderItem={({ item, index}) => {
                        return (
                            <FlatListItem item={item} index={index}>
                            </FlatListItem>
                        );
                    }}
                >
                </FlatList>
                <Text>AAA</Text>
            </View>
        );
    } */
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {... val, uid };
    });
    return { employees };
};

export default connect(mapStateToProps, { employeeFetch }) (EmployeeList);