//Method overiding means overide the parent class method from child class without parameters
console.log ("ex16.js file execution started...");
class Animal{
    //can add constructor, this.obj properties bla bla here
    Food = 'Wheat'
    move(){
        console.log("Animal is standing");
    }
}
class Dog extends Animal{
    Food = 'Bread' //can overide parent class properties - variable here
    move(){
        console.log("Dog is moving"); //overidden method -1st preference
    }
    //child can have other own methods as well here
}   
const dog1 = new Dog();
dog1.move(); //overidden method
const animal1 = new Animal();
animal1.move(); //coulnot overide since parent class wont take anything from childclass
console.log(dog1.Food); //overidden property
console.log(animal1.Food); //parent class property

console.log ("ex16.js Done");