// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.8
description: >
  Throws a TypeError if `this` is a WeakMap object.
info: >
  Map.prototype.keys ()

  1. Let M be the this value.
  2. Return CreateMapIterator(M, "key").

  23.1.5.1 CreateMapIterator Abstract Operation

  ...
  2. If map does not have a [[MapData]] internal slot, throw a TypeError
  exception.
  ...
features: [WeakMap]
---*/

assert.throws(TypeError, function() {
  Map.prototype.keys.call(new WeakMap());
});

assert.throws(TypeError, function() {
  var m = new Map();
  m.keys.call(new WeakMap());
});
