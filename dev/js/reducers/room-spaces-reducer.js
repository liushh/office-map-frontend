import {ROOM_SPACE_STATES} from '../constants';
import {getSelectedOfficeId} from '../utils/local-storage-util'

var selectedOfficeId = getSelectedOfficeId();
var initialState = selectedOfficeId ? ROOM_SPACE_STATES[selectedOfficeId] : ROOM_SPACE_STATES.wl2_gdl;

export default function(state=initialState, action) {
    return state;
}
