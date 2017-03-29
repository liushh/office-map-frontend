import {OFFICE_STATES} from '../constants';


// TODO: fetch defail browswer saved option

export default function(state=OFFICE_STATES, action) {
    switch(action.type) {
        case 'UPDATE_OFFICE':
            return action.payload;
            break;
    }
    return state;
}
