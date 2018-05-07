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

    componentWillMount() {
        this.props.resetForm();
    }

    _onButtonPress() {
        const { name, phone, shift, navigation } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday', navigation });
    }

    render() {

        let paramsFromEmployeeList = this.props.navigation.state.params;
        // alert(`${JSON.stringify(paramsFromEmployeeList)}`);

        return (
            // {...this.props}: take all of the different props EmployeeCreate has been passed and forward them to EmployeeForm
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