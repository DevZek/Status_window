class Character{
    constructor(id, name, statArray, skillArray, taskArray){
        this.id = id;
        this.name = name;
        this.statArray = statArray;
        this.skillArray = skillArray;
        this.taskArray = taskArray
    }

    completeTask(task){
        const taskIndex = this.taskArray.findIndex((e) => e === task)
        const objTask = this.taskArray[index].completed();
        
        const statIndex = this.statArray.findIndex((e) => e.name === objTask.target)
        this.statArray[statIndex].amount += objTask.amount;
    }

    addTask(task){
        this.taskArray.push(task);
    }

    addStat(stat){
        this.statArray.push(stat);
    }

    addSkill(skill){
        this.skillArray.push(skill);  
    }

    toJSON(){}
}