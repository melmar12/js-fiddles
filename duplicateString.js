// extra practice
var strings = ['hey', 'hey', 'hey', 'wasup', 'hello', 'hello'];

function filterStrings (strings) {
	if (!strings.length) {return false}
	var string = strings[0];
	var unique = [strings[0]]; 
	for (var i = 1, len = strings.length; i < len; i++) {
		string = strings[i];
		if (unique.indexOf(string) == -1) {
			unique.push(string);
		}
	}
	console.log(unique);
}

filterStrings(strings);


// find max/min 
var arry = [5,6,7,8,4,9,32,1];

var findMin = function (a) {
	var max = a[0];
	var index = 0;

	for(var i = 1, len = a.length; i < len; i++) {
		if (max < a[i]) {
			max = a[i];
			index = i;
		}
	}
	console.log(max);
}

findMin(arry);