#!/usr/bin/env/node
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

class Student extends Person {
  rollNo: string;
  courses: Course[] = [];
  constructor(name: string, age: number, rollNo: string) {
    super(name, age);
    this.rollNo = rollNo;
  }
  registerForCourses(course: Course) {
    this.courses.push(course);
  }
}
class Instructor extends Person {
  salary: number;
  courses: Course[] = [];

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
  assignCourse(course: Course) {
    this.courses.push(course);
  }
}
class Course {
  id: string;
  name: string;
  students: Student[] = [];
  Instructor!: Instructor;
  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;
  }
  addStudents(students: Student) {
    this.students.push(students);
    students.registerForCourses(this);
  }
  setInstructor(instructor: Instructor) {
    this.Instructor = instructor;
    instructor.assignCourse(course1)

 
  }
}

class Department{
  name : string
  courses : Course[] = []
  constructor(name : string){ 
    this.name = name
  }
  addCourse(course : Course){
    this.courses.push(course)
  }

}

const student1 = new Student("Muhammad", 16, "9955");
const student2 = new Student("Ali", 17, "8855");

const Instructor1 = new Instructor("Zia", 55, 100000000);
const Instructor2 = new Instructor("IMRAn", 56, 100000000);

const course1 = new Course("5665", " METAVERSE");
course1.addStudents(student1);
course1.addStudents(student2)
course1.setInstructor(Instructor1);

const dept1 = new Department(" BIOMEDICAL ")
dept1.addCourse(course1)
console.log(dept1);


