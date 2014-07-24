// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.4.3-1-101gs
description: >
    Strict Mode - checking 'this' (non-strict function passed as arg
    to String.prototype.replace from strict context)
flags: [noStrict]
includes: [fnGlobalObject.js]
---*/

var x = 3;

function f() {
    x = this;
    return "a";
}

if ( (!(function() {"use strict"; return "ab".replace("b", f)==="aa";}())) || (x!==fnGlobalObject())) {
     throw "'this' had incorrect value!";
}
