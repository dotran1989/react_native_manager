import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Employee Create';

        return { headerTitle };
    }

    render() {
        return (
            <View>
                <EmployeeForm />
                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
                <Text>Employee Create</Text>
            </View>
        );
    }
};

export default EmployeeCreate;