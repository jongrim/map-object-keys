const mapObjectKeys = require('../index');

test('mapObjectKeys calls the function with each key and value', () => {
  const fn = (key, val) => `${key.toUpperCase()}-${val}`;
  const obj = { firstName: 'Jon', lastName: 'Grim' };

  const transformedObj = mapObjectKeys(obj, fn);
  expect(transformedObj).toEqual({ "FIRSTNAME-Jon": 'Jon', "LASTNAME-Grim": 'Grim' });
});
