import {
    GET_AVAILABLE_SPACE_COUNT_SUCCESS
} from '../actions';

export default function (state=null, action) {
    switch(action.type) {
        case GET_AVAILABLE_SPACE_COUNT_SUCCESS:
            state.push(action.payload);
            return Object.assign([], state);
    }
    return state;
}
