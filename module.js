var number2dollars = require('./number2dollar');
var randomnumber = require('./randomnumber');
var accountBalance = function(min, max) {
    return number2dollars(randomnumber(min,max));
};
console.log ("Account Balance");

var textreturn = function() {
    return "Account Balance: $";
};
exports.textreturn = textreturn;
exports.accountBalance = accountBalance;
