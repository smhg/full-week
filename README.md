# full-week ![CI](https://github.com/smhg/full-week/workflows/CI/badge.svg)
Calculate the start of the *n*th full week of a year or month.

> **Note:** start of the week [currently](https://github.com/smhg/full-week/issues/1) means Monday (ISO)

> **Note:** month indexing follows JavaScript's approach (January = 0)

## Usage
```javascript
import fullWeek from 'full-week';

fullWeek(3, 2018, 10); // 2018-11-19T00:00:00

const firstFullWeek = (year, month) => fullWeek(1, year, month);

firstFullWeek(2018, 10); // 2018-11-05T00:00:00
firstFullWeek(2019); // 2019-01-07T00:00:00

// last week of the previous month
fullWeek(-1, 2019, 4); // 2019-04-22T00:00:00
```
