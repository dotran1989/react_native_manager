import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class FlatListItem extends Component {

    render() {
        const { name } = this.props.item;

        return (
            <TouchableWithoutFeedback 
                onPress={() => {
                    // alert(`item: ${JSON.stringify(this.props)}`);
                    this.props.navigation.navigate('employeeCreate', this.props.item);
                }}
            >
                <View>
                    <Text style={styles.titleStyle}>
                        {name}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default FlatListItem;