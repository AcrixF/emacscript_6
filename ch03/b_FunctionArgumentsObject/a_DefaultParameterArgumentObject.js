"use strict";

//  The arguments object is always updated in non-strict mode to reflect changes in the named parameters.

//  ECMAScript 5’s strict mode eliminates this confusing aspect of the arguments object.
//  In strict mode, the arguments object does not reflect changes to the named parameters.

function mixArgs( first, second ) {
    console.log( first === arguments[0] );
    console.log( second === arguments[1] );

    first = 'c';
    second = 'd';

    console.log( first === arguments[0] );
    console.log( second === arguments[1] );
}

mixArgs("a","b");