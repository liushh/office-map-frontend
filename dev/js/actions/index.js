export const selectEmptySpace = (emptySpace) => {
  console.log('You selected an empty space: ', emptySpace.id);
  
  return {
    type: 'EMPTY_SPACE_SELECTED',
    payload: emptySpace
  };
};

export const unselectEmptySpace = (emptySpace) => {
  console.log('You unslected an empty space: ', emptySpace.id);
  
  return {
    type: 'EMPTY_SPACE_UNSELECTED',
    payload: emptySpace
  };
};
