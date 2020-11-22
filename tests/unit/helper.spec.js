import { api } from '../../src/helpers/helpers'

test('adds 1 + 2 to equal 3', () => {
  expect(api.createbeer('1234')).toBe('http://localhost:3000/beers/1234')
})
