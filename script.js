const displayCalculator = document.querySelector(".result-display");
const numberBtns = document.querySelectorAll(".number-container button")
const operatorBtns = document.querySelectorAll(".operators-container button");

let firstArrayNumbers = [];
let secondArrayNumbers = [];
let isOperatorCheck = false;
let firstNumber;
let secondNumber;
let isResultValid = false;
let selectOperator;

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
        
        return parseInt(numbers);
    } else {
        secondArrayNumbers.push(parseInt(value));
        numbers = secondArrayNumbers.join("");
        displayCalculator.textContent = numbers;
        return parseInt(numbers);
    }
};

//////////

numberBtns.forEach(button => {
    button.addEventListener("click",(event) => {
        if(!isOperatorCheck){
            firstNumber = getNumber(event.target.value);
        } else {
            secondNumber = getNumber(event.target.value);
        }
    });
});


operatorBtns.forEach(button => {
    button.addEventListener("click",(event) => {
        isOperatorCheck = true;
        switch (event.target.value) {
            case "clean":
                firstArrayNumbers = [];
                secondArrayNumbers = [];
                firstNumber ="";
                secondNumber ="";
                displayCalculator.textContent = "";
            case "+":
                selectOperator = "+";
                isResultValid = true;
                break;
            case "-":
                selectOperator = "-";
                isResultValid = true;
                break;
            case "*":
                selectOperator = "*";
                isResultValid = true;
                break;
            case "/":
                selectOperator = "/"
                isResultValid = true;
                break;
            default:
                break;
        }

        if(isResultValid && event.target.value == "result"){
            isOperatorCheck = false;
            switch (selectOperator) {
                case "+":
                    displayCalculator.textContent = operate(add,firstNumber,secondNumber);
                    firstArrayNumbers = [];
                    secondArrayNumbers = [];

                    break;
                case "-":
                    displayCalculator.textContent = operate(subtract,firstNumber,secondNumber);
                    firstArrayNumbers = [];
                    secondArrayNumbers = [];
                    break;
                case "*":
                    displayCalculator.textContent = operate(multiply,firstNumber,secondNumber);
                    firstArrayNumbers = [];
                    secondArrayNumbers = [];
                    break;
                case "/":
                    displayCalculator.textContent = operate(divide,firstNumber,secondNumber);
                    firstArrayNumbers = [];
                    secondArrayNumbers = [];
                    break;
                default:
                    break;
            }
        }

        })
    })