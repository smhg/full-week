# full-week ![CI](https://github.com/smhg/full-week/workflows/CI/badge.svg)
Calculate the start of the *n*th full week of a year or month.

## API

### fullWeek(index, year)

Calculate the start of the nth week of a year

### fullWeek(index, year, month = 0)

Calculate the start of the nth week of a month

### fullWeek(index, year, month = 0, startOfWeek = 1)

Calculate the start of the nth week of a month defining on what day weeks start

> **Note:** `month` and `startOfWeek` parameters use JavaScript's indexing approach (January = 0, first day of the week = 0)

## Usage
```javascript
import fullWeek from 'full-week';

// start of first full week of 2021
fullWeek(1, 2021); // 2021-01-04T00:00:00

// start of 3rd full week of November 2018
fullWeek(3, 2018, 10); // 2018-11-19T00:00:00

const firstFullWeek = (year, month) => fullWeek(1, year, month);

// start of first full week of November 2018
firstFullWeek(2018, 10); // 2018-11-05T00:00:00
// start of first full week of 2019
firstFullWeek(2019); // 2019-01-07T00:00:00

// start of last full week of April 2019
fullWeek(-1, 2019, 4); // 2019-04-22T00:00:00
```
