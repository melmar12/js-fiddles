var myArray = [6, 3, 7, 1, 9, 4];
var temp;
var j;

console.log('sort these numbers: ' + myArray);
console.log('sorting.....');

function insertionSort() {
	for (i = 1; i < myArray.length; i++) {
		temp = myArray[i];
		for (j = i; j>0 && temp < myArray[j-1]; j--) {
			myArray[j] = myArray[j-1];
		}
	myArray[j] = temp;
	}
	console.log('done: ' + myArray);
}

insertionSort();

