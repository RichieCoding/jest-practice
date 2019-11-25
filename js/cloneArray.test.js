const cloneArray = require('./cloneArray')

test('properly clones array', () => {
  const array = [1, 2, 3]
  expect(cloneArray(array)).toEqual(array) // make sure the array is the same values ex. (1, 2, 3)
  expect(cloneArray(array)).not.toBe(array) // makes sure it returns a clone and not returning the exact same array
})