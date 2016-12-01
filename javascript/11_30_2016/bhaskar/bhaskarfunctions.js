// IIFE Construct

(function(){
    // declaring and initializing primitive data types;
    var a = 'bhaskar';
    var b = 12;
    var c = null;
    var d = undefined;
    var isValid = true;
    var isJustified = false;

    // consoling the primitive data types;
    console.log("**below are the defined primitive data type values**");
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(isValid );
    console.log(isJustified);

    // changing the primitive data type values

    var a = 'ashok';
    var b = 22;
    var c = 34;
    var d = null;
    var isValid = false;
    var isJustified = true;

    console.log("**below are the changed primitive data type values**");

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(isValid );
    console.log(isJustified);

    // declaring and initializing object data type

    var dept = {
        id: '134yb',
        name: 'IT',
        salary: 78000,
        dept1: {
            lastname: 'yasani',
            city: 'fremont'
        }
    };


    // consoling object data type

    console.log("**below are the object data type values**");
    console.log(dept)
    console.log(dept.id);
    console.log(dept.name);
    console.log(dept.salary);
    console.log(dept.dept1);
    console.log(dept.dept1.lastname);
    console.log(dept.dept1.city);

    // updating the object data type values with .notation

    dept.id = '134ry';
    dept.name = 'production';
    dept.salary = 89500;
    dept.dept1.lastname = 'martinelli';
    dept.dept1.city = 'rome';

    // consoling object data type after updating the values with .notation

    console.log("**below are the object data type values after changing the values with .notation **");
    console.log(dept)
    console.log(dept.id);
    console.log(dept.name);
    console.log(dept.salary);
    console.log(dept.dept1);
    console.log(dept.dept1.lastname);
    console.log(dept.dept1.city);

    // defining named function avg

    var globalVariable = 2;

    function avg (x,y){
        var z = x+y;
        var p = (x+y)/globalVariable;
        return p;

    };

    // consoling named function avg and global variable
    console.log("**below is the result of avg named function**");
    console.log(avg(12, 34));

    console.log("**below is the global variable value**");
    console.log(globalVariable);

    // defining anonymous function

    var arithmetic = function(k, l, m) {
        var n = (k+l+m)/globalVariable;
        var total = n*5;
        return total;
    };

    // consoling the anonymous function result


    console.log("**below is the result of anonymous function**");
    console.log(arithmetic(3,5,4));

    var finalValue = avg(2, 4) + arithmetic(3,5,4);
    console.log("**below is final value coming from addition of named and anonymous function results **");

    console.log(finalValue);
}
)();