const test = require('ava');
const generateToken = require('./generateToken');

test('generating tokens of length 12', (t) => {
  t.plan(1);
  t.is(generateToken(12).length, 12);
});

test('generating tokens of length 16 with only URL friendly characters', (t) => {
  t.plan(2);
  const word = generateToken(16, 1);
  t.false(word.includes('/'));
  t.false(word.includes('+'));
});
