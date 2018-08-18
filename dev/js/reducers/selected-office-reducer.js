import {OFFICE_STATES} from '../constants';
import {GDL_1_ID, GDL_2_ID, SAN_FRANCISCO_ID} from '../constants';

import {
  setSelectedOfficeId,
  getSelectedOfficeId
} from '../utils/local-storage-util'

const selectedOfficeId = getSelectedOfficeId();
const initialState = OFFICE_STATES[selectedOfficeId];

if (selectedOfficeId === null) {
  setSelectedOfficeId(GDL_1_ID)
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
