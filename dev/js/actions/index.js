export const selectEmptySpace = (emptySpace) => {
  console.log('You selected an empty space: ', emptySpace.id);
  
  return {
    type: 'SELECT_EMPTY_SPACE',
    payload: emptySpace
  };
};

export const unselectEmptySpace = (emptySpace) => {
  console.log('You unslected an empty space: ', emptySpace.id);
  
  return {
    type: 'UNSELECT_EMPTY_SPACE',
    payload: emptySpace
  };
};

export const createNewDeskSpace = (emptySpace1, emptySpace2) => {
  console.log('You are creating a new desk with spaces: ', [emptySpace1, emptySpace2]);
  
  return {
    type: 'CREATE_NEW_DESK_SPACE',
    payload: [emptySpace1, emptySpace2]
  };
};
