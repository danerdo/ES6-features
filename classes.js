class Dog {
    constructor() {
        console.log('here comes the dog!');
    }

    static bark() {
        console.log('Ruf ruf!!');
    }

    sit() {
        console.log('dog is now sitting');
    }
}

class Lab extends Dog {
    constructor() {
        super();
        console.log('here comes the lab!');
    }

    sploot() {
        console.log('lab is laying on belly with rear legs spread out flat on ground');
    }
}

// const dog = new Dog();
// dog.sit();
// Dog.bark();

const lab = new Lab();
lab.sit();
lab.sploot();