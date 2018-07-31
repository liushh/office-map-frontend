import SpaceAPI from '../resources/space';

const CREATE_SPACE_SUCCESS = 'CREATE_SPACE_SUCCESS';
const CREATE_SPACE_FAIL = 'CREATE_SPACE_FAIL';

const GET_SPACES_SUCCESS = 'GET_SPACES_SUCCESS';
const GET_SPACES_FAIL = 'GET_SPACES_FAIL';

const SELECT_SPACE = 'SELECT_SPACE';
const UNSELECT_SPACE = 'UNSELECT_SPACE';

const UPDATE_SPACE_SUCCESS = 'UPDATE_SPACE_SUCCESS';
const UPDATE_SPACE_FAIL = 'UPDATE_SPACE_FAIL';

const DELETE_SPACE_SUCCESS = 'DELETE_SPACE_SUCCESS';
const DELETE_SPACE_FAIL = 'DELETE_SPACE_FAIL';

const GET_AVAILABLE_SPACE_COUNT_SUCCESS = 'GET_AVAILABLE_SPACE_COUNT_SUCCESS';
const GET_AVAILABLE_SPACE_COUNT_FAIL = 'GET_AVAILABLE_SPACE_COUNT_FAIL';

const createSpaceSuccess = newSpaces => {
  return {
    type: CREATE_SPACE_SUCCESS,
    payload: newSpaces
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
      .then(newSpaces => dispatch(createSpaceSuccess(newSpaces)))
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

const updateSpaceSuccess = spaces => {
  return {
    type: UPDATE_SPACE_SUCCESS,
    payload: spaces
  }
};

const updateSpaceFail = errorMessage => {
  return {
    type: UPDATE_SPACE_FAIL,
    payload: errorMessage
  }
};

const updateSpace = space => {
  return dispatch => {
    const api = new SpaceAPI();
    return api.updateSpace(space)
      .then(spaces => dispatch(updateSpaceSuccess(spaces)))
      .catch(error => dispatch(updateSpaceFail(error.message)));
  };
};

const deleteSpaceSuccess = spaces => {
  return {
    type: DELETE_SPACE_SUCCESS,
    payload: spaces
  };
};

const deleteSpaceFail = errorMessage => {
  return {
    type: DELETE_SPACE_FAIL,
    payload: errorMessage
  };
};

const deleteSpace = (officeId, selectedSpaceId) => {
  return dispatch => {
    const api = new SpaceAPI();
    return api.deleteSpace(officeId, selectedSpaceId)
      .then(spaces => dispatch(deleteSpaceSuccess(spaces)))
      .catch(error => dispatch(deleteSpaceFail(error.message)));
  };
};


const getAvalaibleSpaceCountSuccess = availableSapceCount => {
  return {
    type: GET_AVAILABLE_SPACE_COUNT_SUCCESS,
    payload: availableSapceCount
  };
};

const getAvalaibleSpaceCountFail = errorMessage => {
  return {
    type: GET_AVAILABLE_SPACE_COUNT_FAIL,
    payload: errorMessage
  };
};

const getAvailableSpaceCount = officeId => {
  return dispatch => {
    const api = new SpaceAPI();
    return api.getAvailableSpaceCount(officeId)
      .then(spaces => dispatch(getAvalaibleSpaceCountSuccess(spaces)))
      .catch(error => dispatch(getAvalaibleSpaceCountFail(error.message)));
  };
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

  UPDATE_SPACE_SUCCESS,
  UPDATE_SPACE_FAIL,
  updateSpace,
  updateSpaceSuccess,
  updateSpaceFail,

  DELETE_SPACE_SUCCESS,
  DELETE_SPACE_FAIL,
  deleteSpace,
  deleteSpaceSuccess,
  deleteSpaceFail,

  GET_AVAILABLE_SPACE_COUNT_SUCCESS,
  GET_AVAILABLE_SPACE_COUNT_FAIL,
  getAvailableSpaceCount,
  getAvalaibleSpaceCountSuccess,
  getAvalaibleSpaceCountFail
};
