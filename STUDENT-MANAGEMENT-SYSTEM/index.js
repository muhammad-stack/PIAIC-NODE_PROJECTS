"use strict";
class School {
    constructor(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
    addStudent(StudentObj) {
        this.students.push(StudentObj);
    }
    addTeacher(TeacherObj) {
        this.teachers.push(TeacherObj);
    }
}
class Student {
    constructor(name, age, SchoolName) {
        this.SchoolName = SchoolName;
        this.age = age;
        this.name = name;
    }
}
class Teacher {
    constructor(name, age, SchoolName) {
        this.SchoolName = SchoolName;
        this.age = age;
        this.name = name;
    }
}
let school_ = new School("Titans");
let std = new Student("Muhammad Ali", 16, school_.name);
let std1 = new Student("Umer Faisal", 16, school_.name);
let std2 = new Student("Rooshan Ahmed", 16, school_.name);
let t1 = new Teacher("Ahsan", 43, "Humirators");
let t2 = new Teacher("Shahid", 49, "Titan");
school_.addStudent(std);
school_.addStudent(std1);
school_.addStudent(std2);
school_.addTeacher(t1);
school_.addTeacher(t2);
// console.log(school);
console.log(school_);
