import inquirer from "inquirer";


class Student{
    name : string
    constructor(name : string){
        this.name = name 
    }
}

class Person{
    students : Student[] = []

    addStudents(obj : Student){
        this.students.push(obj)
    }
}

const persons = new Person()


const StartProgram = async(persons : Person) => {
    console.log(' Welcome User');
    do{

        const query = await inquirer.prompt({
            name : "Ques1",
            type : "list",
            message : "Whom you wanna talk to ?",
            choices : ['Your Self', 'With Students']
        })
    let select = query.Ques1
    if(select === 'Your Self'){
        let query1 = await inquirer.prompt({
            name : "Ques2",
            type:"input",
            message : "How am i feeling today Good or Not ?"
        })
        if(query1.Ques2 == "Good"){
            console.log(" How do you know that !");
        }else{
            console.log(" Wrong Answer");
            
        }
        
    }
    if(select === 'With Students'){
        let Answer = await inquirer.prompt({
            name : "answer1",
            type : "input",
            message : "Which student you wanna talk ?",
        
        });
        const answer  = persons.students.find(value => value.name === Answer.answer1 )
        if(!answer){
            const name =  new Student(Answer.answer1)
            persons.addStudents(name)
            
            console.log(` I am a new student and registered by the name a ${name.name}`);
            console.log(persons.students);
            
        }
        if(answer){
            console.log(` I love studying here and my name is ${answer.name}`);
            console.log(persons.students);
            
            
        }
    }
    var again = await inquirer.prompt({
        name : "restart",
        type : "list",
        message : "Do you want to continue again",
        choices : ['Yes','No']
    })
}while(again.restart == 'Yes')
}
StartProgram(persons)

