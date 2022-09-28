console.log("the fantastic mr fox is peak cinema") //this is not a comment
// Comment the boxtrolls should have won an oscar in 2010 

/* 
Multi line comment
this comment will cover a good few lines



*/  

//Variables 

/* 
there are two ways to declare variables in javascript

var a = 10; defines variable locally
or
let a = 10; defines variable globally
use let monkey

Constants=
A variable that cannot be changed,are declared like this=
const x = 20;





*/ 
let a =10 
console.log(a) 

const x =20; 
console.log(x) 

//Variables do be case sensitive 
 
//Datatypes 
/* 
Numbers 
Strings 
Booleans 
*/ 

let temp = 10 //Datatype String
let temp1 = "10" //Datatype String 

/* 
all numbers in javascript are floating point numbers 
*/ 
/* All variable names in javascript must begin with a letter or an underscore_.
You can not use a reserved word as a variable name.
*/ 

//Arithmethic Operators 

//Addition 

console.log(5+3) 

console.log("fantastic"+"mrfox") 

//Subtaction 

console.log(5-2) 

//multiplication

console.log(5*2); 

//Division 

console.log(5/2) 

//Exponent 

console.log(3**4) 

//increments 

let h = 11; 
console.log(h++) 
console.log(h)
let k = 10; 
console.log(++k) 


//pre increment 






//comparison operators 
//Equals == 
console.log(5 == 3);

console.log(4 == 4);
//not equals is != 

console.log(5!=4);
console.log(4!=4);

//greaater than > 
console.log(5> 4); 
console.log(4> 5);

//less than >
console.log(5< 4); 
console.log(4 >5); 

//less than or equal to <= 
console.log(5<=4)
console.log(4 <=5)


//assignment operators 

//equals = 
let n = 12; 

//add and assignment += 
n+=12; //this is the same as writing n = n + 12 
console.log(n); 

//subtract and assignment -=
n -= 4; // this is the same as writing n = n- 4 
console.log(n); 

//multiply and assignment *= 
n *= 5; // this is the same as writing n = n *5 
console.log(n); 

//divide and assignment /= 

let y =4; 

y/=2 ; //this is the same as writing y = y/2 

console.log(y);

//modulus and assignment 

y%= 2; //this is the same as writing y = y%2 

console.log(y);

                //Conditional operator 
/* 
THE CONDITIONAL OPERATOR EVALUATES AN EXPRESSION 
FOR TRUE OR FALSE. IF TRUE, IT EXECUTES THE FIRST STATEMENT,
OTHERWISE IT EXECUTES THE SECOND STATEMENT 
*/ 
 

let first = 10; 
let second =12; 

console.log(first>second?"true":"false"); 
 
                    //TYPEOF OPERATor 
let myString = "hello"; 

console.log(typeof(myString)); 

let myNumber = 12; 

console.log(typeof(myNumber));

                //USER INPUT 
/* 
The promopt() funtion is used to take input from the user 
The default datatype for input is string 
To convert the input to a number, wrap the prompt in a NUMBER() 
function call 
*/ 
let mySecondString = prompt("enter something"); 

console.log(mySecondString); 

let mySecondNumber = Number(prompt("enter a number")); 
console.log(mySecondNumber) 


        //IF STATEMENT 
/* THE IF STATEMENT IS A CONTROL STATEMENT WHICH EXECUTES 
IF THE TEST CONDITION EVALUATES TO TRUE 
*/ 

let myage = 400; 
if (myage > 500){ 
    console.log("you are over 500 years old");
}
 
//{} are code block  

        //IF ELSE STATEMENT 
/* IF ELSE IS ALSO A CONTROL STATEMENT IF THE TEST CONDITION IS TRUE 
IT EXECUTES THE CODE IN THE IF BLOCK,OTHERWISE, IT EXECUTES THE CODE
INT THE ELSE BLOCK
*/ 

if(myage > 500){
    console.log("you are over 500 years old");
}else{
    console.log("you are not over 500 years old");
} 

//IF ELSE-IF ELSE STATEMENT 
/*SIMILIAR TO THE TWO CONTROL STATEMENTS ABOVE. 
THIS CAN TEST MULTIPLE DIFFERENT CONDITIONS,
IF THEY ALL FAIL IT WILL RUN THE ELSE CONDITION 
*/ 

if(myage > 500){
    console.log("you are over 500 years old");
}else if(myage<500){
    console.log("you are not over 500 years old");
}else{
    console.log("you must be 500 years old");
} 
