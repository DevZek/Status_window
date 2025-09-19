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

    set name(value){
        if(typeof value !== "string" || !value.trim()){
            throw new Error("Stat name has to be a string value")
        }
        this._name = value
    }
    set amount(value){
        if (typeof value !== "number") {
            throw new Error("Stat amount has te be a number value")
        }
        this._amount = value
    }
    get name(){
        return this._name
    }
    get amount(){
        return this._amount
    }
}