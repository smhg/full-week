# full-week [![Build Status](https://travis-ci.org/smhg/full-week.svg?branch=master)](https://travis-ci.org/smhg/full-week)
Calculate the start of the *n*th full week of a year or month.

> **Note** start of the week currently means Monday (ISO)

## Usage
```javascript
import fullWeek from 'full-week';

const firstFullWeek = (year, month) => fullWeek(1, year, month);

firstFullWeek(2018, 10) // 2018-11-05T00:00:00
fullWeek(3, 2018, 10) // 2018-11-19T00:00:00
```
