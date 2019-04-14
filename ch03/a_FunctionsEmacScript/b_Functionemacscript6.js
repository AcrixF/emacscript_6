
function makeRequest( url, timeout = 2000, callback = function () { console.log('Default Parameter') } ) {
    console.log( url );
    console.log( timeout );
    console.log( callback );
}

console.log('............ New Request ...........');
makeRequest('https://wesbos.com');

console.log('............ New Request ...........');
makeRequest('https://wesbos.com', 3000);

console.log('............ New Request ...........');
makeRequest('https://wesbos.com',3001, function () {console.log('Parameter') });