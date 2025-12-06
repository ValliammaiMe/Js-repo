// Class & objects
class School{
constructor(Name,Place,Rank,Feestructure){
    this.Name=Name;
    this.Place=Place;
    this.Rank=Rank;
    this.Feestructure=Feestructure
}
Schoolcategory(){
    if (this.Feestructure<5000){
        console.log(`Medium of ${this.Name} is Tamil & Category is Government`)
    }
    else if (this.Feestructure>10000 && this.Feestructure<50000){
        console.log(`Medium of ${this.Name} is English & Category is Matriculation`)
    }
    else{
        console.log(`Medium of ${this.Name} is English & Category is CBSC`)
    }
}
}
//creating object of class (instances): new keyword
let school1 = new School("LMS School", "Pudukkottai", "1st", 45000); // school1 is object reference var name
console.log(school1.Name);
console.log(school1.Rank);
school1.Schoolcategory(); //calling method without parameter

let school2 = new School("Ponman School", "Sivaganga", "2nd", 4000);
console.log(school2.Name);
console.log(school2.Rank);
school2.Schoolcategory(); //method overloading mimic

let school3 = new School("Jenniferflora School", "Madurai", "3rd", 70000);
console.log(school3.Name);
console.log(school3.Rank);
school3.Schoolcategory();

let school4 = new School("Manish School", "Trichy"); //missing parameter
console.log(school4.Name);
console.log(school4.Rank); //undefined since parameter is missing
