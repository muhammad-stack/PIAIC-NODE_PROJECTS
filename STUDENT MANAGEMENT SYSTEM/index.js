class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNo;
    courses = [];
    constructor(name, age, rollNo) {
        super(name, age);
        this.rollNo = rollNo;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    Instructor;
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
    addStudents(students) {
        this.students.push(students);
        students.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.Instructor = instructor;
        instructor.assignCourse(course1);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student("Muhammad", 16, "9955");
const student2 = new Student("Ali", 17, "8855");
const Instructor1 = new Instructor("Zia", 55, 100000000);
const Instructor2 = new Instructor("IMRAn", 56, 100000000);
const course1 = new Course("5665", " METAVERSE");
course1.addStudents(student1);
course1.addStudents(student2);
course1.setInstructor(Instructor1);
const dept1 = new Department(" BIOMEDICAL ");
dept1.addCourse(course1);
console.log(dept1);
export {};
