import SpaceAPI from '../resources/space';

const CREATE_SPACE_SUCCESS = 'CREATE_SPACE_SUCCESS';
const CREATE_SPACE_FAIL = 'CREATE_SPACE_FAIL';

const GET_SPACES_SUCCESS = 'GET_SPACES_SUCCESS';
const GET_SPACES_FAIL = 'GET_SPACES_FAIL';

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
      .then(({ new_space }) => dispatch(createSpaceSuccess(new_space)))
      .catch(error => dispatch(createSpaceFail(error.message)));
  };
};

const getSpacesSuccess = spaces => {
  console.log('fetched spaces = ', spaces)
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
      .then((spaces) => dispatch(getSpacesSuccess(spaces)))
      .catch(error => dispatch(getSpacesFail(error.message)));
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
  getSpacesFail
};
