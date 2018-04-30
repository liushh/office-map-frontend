import { createNewSpace } from '../resources/index'
import {
    CREATE_SPACE_SUCCESS,
    CREATE_SPACE_FAIL,

    GET_SPACES_SUCCESS,
    GET_SPACES_FAIL
} from '../actions/space';

export default function (state=null, action) {
    console.log('action.type = ', action.type)
    switch(action.type) {
        case CREATE_SPACE_SUCCESS:
            state.push(action.payload);
            return Object.assign([], state);
        case GET_SPACES_SUCCESS:
            console.log('GET_SPACES_SUCCESS = ', action.payload);
            return Object.assign([], action.payload);
    }
    return state;
}
