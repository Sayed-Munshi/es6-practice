class Parents {
    constructor(){
        this.fatherName = "negar"
    }
}
class Child extends Parents{
    constructor (name){
        super();
        this.name = name;
    }
}
const baby = new Child ("Sayed");
const baby2 = new Child ("Tom");

console.log(baby);02
console.log(baby2);
