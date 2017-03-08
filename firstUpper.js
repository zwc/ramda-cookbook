const expect = require('chai').expect;
const R = require('ramda');

//const firstUpper = str => R.concat(R.head(str).toUpperCase(), R.tail(str).toLowerCase());

const headLens = R.lensIndex(0);
const firstUpper = R.compose(R.join(''), R.over(headLens, R.toUpper));

expect(firstUpper('bOOM')).to.equal('BOOM');
expect(firstUpper('hello World')).to.equal('Hello World');
expect(firstUpper('helloworld')).to.equal('Helloworld');
expect(firstUpper('x')).to.equal('X');
