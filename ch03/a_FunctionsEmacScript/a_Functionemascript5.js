//  In ECMAScript 5 and earlier,
//  you would likely use the following pattern to create a function with default parameter value

function makeRequest( url, timeout, callback ) {

    //timeout = timeout || 2000;
    //callback = callback || function () {};

    timeout = (typeof  timeout !== "undefined" ) ? timeout : 2000;
    callback = (typeof  callback !== "undefined") ? callback : function(){};

    console.log( url );
    console.log( timeout );
    console.log( callback );
}

console.log('............ New Request ...........');
makeRequest('https://wesbos.com');

console.log('............ New Request ...........');
makeRequest('https://wesbos.com', 3000);

console.log('............ New Request ...........');
makeRequest('https://wesbos.com',3001, function () {console.log('') });