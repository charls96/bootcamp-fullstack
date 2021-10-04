console.log('Hello World!');

// variables
let firstName = 'Carlos';            //save a variable an dyou can reassign it
const lastName = 4;                  // only read cannot change
var isDeveloper = true;              //not recommended it still exist in scopes(like functions) not as let (doesn't exit in scopes)

const nameCharls = 'Charls';
const nameUpperCase = nameCharls.toUpperCase();
console.log(nameUpperCase);

const list = [];                    //primitives are inmutable but objects for example its value can change
list.push(157);
const anotherList = list.concat(157);
list[0] = 'Pepe';
console.log(list);
console.log(anotherList);

const person = {
    name: 'Carlos',
    lastName: 'Jato',
    age: 26,
    isDeveloper: true,
    cars: ['Audi r8', 'Honda S2000']
}

console.log(person.age);
console.log(person.cars[0]);

const field = 'age';
console.log(person[field]);


const sum = (operand1, operand2) => {           //functions
    console.log(operand1);
    console.log(operand2);
    return operand1 +operand2;
}

function substraction (a, b) {
    return a - b;
}

const op1 = 8;
const op2 = 10;

console.log(sum(op1, op2));