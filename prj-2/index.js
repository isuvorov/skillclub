var math = require("./math.js");
//
//
//
//math.asyncR(function(err, number){
//    console.log(number)
//});


var obj2 = {
    name: "Petyaa"

};

var obj = {

    name: "Igor",

    alert: function (){
        setTimeout(math.hello.bind(obj2), 1000);
    }
};


//obj.alert();

function f(){
    console.log(arguments);
}
//f(1,2,3,4,5,6);


function qwe(){
    var arg1 = 123;

    return function() {
        return arg1;
    };
}



qwe.args = 5678;

console.log(qwe()());



function test(a){
    if(typeof a === "undefined"){
        a = 5;
    }

}

//console.log(obj);

//setTime



//
//var a = function(){ console.log(123); this.test = "test1";  }
//
//function a(){
//    console.log(123);
//    var test = "test1";
//}
//
//
//function q() {
//
//}
//
//
//var q = function (){
//
//};
//



//
//
//
//a()
//VM486:2 123
//undefined
//a()
//VM486:2 123
//undefined
//var b = new a();
//VM486:2 123
//undefined
//b
//a {test: "test1"}