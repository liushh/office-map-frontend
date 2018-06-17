import {
  SELECT_SPACE,
  UNSELECT_SPACE,
  CREATE_SPACE_SUCCESS
} from '../actions';

export default function (state=null, action) {
    switch(action.type) {
        case CREATE_SPACE_SUCCESS:
            return action.payload;
        case SELECT_SPACE:
            return action.payload;
        case UNSELECT_SPACE:
            return null;
    }
    return state;
};
