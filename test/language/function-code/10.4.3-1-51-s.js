// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-51-s
description: >
    Strict Mode - checking 'this' (FunctionDeclaration with a strict
    directive prologue defined within an Anonymous FunctionExpression)
flags: [noStrict]
includes: [fnGlobalObject.js]
---*/

(function () {
    function f() {
        "use strict";
        return typeof this;
    }
    assert.sameValue(f(), "undefined", 'f()');
    assert.sameValue(this, fnGlobalObject(), 'this');
})();
