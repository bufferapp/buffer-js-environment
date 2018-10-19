import deepFreeze from 'deep-freeze'
import reducer from '../src/reducer'

describe('reducer', () => {
  it('should return initialState', () => {
    expect(reducer(undefined, { type: 'INIT' })).toEqual({
      environment: 'production',
    })
  })

  it('should handle environment fetch action', () => {
    const stateBefore = deepFreeze({
      environment: 'green',
    })
    const action = deepFreeze({
      type: 'environment_FETCH_SUCCESS',
      result: {
        environment: 'blue',
      },
    })
    const stateAfter = {
      environment: 'blue',
    }
    expect(reducer(stateBefore, action)).toEqual(stateAfter)
  })
})
