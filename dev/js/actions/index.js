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

export const initDeskSpaceState = (initialDeskSpaceState) => {
  console.log('initialDeskSpaceState = ', initialDeskSpaceState);
  
  return {
    type: 'INIT_DESK_SPACE_STATE',
    payload: initialDeskSpaceState
  };
};

export const createNewDeskSpace = (emptySpace1, emptySpace2) => {
  console.log('You are creating a new desk with spaces: ', [emptySpace1, emptySpace2]);
  
  return {
    type: 'CREATE_NEW_DESK_SPACE',
    payload: [emptySpace1, emptySpace2]
  };
};

export const deleteDeskSpace = (deskSpace) => {
  console.log('You are deleting a desk space: ', deskSpace);
  
  return {
    type: 'DELETE_DESK_SPACE',
    payload: deskSpace
  };
};

export const updateDeskSpace = (deskSpace) => {
  console.log('You are updating a new deskspace: ', deskSpace);
  
  return {
    type: 'UPDATE_DESK_SPACE',
    payload: deskSpace
  };
};

export const selectDeskSpace = (deskSpace) => {
  console.log('You selected an desk space: ', deskSpace.id);
  
  return {
    type: 'SELECT_DESK_SPACE',
    payload: deskSpace
  };
};

export const unselectDeskSpace = () => {
  console.log('You unslected the desk space');
  
  return {
    type: 'UNSELECT_DESK_SPACE',
    payload: null
  };
};
