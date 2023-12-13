
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      // Code for the named function
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function () {
      // Code for the anonymous function
    };
  }
  
  