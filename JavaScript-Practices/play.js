const name = 'Max';
let age = 20;
let hasHobbies = true;

age = 30;
//name = 'Secil'; const is like final
//var : variable, can be changed anywhere
//let : functioned based //CHECK var vs let

// function summarizeUser(userName, userAge, userHasHobby){ 
//     return (
//         'Name is ' + 
//         userName + 
//         ', age is ' + 
//         userAge + 
//         ', and the user has hobbies: ' + 
//         hasHobbies
//     );
// }
//     console.log(summarizeUser(name, age, hasHobbies));

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ', and the user has hobbies: ' + 
        hasHobbies
    );
};
    console.log(summarizeUser(name, age, hasHobbies));

    const add = (a,b) => a + b;

    console.log(add(1,2));

    const addOne = (a) => a+1;

    console.log(addOne(1));

    const addRandom = () => 1+2;
    console.log(addRandom());