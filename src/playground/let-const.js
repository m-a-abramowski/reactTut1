
//var - redeclaration and reassignement possible
var nameVar = "Andrew";
var nameVar = 'Mike';
console.log('nameVar', nameVar);

//let - only reassignement possible
let nameLet = "Jan";
nameLet = "Julie";
console.log('nameLet', nameLet);

//const - neither redeclaration nor reassignement possible
const nameConst = "Frank";
console.log('nameConst', nameConst);


//var is function scoped, whereas let and const are function and block scoped
var fullName = 'Mike Black';

// if(fullName){
//   var firstName = fullName.split(' ')[0];
//   console.log(firstName);
// }
//
// console.log(firstName);

if(fullName){
  const firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
