var global_num = 3;
var addition = (function () {
    function addition() {
    }
    addition.prototype.add = function () {
        var num1 = 3;
        var num2 = 6;
        var num3 = num1 * num2;
        ///console.log("multi "+num3)
        // console.log("hello")
        return num3;
    };
    return addition;
}());
addition.sval = 10;
console.log("global " + global_num);
console.log("static " + addition.sval);
var obj = new addition();
var multip = obj.add();
console.log("multi " + multip);
