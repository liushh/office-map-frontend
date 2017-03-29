import {combineReducers} from 'redux';

import emptySpacesReducer from './empty-spaces-reducer';
import selectedEmptySpacesReducer from './selected-empty-spaces-reducer';
import deskSpacesReducer from './desk-spaces-reducer';
import selectedDeskSpaceReducer from './selected-desk-space-reducer';
import roomSpaceReducer from './room-spaces-reducer';
import officesReducer from './offices-reducer';
import selectedOfficeReducer from './selected-office-reducer';

const allReducers = combineReducers({
  emptySpaces: emptySpacesReducer,
  selectedEmptySpaces: selectedEmptySpacesReducer,
  deskSpaces: deskSpacesReducer,
  selectedDeskSpace: selectedDeskSpaceReducer,
  roomSpaces: roomSpaceReducer,
  offices: officesReducer,
  selectedOffice: selectedOfficeReducer
});

export default allReducers;
