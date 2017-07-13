function solution(E,L) {
  //console.log(L + ' - ' + E);
  E = E.split(':');
  L = L.split(':');
  var fee = 0;

  var hrs = Math.abs(parseInt(E[0]) - parseInt(L[0]));
  var mins = 0;
  if ( ( Math.abs(parseInt(L[1]) - parseInt(E[1])) ) != 0) {
      mins = 1;
  };
  var totalTime = hrs + mins;

  if (totalTime > 0) {
    // entrance fee of 2
    fee+= 2;
  }
  if (totalTime >= 1) {
    // first full or partial hr fee of 3
    fee+= 3;
  }
  if (totalTime >= 2) {
    // each successive full or partial hr fee of 4
    for (t = 1, len = totalTime; t < len; t++) {
      fee+= 4;
    }
  }

  return fee
}










// test case 1
var E = '10:00';
var L = '13:21';

// // test case 2
// var E = '09:42';
// var L = '11:42';

solution(E,L);
