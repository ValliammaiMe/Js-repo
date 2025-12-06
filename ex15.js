//Static vs Non-static
console.log ("ex15.js file execution started...");
class institution{ // parent class
    static Iname = "Mount Everest"
    static Foundername = "Murugadoss"
    constructor(Foundedyear){ //constructor parameters
        this.Foundedyear = Foundedyear //instance properties
        //this.Iname = 'MM'
    }
    static institutiondetails(){ //static method can acess static properties
        console.log("Institution name is : " + this.Iname + ", It was founded by " + this.Foundername + ", At " + inst1.Foundedyear) //inst1.Foundedyear bcz its non static ehich called by obj reference
    }
    reputation(){ //normal instance method
        console.log('Good Reputation from ' + this.Foundedyear)
    }
}
const inst1= new institution(1990);
inst1.reputation() //calling non-static method by object reference
institution.institutiondetails() //calling static method in same parent class

// inst1.institutiondetails() //error will throw bcz inatitutiondetails is static, couldnt call by object reference
// institution.institutiondetails() //error will throw bcz cant call staic method by own class

console.log(`${institution.Iname}, ${institution.Foundername}, ${inst1.Foundedyear}`)
console.log(institution.Iname)

//static var/function: call it by using class name
//non static var/function: call it by using object reference name


class University extends institution{ //child class
    constructor(Foundedyear,Universityname){ //constructor parameters
        super(Foundedyear); //calling parent class constructor //instead of this.Foundedyear again
        this.Universityname = Universityname
    }
    Universitydetails(){ //method
        
        console.log(`${this.Universityname} is actively running by Mr.${institution.Foundername} from ${this.Foundedyear}`)
    }
    static showParentDetails() {
    // Access parent's static properties and methods via 'super' / class name
    console.log(`Parent Institution: ${super.Iname}, Founder: ${institution.Foundername}`);
  }
}

const uni1 = new University(2000, "Anna University");
uni1.Universitydetails();  // instance method

// Call parent's static method from child class using class name or super
University.institutiondetails(uni1);  // prints institution details using uni1 instance

// Call child static method accessing parent's static properties
University.showParentDetails();  


console.log ("ex15.js Done");