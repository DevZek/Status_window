export class Skill{

    #BASEGAIN = 0.1
    #SCALEFACTOR = 35

    constructor(name, amount){
        this.name = name;
        this.amount = amount 
    }
    increase(){
        this.amount +=  Number.parseFloat((this.#BASEGAIN / (1 + this.amount / this.#SCALEFACTOR)).toFixed(4))
    }
    decrease(amount){
        this.amount = Math.max(0, this.amount - amount)
    }
    
    set name(value){
        if(typeof value !== "string" || !value.trim()){
            throw new Error("Skill name has to be a string value")
        }
        this._name = value
    }
    set amount(value){
        if (typeof value !== "number") {
            throw new Error("Skill amount has te be a number value")
        }
        this._amount = value
    }
    get name(){
        return this._name
    }
    get amount(){
        return this._amount
    }
    toJSON(){
        return{
            _name: this._name,
            _amount: this._amount
        }
    }
}