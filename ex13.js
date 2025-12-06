//Multi level inheritance
console.log ("ex13.js file execution started...");
class institution{ //grand parent class
    constructor(Iname,Foundername, Foundedyear){ //constructor parameters
        this.Foundername = Foundername //object properties
        this.Foundedyear = Foundedyear //instance properties
        this.Iname = Iname
    }
    institutiondetails(){ //method
        console.log("Institution name is : " + this.Iname + ", It was founded by " + this.Foundername + ", At " + this.Foundedyear)
    }
}

class University extends institution{ //parent class
    constructor (Iname,Foundername, Foundedyear,Universityname) {
        super(Iname,Foundername, Foundedyear); //calling parent class constructor
        this.Universityname = Universityname
    }
    Universitydetails(){ //method
        console.log(`${this.Universityname} is actively running by Mr.${this.Foundername}`)
    }
}

class College extends University{ //child class for parent class University
    constructor(Iname,Universityname, Collegename, Maincourse){ 
        super(Iname,Universityname); //calling parent class constructor
        this.Collegename = Collegename
        this.Maincourse = Maincourse
    }
    Collegedetails(){
        console.log(`${this.Collegename} is owned by ${this.Iname}. Main course is ${this.Maincourse}`)
    }
}

class College2 extends College{ //child class for parent class College
    constructor(Iname,Universityname, Collegename, Maincourse, College2name, Maincourse2){ 
        super(Iname,Universityname, Collegename, Maincourse); //calling parent class constructor
        this.College2name = College2name
        this.Maincourse2 = Maincourse2
    }
    Collegedetails2(){
        console.log(`${this.College2name} is owned by ${this.Iname}. Main course is ${this.Maincourse2}`)
    }
}

class school extends institution{ //grand child class for grand parent class institution
    constructor(Foundedyear, Schoolname, Medium){ 
        super(Foundedyear); //calling grand parent class constructor
        this.Schoolname = Schoolname
        this.Medium = Medium
    }
    schooldetails(){
        console.log(`${this.Schoolname} is owned by ${this.Iname}. Medium is ${this.Medium}`)
    }
}

let college1 = new College("Mount Everest","Anna University", "Mount Zion college of engineering", "B.E");
let college2 = new College2("Mount Everest","Anna University", "Mount Zion college of engineering", "B.E", "Mount Zion college of nursing", "B.N");
let school1 = new school("Mount Everest","Mount Zion Matric school", "English");
let university1 = new University("Mount Everest","Jeykumar", 1990, "Anna University");
let institution1 = new institution("Mount Everest","Jeykumar", 1990);

institution1.institutiondetails();
university1.Universitydetails();
college1.Collegedetails();
college2.Collegedetails2();
school1.schooldetails();

college1.Universitydetails(); //can call parent class/grand parent method
college2.Universitydetails();
school1.institutiondetails();
//school couldnt call University since its extends from institution
//school1.Universitydetails(); //school1.Universitydetails is not a function 
console.log(college2);


console.log ("ex13.js Done");