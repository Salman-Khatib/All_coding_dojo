


class Ninja {

    constructor(name){
        this.speed = 3;
        this.strength = 3;
        this.name = name;
        this.health = 100;
      
    }
    sayName(){
        console.log(`this is the Ninja name : ${this.name}`);
    }
    showStatus(){
        console.log(`the Ninja name is : ${this.name} , health :${this.health} , speed: ${this.speed}, strength:${this.strength}`)
    }

    drinkSake(){
        this.health +=10;
        console.log(`The Ninja health now is : ${this.health}`)
    }

}

class Sensei extends Ninja {

    constructor(name){
        super(name);
        this.speed = 10;
        this.health = 200;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("what one programmer can do in one month, two programmers can do in two months")

    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStatus();





// const ninja1 = new Ninja("hyabusa");
// ninja1.sayName();
// ninja1.showStatus();
// ninja1.drinkSake();