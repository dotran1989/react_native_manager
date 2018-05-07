import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Communications from 'react-native-communications';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

    state = { showModal: false };

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
        const { name, phone, shift, navigation } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.navigation.state.params.uid, navigation });
    }

    _onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    render() {
        // alert(`item: ${JSON.stringify(this.props.navigation.state.params)}`);
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button onPress={this._onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this._onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button
                        onPress={() => this.setState({ showModal: !this.state.showModal })}
                    >
                        Delete
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, actions)(EmployeeEdit);