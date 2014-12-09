// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.17-7-1
description: >
    Array.prototype.some considers new elements added to array after
    it is called
includes: [runTestCase.js]
---*/

function testcase() { 
  var calledForThree = false;
 
  function callbackfn(val, idx, obj)
  {
    arr[2] = 3;
    if(val !== 3)
      calledForThree = true;

    return false;
  }

  var arr = [1,2,,4,5];
  
  var val = arr.some(callbackfn);
  return calledForThree;
 }
runTestCase(testcase);