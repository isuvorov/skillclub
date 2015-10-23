module.exports = function(filename, next){
    setTimeout(function(){
        require("fs").readFile(filename, next);
    },3000);
};