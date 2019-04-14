//  Developers use immediately invoked function expressions (IIFEs) inside loops
//  to force a new copy of the variable they want to iterate over to be created.

//The i variable is passed to the IIFE, which creates its own copy and stores it as value

var funcs = [];

for ( var i = 0; i < 10; i = i + 1 ) {
    funcs.push( (function ( value ) {
        return function () {
            console.log( value );
        }
    }(i)));
}

funcs.forEach( function (func ) {
    func();
});