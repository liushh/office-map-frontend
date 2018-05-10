const selectEmptySpace = (emptySpace) => {
  return {
    type: 'SELECT_EMPTY_SPACE',
    payload: emptySpace
  };
};

const unselectEmptySpace = (emptySpace) => {
  return {
    type: 'UNSELECT_EMPTY_SPACE',
    payload: emptySpace
  };
};

const clearSelectedEmptySpaces = emptySpaces => {
  return {
    type: 'CLEAR_SELECTED_EMPTY_SPACES',
    payload: emptySpaces
  };
};


export {
  selectEmptySpace,
  unselectEmptySpace,
  clearSelectedEmptySpaces
};
