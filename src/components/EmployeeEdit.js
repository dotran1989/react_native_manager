import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    static navigationOptions = ({navigation}) => {
        let headerTitle = 'Employee Edit';

        return { headerTitle };
    };

    // call action creator to update and fill value in EmployeeForm
    componentWillMount() {
        _.each(this.props.navigation.state.params, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    _onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.navigation.state.params.uid });
    }

    render() {
        alert(`item: ${JSON.stringify(this.props.navigation.state.params)}`);
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this._onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, actions)(EmployeeEdit);