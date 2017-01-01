var global_num = 3
class addition{
	static sval =10
	add():any{
		var num1: number=3
		var num2: number =6
		var num3 = num1*num2
		// console.log("multi "+num3)
		// console.log("hello")
		return num3;
	}
}

console.log("global "+global_num)
console.log("static "+addition.sval)
var obj = new addition()
var multip = obj.add()
console.log("multi "+ multip)