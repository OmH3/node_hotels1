// // console.log("server is running");
// function add(a,b,call){
//     console.log(a+b);
//     call();
// }
// // var add = function(a,b){
// //     return a+b;
// // }
// // var add=(a,b)=>{
// //     return a+b;
// // }

// var res=add(3,5, call);


// // (function(){
// //     console.log("Prince is good boy...");
// // })();

// function call(){
//     console.log("The program has been completed successfully");
// }

var fs=require('fs');
var os=require('os');

var user=os.userInfo();
console.log(user.username);

fs.appendFile('greet.txt', 'Hi ' + user.username + '!\n', ()=>{
    console.log("The file has been created");
})

const notes = require('./notes');
var greet = notes.hello();
var age = notes.age;
console.log(age);

var _ = require('lodash'); // utility library check more functions

var data =['person','person','person',1,2,1,2,1,'name','name']; // remove all identical element

var filter=_.uniq(data);
console.log(filter);