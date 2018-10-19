import { actions as asyncDataFetchActions } from '@bufferapp/async-data-fetch'
import middleware from '../src/middleware'

describe('middleware', () => {
  it('should call next with action', () => {
    const action = { type: 'test' }
    const next = jest.fn()
    const store = { dispatch: jest.fn() }
    middleware(store)(next)(action)
    expect(next).toBeCalledWith(action)
    expect(store.dispatch).not.toBeCalled()
  })

  it('should dispatch fetch environment on APP_INIT', () => {
    const action = { type: 'APP_INIT' }
    const store = { dispatch: jest.fn() }
    middleware(store)(() => {})(action)
    expect(store.dispatch).toBeCalledWith(
      asyncDataFetchActions.fetch({ name: 'environment' }),
    )
  })
})
