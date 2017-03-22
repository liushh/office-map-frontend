export default function (state=[], action) {

  switch(action.type) {
    case 'EMPTY_SPACE_SELECTED':
      var index = state.length;
      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index)
      ];
      break;
    case 'EMPTY_SPACE_UNSELECTED':
      // var index = state.indexOf(action.payload);
      var index = 0;
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          return index;
        }
      })
      console.log('unselected index = ', index);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
    ];
      break;
  }
  return state;
}
