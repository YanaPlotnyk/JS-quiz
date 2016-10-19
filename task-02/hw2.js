console.log("HomeWork2");
/**
 *
 * @param start first number of sequence
 * @param step indicates the step  sequence size
 * @returns {Function} function generator, which on every call
 * gives number more on the step size, and so on to infinity
 */
function sequence(start, step){
	if (isNaN(start)) start = 0; //the initial default value is 0
	if (isNaN(step)) step = 1; //the default step is 1
	start = start - step;
	return function(){
		return start = start + step;		
	};
};
var gen = sequence(2,2);
var gen2 = sequence(20,5);

/**
 * function calls the generation specified number of times
 * @param generator
 * @param x numbers of calls
 * @returns {Array} an array with the results of  calls
 */
function take(generator, x){
	var arr = [];
	for (var i = 0; i<x; i++){
		arr[i] = generator();
	}
	return arr;
};
console.log(take(gen, 5)); //[2,4,6,8,10]
console.log(take(gen2, 2)); //[20,25]