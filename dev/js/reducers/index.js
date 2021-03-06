import {combineReducers} from 'redux';

import emptySpacesReducer from './empty-spaces-reducer';
import selectedEmptySpacesReducer from './selected-empty-spaces-reducer';
import officesReducer from './offices-reducer';
import selectedOfficeReducer from './selected-office-reducer';
import spaceReducer from './space-reducer';
import selectedSpaceReducer from './selected-space-reducer';
import editRoomReducer from './edit-room-reducer';
import availableSpaceCountReducer from './available-space-count-reducer';

const allReducers = combineReducers({
  emptySpaces: emptySpacesReducer,
  selectedEmptySpaces: selectedEmptySpacesReducer,
  offices: officesReducer,
  selectedOffice: selectedOfficeReducer,
  spaces: spaceReducer,
  selectedSpace: selectedSpaceReducer,
  isRoomEditingMode: editRoomReducer,
  availableSpaceCount: availableSpaceCountReducer
});

export default allReducers;
