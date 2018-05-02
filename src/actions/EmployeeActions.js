import firebase from 'firebase';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeFetch = () => {
    const { currentUser } = firebase.auth();

    // return (dispatch) => {
    //     firebase.database().ref(`/users/${currentUser.uid}/employees`)
    //         .on('value')
    // }
}