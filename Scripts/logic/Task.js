export class Task{
    constructor(name, difficulty, target, deadline){
        this.name = name;
        this.difficulty = difficulty;
        this.target = target;
        this.deadline = deadline;
    }

    completed(){
        return {"target": this.target, "amount": 2}
    }

}