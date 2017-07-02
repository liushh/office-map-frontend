import { selectEmptySpace } from '../../js/actions/index.js'

describe('actions', () => {
  it('should return SELECT_EMPTY_SPACE action', () => {
    const payload = {emptySpace: 'emptySpace'}
    const expectedAction = {
      type: 'SELECT_EMPTY_SPACE',
      payload: payload
    }

    expect(selectEmptySpace(payload)).toEqual(expectedAction)
  })
})
