// var a = 12; 

// module.exports = a;

//Another example

// if you want to export two or more values at once

var a = 12;
var b = 13;

//the worgn way =>
    //module.exports = a;
    //module.exports = b;

//this worgn way do that 

//* module.exports = { a, b };//this is right way to export

//there is another way to export

module.exports.a  = a;
module.exports.b  = b;
