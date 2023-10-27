#!/usr/bin/env node

import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";


let res = await inquirer.prompt({
    name : "UserInput",
    type: "number",
    message: "Please Enter the Amount of seconds",
    validate: (input)=>{if(isNaN(input)){
        return "Please Enter a Valid Number"
    }else if(input >  60){
        return "Please enter the number below the range of 60"
    }else{
        return true
    }}
    
});
let input = res.UserInput

function StartTime(val:number){
    const InitialTime = new Date().setSeconds(new Date().getSeconds() + val)
    const IntervalTime = new Date(InitialTime)
    setInterval(()=>{
        const currentTime = new Date()
        const timeDiff = differenceInSeconds(IntervalTime,currentTime)
        if(timeDiff <= 0 ){
            console.log(` Timer has been Expired`);
            process.exit()
        }
        const Min = Math.round((timeDiff % (3600*24)) /3600)
        const Sec = Math.round(timeDiff % 60)
        console.log(`${Min.toString().padStart(2,"0")}: ${Sec.toString().padStart(2,"0")}`);
        
    },1000)
}

StartTime(input)



