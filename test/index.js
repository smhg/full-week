import assert from 'assert';
import fullWeek from '../src';

describe('fullWeek', () => {
  it('should return start of first full week of year', () => {
    assert.deepStrictEqual(fullWeek(1, 2018), new Date(2018, 0, 1));
  });

  it('should return start of second full week of year', () => {
    assert.deepStrictEqual(fullWeek(2, 2018), new Date(2018, 0, 8));
  });

  it('should return start of first full week of month', () => {
    assert.deepStrictEqual(fullWeek(1, 2018, 7), new Date(2018, 7, 6));
  });

  it('should return start of second full week of month', () => {
    assert.deepStrictEqual(fullWeek(2, 2018, 7), new Date(2018, 7, 13));
  });
});
