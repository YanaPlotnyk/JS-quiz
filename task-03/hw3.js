console.log("HomeWork3");
/**
 * obtaining the square of the number of
 * @param a predetermined number
 * @returns {number} the calculation result
 */
function square(a){
	return a*a;
};

/**
 *
 * @param func
 * @param arr specified array
 * @returns {Array} an array of processed given function
 */
function map(func, arr){
	var arrNew = [];
	for (var i=0; i<arr.length; i++){
		arrNew[i] = func(arr[i]);
	}
	return arrNew;
};


var arr = [0,2,16];
console.log(map(square, arr));
console.log(arr);





/*function Link(arr){
	arr[0] = "test";
};

function Value(value) {
	value = "test";
};

var arr = ["default"]
var value = "default";

Link(arr);
Value(value);

console.log(arr);//"test"
console.log(value);//"default"*/
