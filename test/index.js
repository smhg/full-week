import assert from 'assert';
import fullWeek from '../src';

describe('fullWeek', () => {
  it('should return start of first full week of year', () => {
    assert.deepStrictEqual(fullWeek(1, 2018), new Date(2018, 0, 1));
  });

  it('should return start of second full week of year', () => {
    assert.deepStrictEqual(fullWeek(2, 2018), new Date(2018, 0, 8));
  });

  it('should return start of last full week of previous year', () => {
    assert.deepStrictEqual(fullWeek(-1, 2018), new Date(2017, 11, 25));
  });

  it('should return start of third to last full week of previous year', () => {
    assert.deepStrictEqual(fullWeek(-3, 2019), new Date(2018, 11, 10));
  });

  it('should return start of first full week of month', () => {
    assert.deepStrictEqual(fullWeek(1, 2018, 0), new Date(2018, 0, 1));
    assert.deepStrictEqual(fullWeek(1, 2018, 7), new Date(2018, 7, 6));
  });

  it('should return start of second full week of month', () => {
    assert.deepStrictEqual(fullWeek(2, 2018, 7), new Date(2018, 7, 13));
  });

  it('should return start of last full week of previous month', () => {
    assert.deepStrictEqual(fullWeek(-1, 2018, 8), new Date(2018, 7, 20));
  });

  it('should return start of second to last full week of previous month', () => {
    assert.deepStrictEqual(fullWeek(-2, 2018, 8), new Date(2018, 7, 13));
  });
});
