import {updateArrayElement} from '../utils/reducer-util'

function createNewDeskSpace(emptySpace1, emptySpace2) {
  var deskSpace = {
    originalSpaceId1: emptySpace1.id,
    originalSpaceId2: emptySpace2.id,

    id: emptySpace1.id + ':' + emptySpace2.id,
    top: (emptySpace1.top === emptySpace2.top) ? emptySpace1.top : Math.min(emptySpace1.top, emptySpace2.top),
    left: (emptySpace1.left === emptySpace2.left) ? emptySpace1.left : Math.min(emptySpace1.left, emptySpace2.left),
    isVertical: (emptySpace1.left === emptySpace2.left),

    ownerId: '',
    ownerName: 'free'
  };

  return deskSpace;
}

export default function (state=[], action) {

  switch(action.type) {
    case 'CREATE_NEW_DESK_SPACE':
      var deskSpace = createNewDeskSpace(action.payload[0], action.payload[1])
      var index = state.length;

      console.log('create a new desk = ', deskSpace);
      return [
        ...state.slice(0, index),
        deskSpace,
        ...state.slice(index)
      ];
      break;
    case 'DELETE_DESK_SPACE':
      var index = 0;
      state.forEach((item, i) => {
        if (item.id === action.payload.id) {
          index = i;
          return;
        }
      })
      console.log('deleting a desk space = ', action.payload);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
      break;
    case 'UPDATE_DESK_SPACE':
      console.log('update selected deskSpace.name = ', action.payload.ownerName);
      return updateArrayElement(state, action.payload);
      break;
  }
  return state;
}
