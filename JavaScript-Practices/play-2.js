const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// console.log(person);
person.greet();

const hobbies = ['Sports', 'Cooking', 1, true, {}];

// for(let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => {
//     return 'Hobby: ' + hobby
// }));
//OR
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// hobbies.push('Programming');
// const copiedArray = hobbies.slice;
//const copiedArray = [hobbies];
const copiedArray = [...hobbies];
console.log(copiedArray);

const copiedPerson = {...person};
console.log(copiedPerson);

const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};  

console.log(toArray(1, 2, 3, 4 )); //prints-> [ 1, 2, 3 ]

const toArray2 = (...args) => {
    return args;
};  
console.log(toArray2(1,2,3,4));  // prints -> [ 1, 2, 3, 4 ]





