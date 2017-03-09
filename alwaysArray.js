const R = require('ramda');
const expect = require('chai').expect;

const arr = [ 'test' ];
const obj = { a: 'test', b: 'test '};
const notArr = {};
const iAmString = 'test';
const iAmNothing = undefined;

const alwaysArray = R.ifElse(Array.isArray, R.identity, R.always([]));

expect(alwaysArray(arr)).to.eql(['test']);
expect(alwaysArray(obj)).to.eql([]);
expect(alwaysArray(notArr)).to.eql([]);
expect(alwaysArray(iAmString)).to.eql([]);
expect(alwaysArray(iAmNothing)).to.eql([]);
