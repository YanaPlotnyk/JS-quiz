console.log("HomeWork1");

function sequence(start, step){
	if (isNaN(start)) start = 0;
	if (isNaN(step)) step = 1;
	start = start - step;
	return function(){
		return start = start + step;		
	};
};
var gen = sequence();
var gen2 = sequence(20,5);
console.log(gen());
console.log(gen());
console.log(gen2());
console.log(gen2());
console.log(gen2());
console.log(gen());
