// variables

// let myName = 'alexander';
// console.log (myName)

// myName = "Milliset"

// console.log(myName)

// const myOtherName = 'Chosenfingers'

// console.log(myOtherName)

// // arrays

// let randomObjects = ['dog', 'goat', 23, {fruit:'orange', itsName: 'mango', more: 'banana'}, 'fernando'];
// // add to the end
// randomObjects.push('newman')
// console.log(randomObjects)

// const favorite = ['python', ['dart', 'flutter',], ['html5','css3', 'JavaScript'], 'React', 'boostrap', 'node']
// // add to beginning
// favorite.unshift('Java')

// // to remove a value
// favorite.pop('node')

// // to get index of a value
// console.log(favorite.indexOf('boostrap'));
// console.log(favorite)

// // objects in JS

// const Person = {
//     firstName: 'Adebayo',
//     Middlename: 'Selense',
//     hobbies: ['music', 'software development', 'artificial intelligence', 'football'],
//     address: {
//         street: 'karonwi',
//         number: 9000000,
//         state: 'Ogun'
//     }
// }


// console.log(Person.firstName)
// console.log (Person.hobbies[0])
// console.log(Person.address.state)

// an array of objects

// const todoList = [
//     {
//         id: 1, 
//         text: 'Call stanley',
//         iscompleted: true,
//     },

//     {
//         id: 2,
//         text: 'write javascript',
//         iscompleted: false,
//     },

// ]

// // for of loops

// for (todo of todoList){
//     console.log(todo.iscompleted);
// }
// console.log(todoList[0].text)

// // to convert an array of objects to JSON
// const todoJSON = JSON.stringify(todoList);
// console.log(todoJSON)

// // for loops

// for(let i=0; i <=5; i++){
//     console.log(` variable i is equals: ${i}`)
// }

//while loop
// let q = 10;

// while(q <= 15){
//     console.log(`q is now equals: ${q}`);
//     q++
// }

// // higher order arraay methods

// // for each
// todoList.forEach(function(todo){
//     console.log(todo.text)
// });

// // map in arrays returns an array

// const todoVerify = todoList.map(function(todo){
//     return `this is the verification output: ${todo.iscompleted}`
// });

// console.log(todoVerify)

// const todoId = todoList.filter(function(todo){
//     return `This is your ID number: ${todo.id}`
// })

// console.log(todoId)


//ternary operators

// todoList[0].text === 'Call stanley'? console.log ('Yes, it is'): console.log('No, it is not'); 

// //functions

// function myCalaculator (num1, num2){
//     return num1 * num2;
// }

// myCalaculator(54,33)

// console.log(myCalaculator)


// //class
// class Calculator {

//     constructor (num1, num2){

//         // if(typeof num1 !== number || typeof num2 !== number){
//         //     throw new Error ('Something is wrong')
//         // }

//         this.num1 = num1
//         this.num2 = num2
//     }

// add (num1, num2){ 
//     return num1 + num2}
    
// subtract( num1, num2) {
//          return num1 - num2
//      }
    
//  multiply (num1, num2){
//        return num1 * num2
//     }
// }

// let calculate = new Calculator()

// console.log(calculate.add(4,7))
// console.log(calculate.multiply(13, 5.5))


// // maps

// let newmap = new Map();

// newmap.set (1, 'This is a number')
// newmap.set (true, 'This is a boolean')
// newmap.set ('Mary', 'This is a string')

// console.log(newmap)

// console.log(newmap.keys())
// console.log(newmap.values())
// console.log(newmap.entries())
// console.log(newmap.size)
// console.log(newmap.has('alexander'))
// newmap.delete(1)

// console.log(newmap)

// // iterate over loop using for...of loop

// for (let entry of newmap){
//     console.log(entry)
// }

// // convert map to array

// let mapArray = Array.from(newmap)
// console.log(mapArray)

// //convert map to object
// let mapObject = Object.fromEntries(newmap)

// console.log(mapObject)

// // Set
// let newset = new Set()
// newset.add ('Nigerian')
// newset.add(true)
// newset.add('Martha')

// console.log(newset)

// newset.delete(true)

// console.log(newset)

// // iterate over set

// for(let set of newset){
//     console.log(set)
// }

// destructing assignment


const myNumber = [10,20,30,40,50,60,70,80,90,100];

let result = 0;



// myNumber.forEach(function(number){

//     let i=0;
//     return result +=number[i];
   
// })


// for (let number of myNumber){
//     console.log(result +=number)
// }




function addNumbers (){

    for (let i=0; i< myNumber.length; i++){
        result += myNumber[i]
    }
    return result;
}

console.log(addNumbers());


// scope in Js - block scope, function scope, global scope, nested function scope

//nested function scope - nested functions have access to variables outside their function

let a = 10

function outer (){
    let b = 20
    function inner (){
        let c = 40
        console.log (a, b, c)
    }
    inner()
}
outer()


// closure in Js - the inner function has access to scopes in the outer functions even after its execution

function big (){
    let counter = 0
    function small(){
        counter ++
        console.log(counter)
    }
    return small
}
const call = big ()
call()
call()

// function currying - transforming a function wiith multiple arguments to a sequence of nested function taking one argument at a time

// instead of this:
 function sum (a, b, c){
    return (a + b + c)
 }

console.log(sum(3, 4, 7))

// we use this for currying

function add (fn){
    return function (a){
        return function (b){
            return function(c){
                return fn(a, b, c)
            }
        }
    }
}

const calculatedSum = add(sum)
// console.log (calculatedSum(5)(8)(2))

const add2 = calculatedSum(34)
const add3 = add2(56)
const add4 = add3 (22)

console.log(add4)

// this keyword





