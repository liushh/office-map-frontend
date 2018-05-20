import {
    CREATE_SPACE_SUCCESS,

    GET_SPACES_SUCCESS,

    DELETE_SPACE_SUCCESS,

    UPDATE_SPACE_SUCCESS
} from '../actions';

export default function (state=null, action) {
    switch(action.type) {
        case CREATE_SPACE_SUCCESS:
            state.push(action.payload);
            return Object.assign([], state);
        case GET_SPACES_SUCCESS:
            return Object.assign([], action.payload);
        case UPDATE_SPACE_SUCCESS:
            return Object.assign([], action.payload);
        case DELETE_SPACE_SUCCESS:
            return Object.assign([], action.payload);
    }
    return state;
}
