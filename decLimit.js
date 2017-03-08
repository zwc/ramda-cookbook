const R = require('ramda');
const expect = require('chai').expect;

const decRange = R.pipe(R.dec, R.clamp(0, Infinity));

expect(decRange(0)).to.equal(0);
expect(decRange(42)).to.equal(41);