

for( let v in window ) {
    //console.log( v );
}

console.log( "RegExp" in window );

let RegExp = "Hello!";

console.log( window.RegExp === RegExp );

var ncz = "Hi!";
console.log( window.ncz );