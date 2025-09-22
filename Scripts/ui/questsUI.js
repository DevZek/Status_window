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

questDisplay()