import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, FlatList, View, Text, Platform } from 'react-native';
import Button from 'react-native-button';
import * as actions from '../actions';

import EmployeeCreate from './EmployeeCreate';

// import ListItem from './ListItem';

class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Employee List';
        let headerLeft = null;
        let headerRight = (
            <Button
                containerStyle={styles.btnSaveContainerStyle}
                style={styles.btnSaveStyle}
                onPress={() => {
                    console.log('right');
                    navigation.navigate('employeeCreate');
                }}
            >
                Add
            </Button>
        );
        
        return { headerTitle, headerLeft, headerRight };
    };

    constructor(props) {
        super(props);

        // this.employeeFetch = this.employeeFetch.bind(this);
    }

    componentWillMount() {
        console.log(`componentWillMount`);
        this.props.employeeFetch();

        console.log(`this.props: ${JSON.stringify(this.props)}`);
        this._createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(`componentWillReceiveProps`);
        console.log(`this.nextProps: ${JSON.stringify(nextProps)}`);
        this._createDataSource(nextProps);
    }

    // r1 & r2 are two rows that are being compared, the old one and the new one. If they are not the same the rowHasChanged.
    _createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    // _renderRow(employee) {
    //     return <ListItem employee={employee} />;
    // }

    render() {
        return (
            /* <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this._renderRow}
            /> */
            <View>
                <Text>AAAAA</Text>
                <Text>AAAAA</Text>
                <Text>AAAAA</Text>
                <Text>AAAAA</Text>
            </View>
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

const styles = {
    btnSaveContainerStyle: {
        margin: 5, 
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'darkviolet'
    },
    btnSaveStyle: {
        margin: 5,
        fontSize: 15,
        color: 'white'
    }
};

/* const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {... val, uid };
    });
    return { employees };
}; */

// export default connect(mapStateToProps, { employeeFetch }) (EmployeeList);
export default connect(null, actions)(EmployeeList);

/* Based off your explanation in this video, can you confirm I understand this correctly and the following statement is accurate?

we use componentWillReceiveProps to handle the FIRST time we enter this page, aka the first time we ever call 'employeesFetch' in componentWillMount -> this is asynchronous,
so this.props.employees will NOT yet be defined in componentWillMount.
But when we do eventually get the employees, componentWillReceiveProps is called and this.props.employees is defined and we are good. 

When the user leaves this page and comes back, componentWillMount is called again, 
and this time this.props.employees WILL be defined within componentWillMount (because the first async call completed and updated the Redux store). 
Thus, we need to call createDataStore within both lifecycle methods to handle when 'employees' is actually defined. Thanks! */