'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  function adder(a) {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    return function (b) {
      if (b === undefined) {
        return a;
      }

      return adder(a + b);
    };
  }

  return adder;
}

module.exports = makeInfinityAdder;
