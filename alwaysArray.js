const R = require('ramda');
const expect = require('chai').expect;

const arr = [ 'test' ];
const obj = { a: 'test', b: 'test '};
const notArr = {};
const iAmString = 'test';
const iAmNothing = undefined;

const EMPTY_ARRAY = Object.freeze([]);
const alwaysArray = R.ifElse(Array.isArray, R.identity, R.always(EMPTY_ARRAY));

expect(alwaysArray(arr)).to.eql(['test']);
expect(alwaysArray(obj)).to.eql([]);
expect(alwaysArray(notArr)).to.eql([]);
expect(alwaysArray(iAmString)).to.eql([]);
expect(alwaysArray(iAmNothing)).to.eql([]);
expect(alwaysArray('test') === alwaysArray({})).to.be.true;