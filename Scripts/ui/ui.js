import { Skill } from "../logic/Skill.js";
import { Stat } from "../logic/Stat.js";
import { Task } from "../logic/Task.js";
import { Character } from "../logic/Character.js";

const task1 = new Task("test1", 1, "stamina", "")
const task2 = new Task("test2", 1, "strength", "")
const task3 = new Task ("lezen", 1 , "coding", "")
const stat1 = new Stat("stamina", 5);
const stat2 = new Stat("strength", 8)
const stat3 = new Stat("intellegience", 0)
const skill1 = new Skill("coding", 2)
const skill2 = new Skill("weightlifting", 4)

const taskArray = [task1, task2, task3]
const statArray = [stat1, stat2, stat3]
const skillArray = [skill1, skill2]

const button = document.getElementById("charButton")

button.addEventListener("click", function(e){
    
    const task4 = new Task("fdqsfdqf", 1, "stamina", "")
    const task5 = new Task("drinking water", 1, "crying", "")
    const task6 = new Task ("miauw", 1 , "libido", "")
    const stat4 = new Stat("libido", 50);
    const stat5 = new Stat("thrust power", 8)
    const stat6 = new Stat("intellegience", 0)
    const skill3 = new Skill("backflip", 2)
    const skill4 = new Skill("crying", 4)

    const taskArray1 = [task4, task5, task6]
    const statArray1 = [stat4, stat5, stat6]
    const skillArray1 = [skill3, skill4]

    const Char1 = new Character(1, "John", statArray1, skillArray1, taskArray1)

    localStorage.setItem("char1", JSON.stringify(Char1))

    console.log("succes")
    testing()
})


function testing(){
    const saved = localStorage.getItem("char1")
    if(saved){
        const char1test = JSON.parse(saved)
        console.log("retrieve succes")
        console.log(char1test)
        return char1test;
    }else{
        console.log("not succes")
    }
}

const Ezekiel = Character.fromJSON(testing())
console.log(Ezekiel)


const skillDisplay = document.getElementById("skillList")
const statDisplay = document.getElementById("statList")
const taskDisplay = document.getElementById("taskList")

function renderStats(){
    const stats = Ezekiel._statArray
    statDisplay.innerHTML = ""

     for (let index = 0; index < stats.length; index++) {
        const li = document.createElement("li");
        li.append(stats[index].name + " " + stats[index].amount)
        statDisplay.appendChild(li)
    }
}

function renderSkills(){
    const skills = Ezekiel._skillArray
    skillDisplay.innerHTML = ""

    for (let index = 0; index < skills.length; index++) {
       const li = document.createElement("li");
        li.append(skills[index].name + " " + skills[index].amount)
        skillDisplay.appendChild(li)
    }
}

function renderTasks(){
    const tasks = Ezekiel._taskArray
    taskDisplay.innerHTML = ""
    
    for (let index = 0; index < tasks.length; index++) {
        const li = document.createElement("li");
        const button = document.createElement("button")

        button.addEventListener("click", function(e){
            Ezekiel.completeTask(tasks[index])
            displayData()
        })

        li.append(tasks[index]._name + " " + tasks[index]._target, button)

        taskDisplay.appendChild(li)
    }
}

function displayData(){
    renderStats()
    renderSkills()
    renderTasks()
}

displayData()






