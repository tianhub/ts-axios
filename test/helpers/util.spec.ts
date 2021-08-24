import { isPlainObject } from '../../src/helpers/util'

describe('判断是否正确', () => {
  test('isPlanObject', () => {
    expect(isPlainObject({})).toBeTruthy()
    expect(isPlainObject(new Date())).toBeFalsy()
  })
})
