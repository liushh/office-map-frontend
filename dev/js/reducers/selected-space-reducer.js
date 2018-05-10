import {
  SELECT_SPACE,
  UNSELECT_SPACE
} from '../actions';

export default function (state=null, action) {
    switch(action.type) {
        case SELECT_SPACE:
            return action.payload;
        case UNSELECT_SPACE:
            return null;
    }
    return state;
};
