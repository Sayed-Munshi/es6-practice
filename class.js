class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.School = "hello School"
    }
}
const student1 = new Student(12, "samad");
const student2 = new Student(22, "mahia");
console.log(student1, student2);