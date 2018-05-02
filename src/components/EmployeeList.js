import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeeFetch } from '../actions';
// import ListItem from './ListItem';

class EmployeeList extends Component {
    /* componentWillMount() {
        this.props.employeeFetch();

        this.createDataSource(this.props);
    } */
    render() {
        return (
            <View>
                <Text>AAA</Text>
            </View>
        );
    }
}

export default EmployeeList;