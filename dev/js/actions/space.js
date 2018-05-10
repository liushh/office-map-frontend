import SpaceAPI from '../resources/space';

const CREATE_SPACE_SUCCESS = 'CREATE_SPACE_SUCCESS';
const CREATE_SPACE_FAIL = 'CREATE_SPACE_FAIL';

const GET_SPACES_SUCCESS = 'GET_SPACES_SUCCESS';
const GET_SPACES_FAIL = 'GET_SPACES_FAIL';

const SELECT_SPACE = 'SELECT_SPACE';
const UNSELECT_SPACE = 'UNSELECT_SPACE';
const UPDATE_SPACE = 'UPDATE_SPACE';
const DELETE_SPACE = 'DELETE_SPACE';

const createSpaceSuccess = new_space => {
  return {
    type: CREATE_SPACE_SUCCESS,
    payload: new_space
  };
};

const createSpaceFail = errorMessage => {
  return {
    type: CREATE_SPACE_FAIL,
    payload: errorMessage
  };
};

const createSpace = (officeId, selectedEmptySpaces) => {
  return dispatch => {
    const api = new SpaceAPI();
    return api.createSpace(officeId, selectedEmptySpaces)
      .then(spaces => dispatch(createSpaceSuccess(spaces)))
      .catch(error => dispatch(createSpaceFail(error.message)));
  };
};

const getSpacesSuccess = spaces => {
  return {
    type: GET_SPACES_SUCCESS,
    payload: spaces
  };
};

const getSpacesFail = errorMessage => {
  return {
    type: GET_SPACES_FAIL,
    payload: errorMessage
  };
};

const getSpaces = (officeId) => {
  return dispatch => {
    const api = new SpaceAPI();
    return api.getSpaces(officeId)
      .then(spaces => dispatch(getSpacesSuccess(spaces)))
      .catch(error => dispatch(getSpacesFail(error.message)));
  };
};

const selectSpace = space => {
  console.log('selectSpace = ', space);
  return {
    type: SELECT_SPACE,
    payload: space
  }
};

const unselectSpace = space => {
  return {
    type: UNSELECT_SPACE,
    payload: space
  }
};

const updateSpace = space => {
  return {
    type: UPDATE_SPACE,
    payload: space
  }
};

const deleteSpace = space => {
  return {
    type: DELETE_SPACE,
    payload: space
  }
};

export {
  CREATE_SPACE_SUCCESS,
  CREATE_SPACE_FAIL,
  createSpace,
  createSpaceSuccess,
  createSpaceFail,

  GET_SPACES_SUCCESS,
  GET_SPACES_FAIL,
  getSpaces,
  getSpacesSuccess,
  getSpacesFail,

  SELECT_SPACE,
  selectSpace,

  unselectSpace,
  UNSELECT_SPACE,

  UPDATE_SPACE,
  updateSpace,

  DELETE_SPACE,
  deleteSpace
};
