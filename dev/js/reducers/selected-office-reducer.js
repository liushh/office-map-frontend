import {OFFICE_STATES} from '../constants';
import {WL1_OFFICE_ID, WL2_OFFICE_ID, SAN_FRANCISCO} from '../constants';

import {setSelectedOfficeId} from '../utils/local-storage-util'
import {getSelectedOfficeId} from '../utils/local-storage-util'

var selectedOfficeId = getSelectedOfficeId();
var initialState = OFFICE_STATES[2];

if (selectedOfficeId === WL2_OFFICE_ID) {
  initialState = OFFICE_STATES[1];
} else if (selectedOfficeId === SAN_FRANCISCO) {
  initialState = OFFICE_STATES[2];
} else if (selectedOfficeId === null) {
  setSelectedOfficeId(WL1_OFFICE_ID)
}

export default function(state=initialState, action) {
    switch(action.type) {
        case 'SELECT_OFFICE':
            setSelectedOfficeId(action.payload.id)
            return action.payload;
            break;
    }
    return state;
}
