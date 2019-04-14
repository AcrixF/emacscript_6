//  A variable declared with either let or const cannot be accessed until after the declaration.
if ( true ) {
    //console.log( value );
    let value = "blue";
}


//  That means there is no value binding, and typeof simply returns "undefined"
console.log( typeof  value_inner );

if ( true ) {
    let value_inner = "blue";
}
