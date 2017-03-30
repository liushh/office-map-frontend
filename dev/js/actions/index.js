export const selectEmptySpace = (emptySpace) => {
  return {
    type: 'SELECT_EMPTY_SPACE',
    payload: emptySpace
  };
};

export const unselectEmptySpace = (emptySpace) => {
  return {
    type: 'UNSELECT_EMPTY_SPACE',
    payload: emptySpace
  };
};

export const initDeskSpaceState = (initialDeskSpaceState) => {
  return {
    type: 'INIT_DESK_SPACE_STATE',
    payload: initialDeskSpaceState
  };
};

export const createNewDeskSpace = (office_id, emptySpace1, emptySpace2) => {
  return {
    type: 'CREATE_NEW_DESK_SPACE',
    payload: {
      office_id: office_id,
      emptySpace1: emptySpace1,
      emptySpace2: emptySpace2
    }
  };
};

export const deleteDeskSpace = (office_id, deskSpace) => {
  return {
    type: 'DELETE_DESK_SPACE',
    payload: {
      office_id: office_id,
      deskSpace: deskSpace
    }
  };
};

export const updateDeskSpace = (office_id, deskSpace) => {
  return {
    type: 'UPDATE_DESK_SPACE',
    payload: {
      office_id: office_id,
      deskSpace: deskSpace
    }
  };
};

export const selectDeskSpace = (deskSpace) => {
  return {
    type: 'SELECT_DESK_SPACE',
    payload: deskSpace
  };
};

export const unselectDeskSpace = () => {
  return {
    type: 'UNSELECT_DESK_SPACE',
    payload: null
  };
};

export const selectOffice = (office) => {
  return {
    type: 'SELECT_OFFICE',
    payload: office
  };
};

export const updateOffices = (offices) => {
  return {
    type: 'UPDATE_OFFICES',
    payload: offices
  };
};
