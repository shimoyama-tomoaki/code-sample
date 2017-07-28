var assert = require('assert');
var test = require('../js/script.js');

module.exports.test

describe("test", function() {
  it("createZeroPaddingNumber", function() {
    assert.equal("00123", test.createZeroPaddingNumber(123, 5));
  });

  it("1 + 2　= 3", function() {
    assert.equal(1 + 2, 3);
  });

  it ("replaceNumber", function() {
    assert.equal("123,456,789", test.replaceNumber(123456789));
  });
});
