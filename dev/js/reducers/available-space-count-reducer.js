import {
    GET_AVAILABLE_SPACE_COUNT_SUCCESS
} from '../actions';



export default function (state=null, action) {
    switch(action.type) {
        case GET_AVAILABLE_SPACE_COUNT_SUCCESS:
            console.log('action.payload = ', action.payload);
            return action.payload;
    }
    return state;
}
