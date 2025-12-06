// Different ways of creating objects
console.log ("ex11.js file execution started...");

//object literal
const student = {name:"Manu", College: "Engineering", Branch: "CSE"}; //property: value
console.log(student.Branch); //dot notation to access property

//object constructor
const student1 = new Object(); //new keyword
student1.name="Janu";
student1.College="Arts";
student1.Branch="CS";
console.log(student1.College);

//constructor function imp - uses function keyword and avoid repetition of code like obj literals
function Department(Place, Block, Floor){ //function parameters
    this.Place = Place //object properties
    this.Block = Block
    this.Floor = Floor
}
let CSE = new Department("Chennai", "A", 2); //function call with parameters
let ECE = new Department ("Coimbatore", "B", 3);

console.log(`CSE Department is located at ${CSE.Place}, ${CSE.Block}, ${CSE.Floor}. Thankyou!`);
console.log(`ECE Department is located at ${ECE.Place}, ${ECE.Block}, ${ECE.Floor}. Thankyou!`);

//Class style
class CSEy1{
    constructor(Name,Result,Score){ //constructor parameters
        this.Result =Result //object properties
        this.Score = Score
        this.Name = Name
    }
    Marksheet(){ //object methods
        if (this.Result == "Pass"){ //optional conditional statement
        console.log(`Hi ${this.Name}, Congrats! Keep it up! Your Result is ${this.Result} and your score is ${this.Score}`);
    } else {
        console.log(`Hi ${this.Name}, Good Try! Better luck next time! Your Result is ${this.Result} and your score is ${this.Score}`);
    }
    }
}
 //class call with parameters - instance of class
 let Rollnum1 = new CSEy1("Manu", "Pass", 800); //obj1 //calling constructor name with parameters //new keyword for creating object of class
 let Rollnum2 = new CSEy1("Janu", "Fail", 300); //obj2//method overloading mimic //Rollnum is obj reference var name

 Rollnum1.Marksheet(); //calling method
 Rollnum2.Marksheet();

//Object.create() : with prototype obj

const StudentPrototype = {
  printInfo: function () { //printInfo function name 
    console.log(`hello, Student name is ${this.name}`)
  }
};
const Student1 = Object.create(StudentPrototype); //creating object
Student1.name = 'Nisha'; //adding property
Student1.printInfo(); //calling printInfo function

const student2 = Object.create({name:"Manu", College: "Engineering", Branch: "CSE"}); //create object with prototype
console.log(student2.Branch);

//object.assign() method
const student3 = Object.assign({}, {name:"Manu", College: "Engineering", Branch: "CSE"});// assign method to create object
console.log(student3.College);

//object.keys() method
const student4 = {name:"Manu", College: "Engineering", Branch: "CSE"};
console.log(Object.keys(student4).length); //3 keys in student4 object name, College, Branch

//Factory function returns object -simplicity
function createStudent(name, College, Branch){ //instead of constructor
    return {name, College, Branch} //using return,instead of this.objname
} //separate method call() optional
const student5 = createStudent("Pooja", "B.Tech", "IT"); //no new keyword
console.log(student5.name);

//Fcatory example 2
function createStudent(name, branch) {
  return {name,branch,info() {
      console.log(`Name: ${name}, Branch: ${branch}`); //instead of giving last, 
      // putting inside function
    }
  };
}
const s1 = createStudent("Manu", "CSE");
const s2 = createStudent("Janu", "ECE");
s1.info();  
s2.info(); //instead of console, calling methods

console.log ("ex11.js Done");




