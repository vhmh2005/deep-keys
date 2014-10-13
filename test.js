'use strict';

var assert = require('assert');
var keys = require('./');

//o1, o2, msg
var expectEqual = assert.deepEqual;

describe('deep-keys', function() {

  it('should return array composed of it\'s properties names', function() {
    expectEqual(keys({ a:1, b:2, c:3, d:4  }), ['a', 'b', 'c', 'd']);
    expectEqual(keys({}), []);
  });

  it('should return owned properties', function() {
    var obj = {
      a: { b: 1, c: 2 }
    };
    expectEqual(keys(obj.a), ['b', 'c']);
  });

  it('should return deep keys', function() {
    var deepObj = {
      a: 1,
      b: { c: 1 },
      c: { d: { e: 1 }, f: 1 },
      d: { e: { f: { g: 1, h: 2 } } },
      e: 2,
      f: { g: [] }
    };
    expectEqual(keys(deepObj), ['a', 'b.c', 'c.d.e', 'c.f', 'd.e.f.g', 'd.e.f.h', 'e', 'f.g']);
  });

});