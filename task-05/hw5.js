console.log("HomeWork5");
/**
 * It allows to fix one or more function arguments
 * @param func given function
 */
function partial(func, ...args){
	var args = Array.from(arguments);// convert arguments to array
	args.splice(0,1);//delete the first element oa array
	return function(){
		var allArgs = args.concat(Array.from(arguments));//
		console.log(allArgs);
		return  func.apply(this, allArgs);//calls a function with a given this value and arguments
	};
};


function add(a, b, c, d, e){ 
	return a + b + c + d + e; 
};

function mult(a,b,c){
	return a*b*c;
}

var add5 = partial(add, 5, 3);//fixed two first arguments of function
console.log(add5(2, 4, 8));
console.log(add5(3,5));

var mult2 = partial(mult, 2);//fixed first argument of function
console.log(mult2(3,3));
console.log(mult2(5,5));
