const { constants } = require("buffer");

const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

const printName2 = ({name}) => {
    console.log(name);
}

printName2(person);

const {name, age} = person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking', 1, true, {}];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
