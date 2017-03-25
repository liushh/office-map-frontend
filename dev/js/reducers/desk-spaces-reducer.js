import {updateArrayElement} from '../utils/reducer-util'
import {fetchDeskSpaceState} from '../utils/reducer-util'
import {updateDeskSpaceState} from '../utils/reducer-util'
import axios from 'axios';



function createNewDeskSpace(emptySpace1, emptySpace2) {
  var deskSpace = {
    originalSpaceId1: emptySpace1.id,
    originalSpaceId2: emptySpace2.id,

    id: emptySpace1.id + ':' + emptySpace2.id,
    top: (emptySpace1.top === emptySpace2.top) ? emptySpace1.top : Math.min(emptySpace1.top, emptySpace2.top),
    left: (emptySpace1.left === emptySpace2.left) ? emptySpace1.left : Math.min(emptySpace1.left, emptySpace2.left),
    isVertical: (emptySpace1.left === emptySpace2.left),

    ownerId: '',
    ownerName: ''
  };
  return deskSpace;
}

export default function (state=null, action) {
  // console.log('current desk space state output= ', JSON.stringify(state));

  switch(action.type) {
    case 'INIT_DESK_SPACE_STATE':
      console.log('INIT_DESK_SPACE_STATE = ', action.payload);
      return action.payload;
      break;
    case 'CREATE_NEW_DESK_SPACE':
      var deskSpace = createNewDeskSpace(action.payload[0], action.payload[1])
      var index = state.length;

      // console.log('create a new desk = ', deskSpace);
       
      var newState = [
        ...state.slice(0, index),
        deskSpace,
        ...state.slice(index)
      ];
      updateDeskSpaceState(newState);

      return newState;
      break;
    case 'DELETE_DESK_SPACE':
      var index = 0;
      state.forEach((item, i) => {
        if (item.id === action.payload.id) {
          index = i;
          return;
        }
      })
      // console.log('deleting a desk space = ', action.payload);
      var newState = [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
      updateDeskSpaceState(newState);
      return newState;
      break;
    case 'UPDATE_DESK_SPACE':
      // console.log('update selected deskSpace.name = ', action.payload.ownerName);
      var newState = updateArrayElement(state, action.payload);
      updateDeskSpaceState(newState);
      return newState;
      break;
  }
  // console.log('state = ', state);
  return state;
}
