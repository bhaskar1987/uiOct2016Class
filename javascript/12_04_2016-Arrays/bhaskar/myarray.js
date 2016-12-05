// this js file deals with arrays and array methods


//IIFE construct
(function(){

// creating an empty array
var myArray =[];


// consoling an empty array
console.log('the below is an empty array');
console.log( myArray);

// intializing an array with values

myArray =[ 'bhaskar', 'yasani', 'vamshi', 'raj'];

// consoling an initialized array
console.log('below initialized array');
console.log( myArray);

// accessing different elements from array and consoling

console.log('consoling each element using myArray[index]');
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);


// using .length to know the size of an array and consoling it .
console.log('the length of an myArray is given below');
console.log(myArray.length);

// objects inside an array

var objArray = [
    {
    firstName: 'bhaskar',
    lastName: 'yasani'
    },

    {
    gender: 'male',
    city: 'santaclara'
    }
]

// consoling the array with objects

console.log('below is an array named objArray which has two objects');
console.log(objArray);

// accessing an object and its elements in array of objects

console.log('each object and element printed in an array named objArray which has two objects');
console.log(objArray[0]);
console.log(objArray[1]);
console.log(objArray[0].firstName);
console.log(objArray[0].lastName);
console.log(objArray[1].gender);
console.log(objArray[1].city);


// using .length to know the size of an array which has objects .
console.log('the length of an objArray is given below');
console.log(objArray.length);

// adding an element or object to existing array(push() function will add an element at the end of array)
console.log('intitail array of elements');
console.log( myArray);
console.log('size: ' + myArray.length);
myArray.push('venkat');
console.log('new/updated arrays after adding an element using push() function');
console.log( myArray);
console.log('size: '+ myArray.length);

console.log( objArray);
console.log('size: '+ objArray.length);
objArray.push({ company: 'apple',
                occupation: 'UI developer'
                });
console.log('new/updated arrays after addin new obj using push() function');
console.log( objArray);
console.log('size: '+ objArray.length);


// named object
var obj4 = {
            country: 'India',
            city: 'HYD'
        };

// adding a named object inside an array of objects
objArray.push(obj4);
console.log('new/updated arrays after adding new named obj using push() function');
console.log(objArray);

// removing an element or object from array using pop() function
console.log('updated arrays after removing elements/ obj using pop() function');
myArray.pop();
objArray.pop();
console.log( myArray);
console.log( objArray);


// adding an element or object to existing array(unshift() function will add an element infront of array)
console.log('initial array of elements');
console.log( myArray);
console.log('size: ' + myArray.length);
myArray.unshift('venkat');
console.log('new/updated arrays after adding an element using unshift() function');
console.log( myArray);
console.log('size: '+ myArray.length);

console.log( objArray);
console.log('size: '+ objArray.length);
objArray.unshift({ company: 'google',
                occupation: 'java developer'
                });
console.log('new/updated arrays after adding new obj using unshift() function');
console.log(objArray);
console.log('size: '+ objArray.length);


// named object
var obj4 = {
            country: 'Italy',
            city: 'milan'
        };

// adding a named object inside an array of objects
objArray.unshift(obj4);
console.log('new/updated arrays after adding new named obj using unshift() function');
console.log(objArray);

// removing an element or object from array using pop() function
console.log('updated arrays after removing first elements/ obj using shift() function');
myArray.shift();
objArray.shift();
console.log( myArray);
console.log( objArray);



 myArray.splice(1,0,'shreya');
 console.log( myArray);

 myArray.splice(1,2,'sachin');
 console.log( myArray);

 myArray.splice(1,2,'nag', 'amala', 'akhil');
  console.log( myArray);

myArray.push('srikar','jhansi','laxmi');
console.log( myArray);


console.log(myArray.indexOf('srikar', 'jhansi'));


var yourArray = ['apple', 'orange', 'banana'];

var totalArray = myArray.concat(yourArray);

console.log(totalArray);

console.log(myArray.join('->'));






























































})();