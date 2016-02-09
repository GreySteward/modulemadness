var randomnumber = function (min,max){
    return Math.random() * (max - min) + min;
};
module.exports = randomnumber;