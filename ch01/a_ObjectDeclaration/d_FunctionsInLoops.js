var funcs = [];

for( var i = 0; i < 10; i = i + 1 ) {
    funcs.push( function () {
        console.log(i);
    });
}

funcs.forEach( function ( func ) {
    func();
});

funcs.forEach( func => func() );
