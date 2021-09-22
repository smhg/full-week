import assert from 'assert';
import fullWeek from '../src/index.js';

describe('fullWeek(idx, year)', function () {
  it('should return start of first full week', function () {
    assert.deepStrictEqual(fullWeek(1, 2018), new Date(2018, 0, 1));
    assert.deepStrictEqual(fullWeek(1, 2021), new Date(2021, 0, 4));
  });

  it('should return start of second full week', function () {
    assert.deepStrictEqual(fullWeek(2, 2018), new Date(2018, 0, 8));
  });

  it('should return start of last full week of previous year', function () {
    assert.deepStrictEqual(fullWeek(-1, 2018), new Date(2017, 11, 25));
  });

  it('should return start of second to last full week of previous year', function () {
    assert.deepStrictEqual(fullWeek(-2, 2019), new Date(2018, 11, 17));
  });
});

describe('fullWeek(idx, year, month)', function () {
  it('should return start of first full week', function () {
    assert.deepStrictEqual(fullWeek(1, 2018, 0), new Date(2018, 0, 1));
    assert.deepStrictEqual(fullWeek(1, 2018, 7), new Date(2018, 7, 6));
  });

  it('should return start of second full week', function () {
    assert.deepStrictEqual(fullWeek(2, 2018, 7), new Date(2018, 7, 13));
  });

  it('should return start of last full week of previous month', function () {
    assert.deepStrictEqual(fullWeek(-1, 2018, 8), new Date(2018, 7, 20));
  });

  it('should return start of second to last full week of previous month', function () {
    assert.deepStrictEqual(fullWeek(-2, 2018, 8), new Date(2018, 7, 13));
  });
});

describe('fullWeek(idx, year, month, startOfWeek)', function () {
  it('should return start of first full week with weeks starting on Sundays', function () {
    assert.deepStrictEqual(fullWeek(1, 2018, 0, 0), new Date(2018, 0, 7));
    assert.deepStrictEqual(fullWeek(1, 2020, 9, 0), new Date(2020, 9, 4));
  });

  it('should return start of second full week with weeks starting on Sundays', function () {
    assert.deepStrictEqual(fullWeek(2, 2018, 0, 0), new Date(2018, 0, 14));
    assert.deepStrictEqual(fullWeek(2, 2020, 9, 0), new Date(2020, 9, 11));
  });

  it('should return start of first full week with weeks starting on Saturdays', function () {
    assert.deepStrictEqual(fullWeek(1, 2018, 0, 6), new Date(2018, 0, 6));
    assert.deepStrictEqual(fullWeek(1, 2020, 9, 6), new Date(2020, 9, 3));
  });

  it('should return start of second full week with weeks starting on Saturdays', function () {
    assert.deepStrictEqual(fullWeek(2, 2018, 0, 6), new Date(2018, 0, 13));
    assert.deepStrictEqual(fullWeek(2, 2020, 9, 6), new Date(2020, 9, 10));
  });
});
