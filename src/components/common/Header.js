// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
// 'props' get value from parent component (index.android.js) is 'Albums'
const Header = (props) => {
    const { textStyle, viewStyle } = style;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const style = {
    viewStyle: {
        backgroundColor: '#6699ff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20},
        shadowOpacity: 0.9
    },
    textStyle: {
        fontSize: 20
    }
};
// Make the component available to other parts of the app
export { Header };