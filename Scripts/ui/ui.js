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

const Ezekiel = new Character(1, "Ezekiel", statArray, skillArray, taskArray)

const skillDisplay = document.getElementById("skillList")
const statDisplay = document.getElementById("statList")
const taskDisplay = document.getElementById("taskList")

function renderStats(){
    const stats = Ezekiel.statArray
    statDisplay.innerHTML = ""

     for (let index = 0; index < stats.length; index++) {
        const li = document.createElement("li");
        li.append(stats[index].name + " " + stats[index].amount)
        statDisplay.appendChild(li)
    }
}

function renderSkills(){
    const skills = Ezekiel.skillArray
    skillDisplay.innerHTML = ""

    for (let index = 0; index < skills.length; index++) {
       const li = document.createElement("li");
        li.append(skills[index].name + " " + skills[index].amount)
        skillDisplay.appendChild(li)
    }
}

function renderTasks(){
    const tasks = Ezekiel.taskArray
    taskDisplay.innerHTML = ""
    
    for (let index = 0; index < tasks.length; index++) {
        const li = document.createElement("li");
        const button = document.createElement("button")

        button.addEventListener("click", function(e){
            Ezekiel.completeTask(tasks[index])
            displayData()
        })

        li.append(tasks[index].name + " " + tasks[index].target, button)

        taskDisplay.appendChild(li)
    }
}

function displayData(){
    renderStats()
    renderSkills()
    renderTasks()
}

displayData()