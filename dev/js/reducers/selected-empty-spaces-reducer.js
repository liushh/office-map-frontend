export default function (state=[], action) {

  switch(action.type) {
    case 'SELECT_EMPTY_SPACE':
      var index = state.length;
      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index)
      ];
      break;
    case 'UNSELECT_EMPTY_SPACE':
      var index = 0;
      state.forEach((item, i) => {
        if (item.id === action.payload.id) {
          index = i;
        }
      })
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
      break;
  }
  return state;
}
