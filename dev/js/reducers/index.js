import {combineReducers} from 'redux';

import emptySpacesReducer from './empty-spaces-reducer';
import selectedEmptySpacesReducer from './selected-empty-spaces-reducer';
import deskSpacesReducer from './desk-spaces-reducer';
import selectedDeskSpaceReducer from './selected-desk-space-reducer';

const allReducers = combineReducers({
  emptySpaces: emptySpacesReducer,
  selectedEmptySpaces: selectedEmptySpacesReducer,
  deskSpaces: deskSpacesReducer,
  selectedDeskSpace: selectedDeskSpaceReducer,
});

export default allReducers;
