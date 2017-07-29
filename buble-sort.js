var myArray = [15,9,2,8,3,5,6,1,10];
var temp;

console.log('sort these numbers: ' + myArray);
console.log('sorting.....');

function bubbleSort() {
	for (i = 0; i < myArray.length-1; i++) {
		for (j = 0; j < myArray.length-1-i; j++) {
			if (myArray[j] > myArray[j+1]) {
				temp = myArray[j];
				myArray[j] = myArray[j+1];
				myArray[j+1] = temp;
			}
		}
	}
	console.log('complete: ' + myArray);
}

bubbleSort();