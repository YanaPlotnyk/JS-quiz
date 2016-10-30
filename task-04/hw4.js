console.log("HomeWork4");
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
	start -=step;
	return function(){
		return start += step;		
	};
};

/**
 * obtaining the square of the number of
 * @param a predetermined number
 * @returns {number} the calculation result
 */
function square(a){
	return a*a;
};

function add(a,b,c){
	return a+b+c;
}

/**
 * calls the gen() and transmit the result by the func
 * @param func given function
 * @param gen generator or given function with arguments
 * @returns {Function} the calculation result
 */
function fmap(func, gen){
	return function(){
		var args = Array.prototype.slice.call(arguments);//convert arguments to array
		var res = gen.apply(this, args);//calls a function with a given this value and arguments
		return func(res);
	};
};


var squareAdd = fmap(square, add);
console.log(squareAdd(2,3,6));
console.log(squareAdd(2,0,15));

var gener = sequence(2,4);
var squareGen = fmap(square, gener);
console.log(squareGen());
console.log(squareGen());
console.log(squareGen());
console.log(squareGen());
