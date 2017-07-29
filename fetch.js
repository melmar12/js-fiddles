var url = 'https://randomuser.me/api/';

fetch(url).then(function(res) {
  return res.json()
}).then(function(data){
  //var obj = JSON.parse(data.results);
  console.log(data.results[0].gender);
  return data

}).catch(function(error) {
  console.log('error');
});




















//
// function Person(name) {
//   var obj = {
//     'name': name,
//     'age': 12,
//     'sex': 'M',
//     'hello': function () {
//       console.log('hello my name is ' + name);
//     }
//   }
//   function getObj() {
//     return obj;
//     // or do secret stuff
//   }
//   this.getObject = function () {
//     return obj;
//   } // privledge methods
//
// }
// Person.prototype.helloStranger = function() {
//   return 'hello stranger'
// };
//
//
//
//
// var person = new Person('jim');
//
// console.log(person.helloStranger());
