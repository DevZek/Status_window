export class Task{
    constructor(name, difficulty, target, deadline){
        this.name = name;
        this.difficulty = difficulty;
        this.target = target;
        this.deadline = deadline;
    }

    completed(){
        const difficultyMultiplier = 1 + (this._difficulty - 2) * 0.1
        return {"target": this._target, "difficulty": difficultyMultiplier}
    }

    set name(value){
        if(typeof value !== "string" || !value.trim()){
            throw new Error("Task name has to be a string value")
        }
        this._name = value
    }
    set difficulty(value){
        if (typeof value !== "number" || value > 5 || value <= 0) {
            throw new Error("Task difficulty has te be a number value and between 1 and 5")
        }
        this._difficulty = value
    }
    set target(value){
        if(typeof value !== "string" || !value.trim()){
            throw new Error("Task target has to be a string value")
        }
        this._target = value
    }

    get name(){
        return this._name
    }
    get difficulty(){
        return this._difficulty
    }
    get target(){
        return this._target
    }

    toJSON(){
        return{
            _name: this._name,
            _difficulty: this._difficulty,
            _target: this._target
        }
    }
}