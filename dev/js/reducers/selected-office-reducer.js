import {OFFICE_STATES} from '../constants';
import {WL2_OFFICE_ID} from '../constants';

const initialState = OFFICE_STATES[0];
export default function(state=initialState, action) {
    switch(action.type) {
        case 'SELECT_OFFICE':
            return action.payload;
            break;
    }
    return state;
}
