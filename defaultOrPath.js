const R = require('ramda');
const expect = require('chai').expect;

const obj = {
	level1: {
		level2: {
			level3: 'deep'
		}
	},
	nested: {
		prop: {
			binary: true
		}
	}
};

const defaultPath = R.useWith(R.pathOr(false), [R.split('.')]);

expect(defaultPath('level1.level2.level3')(obj)).to.equal('deep');
expect(defaultPath('nested.prop')(obj)).to.eql({ binary: true });
expect(defaultPath('does.not.exist')(obj)).to.eql(false);
