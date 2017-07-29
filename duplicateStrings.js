function colorCount (image) {
	var colors = [image[0]];
	var counts = [1];
	var index = 0;
	var color;

	for (let i = 1, len = image.length; i < len; i++) {
		color = image[i];
		if(colors.indexOf(color) == -1) {
			colors.push(color);
			index = colors.indexOf(color);
			counts[index] = 1;
		} else {
			index = colors.indexOf(color);
			counts[index]+= 1;
		}

	}

	// find max count 
	var newMax = 0; 
	var curMax;
	var maxIndex = 0;
	var maxColor;
	for (let i = 0, len = counts.length-1; i < len; i++) {
		curMax = Math.max(counts[i],counts[i+1]);
		console.log(curMax);
		if (curMax > newMax) {
			newMax = curMax;
			//return max;
		}
		console.log(newMax);
	}
	maxIndex = counts.indexOf(newMax);
	maxColor = colors[maxIndex];


	console.log(colors);
	console.log(counts);
	//console.log(Math.max(counts[0],counts[1]));
	console.log('color: ' + maxColor + ' count: ' + newMax);


}

// testing
var image = ['red', 'red', 'blue', 'blue', 'red', 'green', 'yellow'];
colorCount(image);
