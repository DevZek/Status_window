import { Task } from "./Task.js";
import { Stat } from "./Stat.js";
import { Skill } from "./Skill.js";

export class Character{

    #id;

    constructor(id, name, statArray, skillArray, taskArray){
        this.#id = id;
        this.name = name;
        this.statArray = statArray;
        this.skillArray = skillArray;
        this.taskArray = taskArray
    }

    completeTask(task){
        if(!task || !(task instanceof Task)){
            throw new Error("Task can not be null, undefined or a different instance")
        }

        const taskIndex = this.taskArray.findIndex((e) => e === task)
        const objTask = this.taskArray[taskIndex].completed();
        
        const statIndex = this.statArray.findIndex((e) => e.name === objTask.target)
        if (statIndex !== -1) {
            this.statArray[statIndex].increase(objTask.difficulty);
            this.taskArray.splice(taskIndex, 1);
            return; 
        }

        const skillIndex = this.skillArray.findIndex((e) => e.name === objTask.target)
         if (skillIndex !== -1) {
            this.skillArray[skillIndex].increase(objTask.difficulty);
            this.taskArray.splice(taskIndex, 1);
            return; 
        }
        console.error("You dont have this skill or stat to up")
    }

    addTask(task){
        if(!task || !(task instanceof Task)){
            throw new Error("Task can not be null, undefined or a different instance")
        }
        this.taskArray.push(task);
    }

    addStat(stat){
        if(!stat || !(stat instanceof Task)){
            throw new Error("Stat can not be null, undefined or a different instance")
        }
        this.statArray.push(stat);
    }

    addSkill(skill){
        if(!skill || !(skill instanceof Task)){
            throw new Error("Skill can not be null, undefined or a different instance")
        }
        this.skillArray.push(skill);  
    }

    // toJSON(){}

    static fromJSON(data){
        return new Character(
            data.id,
            data._name,
            data._statArray.map(s => new Stat(s._name, s._amount)),
            data._skillArray.map(sk => new Skill(sk._name, sk._amount)),
            data._taskArray.map(t => new Task(t._name, t._difficulty, t._target))
        )
    }

    set name(value){
        if(typeof value !== "string" || !value.trim()){
            throw new error("Name has to be a string value")
        }
        this._name = value;
    }
    set statArray (arrayValue){
       if (!Array.isArray(arrayValue)) {
            throw new Error("Stats must be an array.");
        }
        this._statArray = arrayValue;
    }
    set skillArray (arrayValue){
        if (!Array.isArray(arrayValue)) {
            throw new Error("Stats must be an array.");
        }
        this._skillArray = arrayValue;
    }
    set taskArray (arrayValue){
       if (!Array.isArray(arrayValue)) {
            throw new Error("Stats must be an array.");
        }
        this._taskArray = arrayValue;
    }
    get name(){
        return this._name;
    }
    get statArray(){
        return this._statArray
    }
    get skillArray(){
        return this._skillArray
    }
    get taskArray(){
        return this._taskArray
    }
}