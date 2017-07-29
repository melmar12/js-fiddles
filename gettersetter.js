function Person() {
    this.getName = function () {
      return this.name
    }
    this.setName = function (n) {
      this.name = n;
    }
}
var p = new Person();
p.setName('jim');
console.log(p.getName());

var s = new Person();
s.name = 'Sally';
console.log(s.name);
//mehh





// other ways
// rsource: https://www.codementor.io/infoprisma1/getters-and-setters-in-javascript-9dw0hb1tk

// var Person = function() {};
// Object.defineProperties(Person.prototype, {
//     'fullName': {
//         get: function() {
//             return this.firstname + ' ' + this.lastName
//         },
//         set: function(value) {
//             var parts = value.split(' ');
//             if (parts.length == 2) {
//                 this.firstName = parts[0];
//                 this.lastName = parts[1];
//             }
//          }
//       }
//   });
//   var p = new Person();
//   p.fullName = "Maxi Benedetto";
//   alert(p.firstName); // Maxi
//   alert(p.lastName); // Benedetto


// var Child = {};
// Object.defineProperty(Child, 'old', {
//      get: function() { return this.age },
//      set: function(value) { this.age = value - 2 }
// })
// Child.old = 7;
// console.log(Child.old); // 5


// var person = {
//     get fullName() {
//        return this.firstName + ' ' + this.lastName;
//     },
//     set fullName (name) {
//         var words = name.toString().split(' ');
//         this.firstName = words[0] || '';
//         this.lastName = words[1] || '';
//      }
//  }
//  person.fullName = 'Bryan Singer';
//  alert(person.firstName); // alerts Bryan
//  alert(person.lastName) // alerts Singer

// ugly way aparently
// function Field(val){
//   var value = val;
//   this.getValue = function(){
//     return value;
//   };
//   this.setValue = function(val){
//     value = val;
//   };
// }
