import SpaceAPI from '../resources/space';

const CREATE_SPACE_SUCCESS = 'CREATE_SPACE_SUCCESS';
const CREATE_SPACE_FAIL = 'CREATE_SPACE_FAIL';

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
    console.log('SpaceAPI = ', SpaceAPI);
    const api = new SpaceAPI();
    return api.createSpace(officeId, selectedEmptySpaces)
      .then(({ new_space }) => dispatch(createSpaceSuccess(new_space)))
      .catch(error => dispatch(createSpaceFail(error.message)));
  };
};

export {
  CREATE_SPACE_SUCCESS,
  CREATE_SPACE_FAIL,
  createSpaceSuccess,
  createSpaceFail,
  createSpace
};
