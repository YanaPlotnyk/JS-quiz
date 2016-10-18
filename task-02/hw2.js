console.log("HomeWork2");

function sequence(start, step){
	if (isNaN(start)) start = 0;
	if (isNaN(step)) step = 1;
	start = start - step;
	return function(){
		return start = start + step;		
	};
};
var gen = sequence(2,2);
var gen2 = sequence(20,5);
/*console.log(gen());
console.log(gen());
console.log(gen2());
console.log(gen2());
console.log(gen2());
console.log(gen());*/

function take(generator, x){
	var arr = [];
	for (var i = 0; i<x; i++){
		arr[i] = generator();
	}
	return console.log(arr);
};
take(gen, 5); //[2,4,6,8,10]
take(gen2, 2); //[20,25]