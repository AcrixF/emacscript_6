// The let declaration creates a new variable i each time through the loop,
// so each function created inside the loop gets its own copy of i.

var funcs = [];

for ( let i = 0; i < 10; i = i + 1 ) {
    funcs.push( function () {
        console.log(i);
    });
}

funcs.forEach( func => func() );