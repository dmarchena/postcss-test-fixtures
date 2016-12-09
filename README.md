# postcss-test-fixtures

[![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![XO code style][xo-image]][xo-url] ![Required node version][node-image]

> Test your postcss plugin with Jest easily.

## Installation

```
npm i -D postcss-test-fixtures
```

## Usage

* Create this simple test file inside `__tests__`

```
// ES6
import test from 'postcss-test-fixtures'
test.run();

// or ES5
var test = require('postcss-test-fixtures').default;
test.run();
```

* Create your fixtures directory (`/__tests__/fixtures`).

* Add your input and expected output tests (`[fixtureName].css` + `[fixtureName].expected.css`)

* Install jest
```
npm i -D jest
```

* And add a test script to your package.json

```
"scripts": {
  "test": "jest"
}
```

* If you want to report each fixture add turn on jest's `verbose` mode.

```
"jest": {
  "verbose": true
}
```

```
// Output
✓ Transforms fixture: [fixtureName] (Xms)
```

* Enjoy

[travis-image]: https://travis-ci.org/dmarchena/postcss-test-fixtures.svg?branch=master
[travis-url]: https://travis-ci.org/dmarchena/postcss-test-fixtures
[coveralls-image]: https://coveralls.io/repos/dmarchena/postcss-test-fixtures/badge.svg
[coveralls-url]: https://coveralls.io/r/dmarchena/postcss-test-fixtures
[node-image]: https://img.shields.io/badge/node_version-%3E=4-orange.svg
[xo-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo
