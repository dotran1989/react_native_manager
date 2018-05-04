import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import * as actions from '../actions';

class EmployeeCreate extends Component {
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Employee Create';

        return { headerTitle };
    }

    _onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <View>
                <EmployeeForm />
                <CardSection>
                    <Button
                        onPress={this._onButtonPress.bind(this)}
                    >
                        Create
                    </Button>
                </CardSection>
            </View>
        );
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, actions)(EmployeeCreate);