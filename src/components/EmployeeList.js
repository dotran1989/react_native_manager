import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text, Platform } from 'react-native';
import { employeeFetch } from '../actions';
// import ListItem from './ListItem';

class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Employee List';
        
        return { headerTitle };
    };

    /* componentWillMount() {
        this.props.employeeFetch();

        this.createDataSource(this.props);
    } */
    render() {
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
    }
}

export default EmployeeList;