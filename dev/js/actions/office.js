const selectOffice = (office) => {
  console.log('office = ', office);
  return {
    type: 'SELECT_OFFICE',
    payload: office
  };
};

export {
  selectOffice
};
