

class Card {
    consctructor(name,cost){
        this.name = name ;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor (name,cost,power,resilience){
        super(name);
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;

    }
    attack(target){
        if (target instanceof Unit){
            target.resilience -= this.power;
        }
        else {
            throw new Error ("the target must be a Unit");
        }
    }
}

class Effect extends Card{
    constructor (name,cost){
        super(name,cost);

    }
    hard(target){
        if(target instanceof Unit){
                target.resilience += 3;
        }
        else {
            throw new Error("Target Must be a unit");
        }

    }
    unhanded(target){
        if(target instanceof Unit){
                target.resilience -= 2;
        }
        else {
            throw new Error("Target Must be a unit");
        }

    }
    pair(target){
        if(target instanceof Unit){
                target.power += 2;
        }
        else {
            throw new Error("Target Must be a unit");
        }

    }


}







const redBeltNinja = new Unit("Red Belt Ninja" , 3,3,4);
const blackBeltNinja = new Unit("Black Belt Ninja",4,5,4);

console.log(redBeltNinja.resilience);




const hardAlgorith = new Effect("Hard Algorith",2);
hardAlgorith.hard(redBeltNinja);
console.log(redBeltNinja.resilience);

const unhandedPromise = new Effect("Unhanded Promise rejection",1);
unhandedPromise.unhanded(redBeltNinja);
console.log(redBeltNinja.resilience);

const pairProgramming = new Effect("Pair Programming",3);
pairProgramming.pair(redBeltNinja);
console.log(redBeltNinja.power);

console.log(`red power ${redBeltNinja.power} , black resilence ${blackBeltNinja.resilience} `)


console.log(blackBeltNinja.resilience);
redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja.resilience);
