//   the for-in loop shows the same behavior as the for loop.
//   Each time through the loop, a new key binding is created,
//   so each function has its own copy of the key variable.

var funcs = [];

var object = {
    a: true,
    b: true,
    c: true
};

for ( const key in object ) {
    funcs.push( function () {
        console.log( key );
    });
}

funcs.forEach( func => func() ) ;