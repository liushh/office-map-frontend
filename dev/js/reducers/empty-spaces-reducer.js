import {updateArrayElement} from '../utils/reducer-util'

const row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const matrix = [];
for (var i = 0; i < 20; i++) {
  matrix.push(row);
}
const initialState = [];

const initialTop = 300;
const initialLeft = 100;

const spaceHeight = 25;
const spacewidth = 25;

matrix.forEach(function(row, rowIndex) {
  row.forEach(function(item, columnIndex) {
    const id = rowIndex + '_' + columnIndex;
    const top = initialTop + rowIndex * spaceHeight;
    const left = initialLeft + columnIndex * spacewidth;

    const newStateElement = {
      id: id,
      top: top,
      left: left
    };

    initialState.push(newStateElement);
  })
});

export default function (state=initialState, action) {

  switch(action.type) {
    case 'SELECT_EMPTY_SPACE':
      action.payload.isSelected = true;
      return updateArrayElement(state, action.payload);
      break;
    case 'UNSELECT_EMPTY_SPACE':
      action.payload.isSelected = false;
      return updateArrayElement(state, action.payload);
      break;
  }
  return state;
}
