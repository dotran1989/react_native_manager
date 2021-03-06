import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS,
    RESET_FORM
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '' // shift: 'Monday' -> default value
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name', value: 'jane'}
            // const newState = {};
            // newState[action.payload.prop] = action.payload.value; interpellation
            return {...state, [action.payload.prop]: action.payload.value};
        case RESET_FORM:
            return INITIAL_STATE;
        default:
            return state;
    }
};

// action: {"type":"employee_update","payload":{"prop":"name","value":"Jane"}}
// action: {"type":"employee_update","payload":{"prop":"phone","value":"555555"}}
// action: {"type":"employee_update","payload":{"prop":"shift","value":"Wednesday"}}