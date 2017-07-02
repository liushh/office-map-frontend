import  officesReducer  from '../../js/reducers/offices-reducer.js'


describe('Test OfficesReducers', () => {
  it('should return the initial state', () => {
    const expectedState = null;
    expect(officesReducer(null, {})).toEqual(expectedState)
  })
})
