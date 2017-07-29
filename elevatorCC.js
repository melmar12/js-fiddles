function solution(A, B, M, X, Y) {
  var done = false;
  var rides = 0;
  var stops = 0;
  A.reverse();
  B.reverse();

  while(!done) {
    //setting variables for ride
    var ready = false;
    var pplonBoard = [B.pop()];
    var pplWeight = [A.pop()];
    var totalWeight = pplWeight[0];
    var totalOnBoard = 1;

    // filling up for ride
    while (!ready) {
      //console.log('in whileloop');
      var tempWeight = 0;
      if (totalWeight > Y || totalOnBoard > X ) {
        //console.log('case 1');
        B.push(pplonBoard.pop());
        A.push(pplWeight.pop());

        ready = true;

      } else if (totalWeight < Y && totalOnBoard < X ) {
        //console.log('case 2');
        pplonBoard.push(B.pop());
        totalOnBoard+=1;
        tempWeight = A.pop();
        pplWeight.push(tempWeight);
        totalWeight+= tempWeight;
      } else {
        //console.log('case 3');
        ready = true;
      }
    }

    // only tracking num of rides for now
    rides+=1
    console.log('ride: ' + rides + ' floors: ' + pplonBoard);


    //counting stops
    var floorsToStopAt = [];
    var floor;
    for (var i = 0, len = pplonBoard.length; i < len; i++) {
      floor = pplonBoard[i];
      if (floorsToStopAt.indexOf(floor) == -1 && floor <= M && floor != undefined) {
        floorsToStopAt.push(floor);
      } else {
        console.log('floor: ' + floor + ' M: ' + M);
      }
    }
    stops+= floorsToStopAt.length +1; // +1 to account for floor 0
    // reset variables
    floorsToStopAt = [];
    floor = 0;




    // resetting vars for next ride
    ready = false;
    var pplonBoard = [];
    var pplWeight = [];
    var totalWeight = 0;
    var totalOnBoard = 0;

    // no one left in line
    if (A.length == 0) {
      done = true;
    }
 }
 console.log('stops: ' + stops);
//return stops;


//console.log(pplonBoard + ' ' + pplWeight);
console.log('rides: ' + rides);
console.log('totalweight: ' + totalWeight + ' totalOnBoard: ' + totalOnBoard);


}


//test case 1
solution([60, 80, 40], [2, 3, 5], 5, 2, 200);


console.log('=================');
//test case 2
solution([40, 40, 100, 80, 20], [3, 3, 2, 2, 3], 3, 5, 200);
