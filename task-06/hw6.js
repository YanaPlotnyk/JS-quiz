console.log("HomeWork6");
/**
 * It allows to fix one or more function arguments
 * @param func given function
 */
function partialAny(func,...args){
	var args = Array.from(arguments);// convert arguments to array
	args.splice(0,1);//delete the first element on array
	return function(){
		var arrInside = Array.from(arguments);
		//  Iterate through array of arguments and
		// find argument whith undefind value
		var j=0;
		outer: for (i=0; i<args.length; i++){
			if(args[i] == undefined){
				//Iterate through array of arguments of inside function
				// and change values of arguments of outer function
				while (j<arrInside.length){
				args = args.fill(arrInside[j], i, i+1);
				j++;
				continue outer;
				};
			};
		};
		return  func.apply(this, args);//calls a function with a given this value and new arguments
	};
};


function test(a, b, c, d, e){
	return "a=" + a + ", b=" + b + ", c=" +  c + ", d=" + d + ", e=" +  e ;
}

var test1_3 = partialAny(test, 1, undefined, 3, 88, undefined);
console.log(test1_3(57, 15, 33));

var test1_5 = partialAny(test, 66, undefined, 3, undefined, undefined);
console.log(test1_5(10, 55, 33));