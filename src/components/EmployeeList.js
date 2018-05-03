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

    // componentWillMount() {
    //     // this.props.employeeFetch();

    //     console.log(`this.props: ${JSON.stringify(this.props)}`);
    //     this._createDataSource(this.props);
    // }

    // componentWillReceiveProps(nextProps) {
    //     this._createDataSource(nextProps);
    // }

    // _createDataSource({ employees }) {
    //     const ds = new ListView.DataSource({
    //         rowHasChanged: (r1, r2) => r1 !== r2
    //     });

    //     this.dataSource = ds.cloneWithRows(employees);
    // }

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
export default EmployeeList;