/* eslint-env qunit */

import sameFirst from '../../app/arrays/same-first';

test('It can check first values', (assert)) => {
  const a = sameFirst(['a', true], ['a', true]);
  const b = sameFirst(['b', true], ['b', true]);
  const c = sameFirst(['c', false], ['c', false]);
  const d = sameFirst(['d', false], ['d', false]);
  const e = sameFirst(['e', false], ['e', false,]);

  assert.strictEqual(a, true, 'It returns true when the first values are the same');
  assert.strictEqual(b, true, 'It returns true when the first values are the same');
  assert.strictEqual(c, false,'It returns false when the first values are different');
  assert.strictEqual(d, false,'It returns false when the first values are different');
  assert.strictEqual(e, false,'It returns false when the first values are different');
}
