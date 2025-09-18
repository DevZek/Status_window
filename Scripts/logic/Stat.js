export class Stat{
    constructor(name, amount){
        this.name = name;
        this.amount = amount 
    }
    increase(amount){
        this.amount += amount;
    }
    decrease(amount){
        this.amount = Math.max(0, this.amount - amount)
    }
    toJSON(){
        return {"name":this.name, "amount":this.amount, "type":this.type}
    }
}