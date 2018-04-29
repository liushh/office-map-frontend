export default function (state=[], action) {
  switch(action.type) {
    case 'SELECT_EMPTY_SPACE':
      state.push(action.payload);
      return Object.assign([], state);
    case 'UNSELECT_EMPTY_SPACE':
      var index = 0;
      state.forEach((item, i) => {

        if (item.id === action.payload.id) {
          index = i;
          state.splice(index, 1);
        }
      })
      return Object.assign([], state);
    case 'CLEAR_SELECTED_EMPTY_SPACES':
      return []
  }
  return state;
}
