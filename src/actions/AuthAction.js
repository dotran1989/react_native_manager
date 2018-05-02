import firebase from 'firebase';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';
import EmployeeList from '../components/EmployeeList';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

/* var emailChanged = exports.emailChanged = function emailChanged(text) {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
}; */

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
};

// Redux Thunk handle any type of asynchronous action creators
export const loginUser = ({ email, password, navigation }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user, navigation))
        .catch((error) => {
            console.log('error: ' + error);
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user, navigation))
            .catch(() => loginUserFail(dispatch));
        });
    }
};

/* var loginUser = exports.loginUser = function loginUser(_ref) {
    var email = _ref.email,
        password = _ref.password,
        navigation = _ref.navigation;

    return function (dispatch) {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
            return loginUserSuccess(dispatch, user, navigation);
        }).catch(function (error) {
            console.log('error: ' + error);
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
                return loginUserSuccess(dispatch, user, navigation);
            }).catch(function () {
                return loginUserFail(dispatch);
            });
        });
    };
}; */

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user, navigation) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    navigation.navigate('employeeList');
    //TODO: navigate to EmployeeList screen by key
    // Actions.main();
}

