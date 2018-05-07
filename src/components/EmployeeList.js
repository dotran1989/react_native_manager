import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, FlatList, View, Text, Platform } from 'react-native';
import Button from 'react-native-button';
import * as actions from '../actions';
// import ListItem from './ListItem';
import FlatListItem from './FlatListItem';

import EmployeeCreate from './EmployeeCreate';

// import ListItem from './ListItem';

class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => {

        const { params = {} } = navigation.state;

        console.log(`params: ${JSON.stringify(params)}`);

        let headerTitle = 'Employee List';
        let headerTitleStyle = { 
            alignSelf: 'center',
            textAlign: 'center',
            width: '65%',
            color: 'white'
        };
        let headerStyle = {
            backgroundColor: 'blue'
        };
        let headerLeft = (
            <View>
                <Button
                    containerStyle={styles.btnSaveContainerStyle}
                    style={styles.btnSaveStyle}
                    onPress={() => {
                        params.logOut();
                    }}
                >
                    Logout
                </Button>
            </View>
        );
        let headerRight = (
            <View>
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
            </View>
        );
        
        return { headerTitle, headerTitleStyle, headerStyle, headerLeft, headerRight };
    };

    constructor(props) {
        super(props);

    }

    _logOut() {
        const { navigation } = this.props;

        this.props.logOut({ navigation });
    }

    componentWillMount() {
        console.log(`componentWillMount`);
        this.props.employeeFetch();

        // console.log(`this.props: ${JSON.stringify(this.props)}`);
    }

    componentDidMount() {
        this.props.navigation.setParams({ logOut: this._logOut.bind(this) });
    }

    componentWillReceiveProps(nextProps) {
        console.log(`componentWillReceiveProps`);
        // console.log(`this.nextProps: ${JSON.stringify(nextProps)}`);
    }

    render() {

        const { employees } = this.props;
        // console.log(`render - employees ${JSON.stringify(employees)}`);
        // console.log(`list render: ${JSON.stringify(this.props)}`);
        console.log(this.props);
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <FlatList
                    data={employees}
                    renderItem={({ item, index}) => {
                        return (
                            <FlatListItem item={item} index={index} navigation={this.props.navigation}>
                            </FlatListItem>
                        );
                    }}
                    keyExtractor={( item, index ) => item.name}
                >
                </FlatList>
            </View>
        );
    }
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

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => { // convert object 'state.employees' to array
        // console.log(`val: ${JSON.stringify(val)} + id: ${JSON.stringify(uid)}`);
        return {... val, uid }; // { shift: 'Monday', name: 's', id: '1j2ksj'}
    });
    // console.log(`employees: ${JSON.stringify(employees)}`);
    return { employees }; // {employees: employees} not 'return employees'
};

export default connect(mapStateToProps, actions)(EmployeeList);

/* Based off your explanation in this video, can you confirm I understand this correctly and the following statement is accurate?

we use componentWillReceiveProps to handle the FIRST time we enter this page, aka the first time we ever call 'employeesFetch' in componentWillMount -> this is asynchronous,
so this.props.employees will NOT yet be defined in componentWillMount.
But when we do eventually get the employees, componentWillReceiveProps is called and this.props.employees is defined and we are good. 

When the user leaves this page and comes back, componentWillMount is called again, 
and this time this.props.employees WILL be defined within componentWillMount (because the first async call completed and updated the Redux store). 
Thus, we need to call createDataStore within both lifecycle methods to handle when 'employees' is actually defined. Thanks! */

/*  state.employees:

action:{  
    "type":"employee_fetch_success",
    "payload":{  
       "-Kv2UCkDZBocFgYC4Gx7":{  
          "name":"Peter",
          "phone":7777,
          "shift":"Monday"
       },
       "-Kv2UCkDZBocFgYC4Gx8":{  
          "name":"Jane",
          "phone":5555,
          "shift":"Friday"
       },
       "-LBdU-y_5SyMiHBqyDWG":{  
          "name":"aaa",
          "phone":"111111",
          "shift":"Thursday"
       }
    }
 } */

 /* 1. First render
 employees: []
componentWillMount
this.props: {"navigation":{"state":{"routeName":"employeeList","key":"id-1525422338985-1"}},"employees":[]}
 
 2. Dispatch action

 action:{  
   "type":"employee_fetch_success",
   "payload":{  
      "-Kv2UCkDZBocFgYC4Gx7":{  
         "name":"Peter",
         "phone":7777,
         "shift":"Monday"
      },
      "-Kv2UCkDZBocFgYC4Gx8":{  
         "name":"Jane",
         "phone":5555,
         "shift":"Friday"
      },
      "-LBdU-y_5SyMiHBqyDWG":{  
         "name":"aaa",
         "phone":"111111",
         "shift":"Thursday"
      }
   }
}

3. Re-render component

val: {"name":"Peter","phone":7777,"shift":"Monday"} + id: "-Kv2UCkDZBocFgYC4Gx7"
val: {"name":"Jane","phone":5555,"shift":"Friday"} + id: "-Kv2UCkDZBocFgYC4Gx8"
val: {"name":"aaa","phone":"111111","shift":"Thursday"} + id: "-LBdU-y_5SyMiHBqyDWG"

employees: [{"name":"Peter","phone":7777,"shift":"Monday","uid":"-Kv2UCkDZBocFgYC4Gx7"},{"name":"Jane","phone":5555,"shift":"Friday","uid":"-Kv2UCkDZBocFgYC4Gx8"},{"name":"aaa","phone":"111111","shift":"Thursday","uid":"-LBdU-y_5SyMiHBqyDWG"}]

componentWillReceiveProps
{  
   "navigation":{  
      "state":{  
         "routeName":"employeeList",
         "key":"id-1525422338985-1"
      }
   },
   "employees":[  
      {  
         "name":"Peter",
         "phone":7777,
         "shift":"Monday",
         "uid":"-Kv2UCkDZBocFgYC4Gx7"
      },
      {  
         "name":"Jane",
         "phone":5555,
         "shift":"Friday",
         "uid":"-Kv2UCkDZBocFgYC4Gx8"
      },
      {  
         "name":"aaa",
         "phone":"111111",
         "shift":"Thursday",
         "uid":"-LBdU-y_5SyMiHBqyDWG"
      }
   ]
}


 */