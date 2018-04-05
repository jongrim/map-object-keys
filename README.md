# map-object-keys

So you want to map keys of an object and you want to feel like a badass while doing it? Hell yeah, how's this feel?!

```js
const obj = { first: 'Jon', last: 'Grim' };
const fn = str => str.toUpperCase();
const transformedObj = mapObjectKeys(obj, fn);
console.log(transformedObj):
// { FIRST: 'Jon', LAST: 'Grim' }
```

Why is this so cool? Because all the other mapKeys functions out there pass you the value first, and the key second. This prevents you from just pass a function reference when all you want to do is a basic transform like upper case or change to snake case or whatever.

This one still give you the value to, if that's your thing. It'll be passed as the second argument to your callback, so you can still use it in the mapping if you want.

```js
const obj = { first: 'Jon', last: 'Grim' };
const transformedObj = mapObjectKeys(obj, (key, val) => `${key}-${val}`);
console.log(transformedObj):
// { first-Jon: 'Jon', last-Grim: 'Grim' }
