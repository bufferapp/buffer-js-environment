import { middleware, reducer } from '../src/'

describe('index', () => {
  it('should export middleware', () => {
    expect(middleware).toBeDefined()
  })
  it('should export reducer', () => {
    expect(reducer).toBeDefined()
  })
})
