import { Skill } from "../logic/Skill.js";
import { Stat } from "../logic/Stat.js";
import { Task } from "../logic/Task.js";
import { Character } from "../logic/Character.js";

const questLog = document.getElementById("questLog")

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

const charDaniel = new Character(2, "Daniel", statArray, skillArray, taskArray)

function questDisplay(){

    questLog.innerHTML = ""

    for (let i = 0; i < charDaniel._taskArray.length; i++) {
        const currentTask = charDaniel._taskArray[i];

        const li = document.createElement("li")
        const button = document.createElement("button")

        button.addEventListener("click", function(e){
            charDaniel.completeTask(currentTask)
            questDisplay()
        })

        li.append(currentTask._name + "  " + currentTask._target, button)

        console.log(charDaniel)
        questLog.append(li)
    }
}

const questForm = document.getElementById("questForm")
const createButton = document.getElementById("createQ")
const closeButton = document.getElementById("closeModal")
const modal = document.getElementById("questModal")

createButton.addEventListener("click", (e)=>{
    modal.style.display = "flex"
})

closeButton.addEventListener("click", (e)=>{
    modal.style.display = "none"
})

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }})

questForm.addEventListener("submit", function(e){
    e.preventDefault();

    const formData = new FormData(questForm)
    const questName = formData.get("questName")
    const questTarget = formData.get("questTarget")
    const questDifficulty = parseInt(formData.get("questDifficulty"))

    console.log(questName + "  " + questTarget + "  " + questDifficulty)

    createQuest(questName, questTarget, questDifficulty);


})


function createQuest(name, target, difficulty){

    const newTask = new Task(name,difficulty,target, 0)
    charDaniel.addTask(newTask);
    console.log("Succelfully added quest")
    questDisplay()
}

questDisplay()