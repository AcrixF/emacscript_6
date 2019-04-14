var funcs = [];

// The i variable is declared as a constant. The first iteration of the loop, where i is 0,
// executes successfully. An error is thrown when i++ executes because it’s attempting to modify a constant
for ( const i = 0; i < 10; i++ ) {
    funcs.push( function () {
        console.log( i )
    })
}