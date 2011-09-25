// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The [[Prototype]] property of the newly constructed object
 * is set to the original Array prototype object, the one that
 * is the initial value of Array.prototype
 *
 * @path 15_Native/15.4_Array_Objects/15.4.2_The_Array_Constructor/15.4.2.1_new_Array/S15.4.2.1_A1.1_T1.js
 * @description Create new property of Array.prototype. When new Array object has this property
 */

//CHECK#1
Array.prototype.myproperty = 1;
var x = new Array(); 
if (x.myproperty !== 1) {
  $ERROR('#1: Array.prototype.myproperty = 1; var x = new Array(); x.myproperty === 1. Actual: ' + (x.myproperty));
}

//CHECK#2
if (x.hasOwnProperty('myproperty') !== false) {
  $ERROR('#2: Array.prototype.myproperty = 1; var x = new Array(); x.hasOwnProperty(\'myproperty\') === false. Actual: ' + (x.hasOwnProperty('myproperty')));
}
