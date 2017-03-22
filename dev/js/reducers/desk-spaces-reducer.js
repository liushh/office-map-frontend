
function createNewDeskSpace(emptySpace1, emptySpace2) {
  var deskSpace = {
    originalSpaceId1: emptySpace1.id,
    originalSpaceId2: emptySpace2.id,

    id: emptySpace1.id + ':' + emptySpace2.id,
    top: (emptySpace1.top === emptySpace2.top) ? emptySpace1.top : Math.min(emptySpace1.top, emptySpace2.top),
    left: (emptySpace1.left === emptySpace2.left) ? emptySpace1.left : Math.min(emptySpace1.left, emptySpace2.left),
    isVertical: (emptySpace1.left === emptySpace2.left),

    ownerId: '',
    owerName: ''
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
    // case 'UNSELECT_EMPTY_SPACE':
    //   // var index = state.indexOf(action.payload);
    //   var index = 0;
    //   state.forEach((item, index) => {
    //     if (item.id === action.payload.id) {
    //       return index;
    //     }
    //   })
    //   console.log('unselected index = ', index);
    //   return [
    //     ...state.slice(0, index),
    //     ...state.slice(index + 1)
    // ];
    //   break;
  }
  return state;
}
