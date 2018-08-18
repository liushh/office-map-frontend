import {
    GET_AVAILABLE_SPACE_COUNT_SUCCESS
} from '../actions';



export default function (state=null, action) {
    switch(action.type) {
        case GET_AVAILABLE_SPACE_COUNT_SUCCESS:
            return action.payload;
    }
    return state;
}
