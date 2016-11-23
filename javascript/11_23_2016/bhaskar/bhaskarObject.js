// this js file deals with js object

var Faculty = {
    name:'John',
    id: 1769,
    course: 'M.s',
    Student: {
        name: 'bhaskar',
        id: 1654,
        GPA: 4.0,
        Country: {
            state: 'CA'
        }
    }
};

// console

console.log(Faculty);
console.log(Faculty.name);
console.log(Faculty.id);
console.log(Faculty.course);
console.log(Faculty.Student);
console.log(Faculty.Student.name);
console.log(Faculty.Student.id);
console.log(Faculty.Student.GPA);
console.log(Faculty.Student.Country);
console.log(Faculty.Student.Country.state);

console.log('*****************************************');


var emp ={
    name:'bhaskar',
    id: '1764yb',
    dept:{
        salary: 1000
    }
};

// console

console.log(emp);
console.log('name is: '+ emp.name);
console.log( 'id is: '+ emp.id);
console.log(emp.dept);
console.log('dept salary is: '+ emp.dept.salary);


//updating and or adding new variables

emp.name = 'vamshi';
emp.id = '178vm';
emp.gender= 'male';
emp.dept.salary=2000;
emp.dept.age=35;

console.log('*****************************************');
console.log('result of object and properties after adding or updating');

console.log(emp);
console.log('updated name is: '+ emp.name);
console.log( 'updated id is: '+ emp.id);
console.log( 'newly added property in emp, is gender and the gender is: '+ emp.gender);
console.log(emp.dept);
console.log('updated dept salary is: '+ emp.dept.salary);
console.log( 'newly added property in emp ->dept, is age and the age is: '+ emp.dept.age);







