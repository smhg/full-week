# full-week [![Build Status](https://travis-ci.org/smhg/full-week.svg?branch=master)](https://travis-ci.org/smhg/full-week)
Calculate the start of the *n*th full week of a year or month.

> **Note** start of the week [currently](https://github.com/smhg/full-week/issues/1) means Monday (ISO)

## Usage
```javascript
import fullWeek from 'full-week';

fullWeek(3, 2018, 10) // 2018-11-19T00:00:00

const firstFullWeek = (year, month) => fullWeek(1, year, month);

firstFullWeek(2018, 10) // 2018-11-05T00:00:00
firstFullWeek(2019) // 2019-01-07T00:00:00
```
