var matrix = [[1,2,3,4],
			  [14,15,16,5],
			  [13,20,17,6],
			  [12,19,18,7],
			  [11,10,9,8]];

function spiral(matrix) {
	var top = 0;
	var left = 0;
	var bottom = matrix.length;
	var right = matrix[0].length;
	var output = [];


	while (top < bottom && left < right) {
		// print top
		for (let i = left; i < right; i++) {
			output.push(matrix[top][i]);
		}
		top++;

		// print left clm
		for (let i = top; i < bottom; i++) {
			output.push(matrix[i][right-1]);
		}
		right--;

		// print bottom
		if (top < bottom) {
			for (let i = right-1; i >= left; i--) {
				output.push(matrix[bottom-1][i]);
			}
			bottom--;
		}

		// print right clm 
		if (left < right) {
			for (let i = bottom-1; i >= top; i--) {
				output.push(matrix[i][left]);
			}
			left++;
		}
	}

	console.log(output);

}

spiral(matrix);