const displayCalculator = document.querySelector(".result-display");
const numberBtns = document.querySelectorAll(".number-container button")
const operatorBtns = document.querySelectorAll(".operators-container button");

const firstArrayNumbers = [];
const secondArrayNumbers = [];
let isOperatorCheck = false;
let firstNumber;
let secondNumber;

function add(numOne,numTwo){
    return numOne + numTwo;
};
function subtract(numOne,numTwo){
    return numOne - numTwo;
};
function multiply(numOne,numTwo){
    return numOne * numTwo;
};
function divide(numOne,numTwo){
    return numOne / numTwo;
};

function operate(operator,numOne,numTwo){
    return operator(numOne,numTwo);
};

function getNumber(value){
    let numbers;
    if(!isOperatorCheck){
        firstArrayNumbers.push(parseInt(value));
        numbers = firstArrayNumbers.join("");
        displayCalculator.textContent = numbers;
        return numbers;
    } else {
        secondArrayNumbers.push(parseInt(value));
        numbers = secondArrayNumbers.join("");
        displayCalculator.textContent = numbers;
        return numbers
    }
};

//////////

numberBtns.forEach(button => {
    button.addEventListener("click",(event) => {
        if(!isOperatorCheck){
            firstNumber = getNumber(event.target.value)
        } else {
            secondNumber = getNumber(event.target.value);
        }
        console.log(firstNumber);
        console.log(secondNumber);
    });
});

operatorBtns.forEach(button => {
    button.addEventListener("click",(event) => {
        isOperatorCheck = true;
        switch (event.target.value) {
            case "+":
                console.log(operate(add,firstNumber,secondNumber));
                break;
            case "-":
                console.log(operate(subtract,firstNumber,secondNumber));
                break;
            default:
                break;
        }
    })
});