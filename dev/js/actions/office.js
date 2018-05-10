const selectOffice = (office) => {
  return {
    type: 'SELECT_OFFICE',
    payload: office
  };
};

const updateOffices = (offices) => {
  return {
    type: 'UPDATE_OFFICES',
    payload: offices
  };
};

export {
  selectOffice,
  updateOffices
};
