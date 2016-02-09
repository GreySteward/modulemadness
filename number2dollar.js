var number2dollars = function(num) {
    var num = num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return num;
};
module.exports = number2dollars;
