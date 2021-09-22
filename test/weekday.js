import assert from 'assert';
import weekday from '../src/weekday.js';

describe('getWeekday()', function () {
  const monday = new Date(2020, 9, 26);
  const saturday = new Date(2020, 9, 24);
  const sunday = new Date(2020, 9, 25);

  it('should default to weeks starting on Mondays (ISO)', function () {
    assert.deepStrictEqual(weekday(monday), 0);
    assert.deepStrictEqual(weekday(saturday), 5);
    assert.deepStrictEqual(weekday(sunday), 6);
  });

  it('should handle weeks starting on Sundays', function () {
    assert.deepStrictEqual(weekday(monday, 0), 1);
    assert.deepStrictEqual(weekday(saturday, 0), 6);
    assert.deepStrictEqual(weekday(sunday, 0), 0);
  });
});
