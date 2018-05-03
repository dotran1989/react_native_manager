import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button } from './common';

class EmployeeCreate extends Component {
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Employee Create';

        return { headerTitle };
    }

    render() {
        return (
            <Text>Employee Create</Text>
        );
    }
};

export default EmployeeCreate;