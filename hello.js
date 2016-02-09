var dollar = require('./dollar');
var message = require('./message');


var helloMessage = function(){
    return "Hello " + iota();
};

module.exports = helloMessage;

