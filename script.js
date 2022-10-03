const displayCalculator = document.querySelector(".result-display");
const numberBtns = document.querySelectorAll(".number-container button")
const operatorBtns = document.querySelectorAll(".operators-container button");
const turnNegativeBtn = document.querySelector(".negative-btn");

let firstArrayNumbers = [];
let secondArrayNumbers = [];
let isOperatorCheck = false;
let firstNumber;
let secondNumber;
let isResultValid = false;
let selectOperator;

let isNegative = false;
let isFirstNumberNegative = false;
let isSecondNumberNegative = false;
displayCalculator.textContent = 0;
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
        // displayCalculator.textContent = numbers;
        return parseInt(numbers);
    } else {
        secondArrayNumbers.push(parseInt(value));
        numbers = secondArrayNumbers.join("");
        // displayCalculator.textContent = numbers;
        return parseInt(numbers);
    }
};

function setNegativeNumber(){
    isNegative = !isNegative;
    if(!isOperatorCheck){
    if(firstNumber != undefined && isNegative ){
        firstNumber = firstNumber * -1;
        displayCalculator.textContent = firstNumber;
    } else if (firstNumber != undefined && !isNegative ){
        firstNumber = firstNumber * -1;
        displayCalculator.textContent = firstNumber;
    } 
    } else {
    if(secondNumber != undefined && isNegative ){
        secondNumber = secondNumber * -1;
        displayCalculator.textContent = secondNumber;
    } else if (secondNumber != undefined && !isNegative ){
        secondNumber = secondNumber * -1;
        displayCalculator.textContent = secondNumber;
    } 
    }
}
console.log(parseFloat(2));
function setFloatNumber(){

}
//////////

numberBtns.forEach(button => {
    button.addEventListener("click",(event) => {
        if(!isOperatorCheck){
            firstNumber = getNumber(event.target.value);
            displayCalculator.textContent = firstNumber;
        } else {
            secondNumber = getNumber(event.target.value);
            displayCalculator.textContent = secondNumber;
        }
    });
});
turnNegativeBtn.addEventListener("click", setNegativeNumber)

operatorBtns.forEach(button => {
    button.addEventListener("click",(event) => {
        switch (event.target.value) {
            case "clean":
                isOperatorCheck = false;
                firstArrayNumbers = [];
                secondArrayNumbers = [];
                // firstNumber = 0;
                // secondNumber = 0;
                displayCalculator.textContent = firstNumber;
                break;
            case "+":
                isOperatorCheck = true;
                selectOperator = "+";
                isResultValid = true;
                firstArrayNumbers = [];
                secondArrayNumbers = [];
                break;
            case "-":
                isOperatorCheck = true;
                selectOperator = "-";
                isResultValid = true;
                firstArrayNumbers = [];
                secondArrayNumbers = [];
                break;
            case "*":
                isOperatorCheck = true;
                selectOperator = "*";
                isResultValid = true;
                firstArrayNumbers = [];
                secondArrayNumbers = [];
                break;
            case "/":
                isOperatorCheck = true;
                selectOperator = "/"
                isResultValid = true;
                firstArrayNumbers = [];
                secondArrayNumbers = [];
                break;
            default:
                break;
        }
        if(isResultValid && event.target.value == "result"){
            isResultValid = false;
            isOperatorCheck = false;
            console.log(firstNumber,selectOperator,secondNumber);
            switch (selectOperator) {
                case "+":
                    displayCalculator.textContent = operate(add,firstNumber,secondNumber);
                    firstNumber = operate(add,firstNumber,secondNumber);
                    firstArrayNumbers = [];
                    secondArrayNumbers = [];
                    selectOperator = "";
                    break;
                case "-":
                    displayCalculator.textContent = operate(subtract,firstNumber,secondNumber);
                    firstNumber = operate(subtract,firstNumber,secondNumber);
                    firstArrayNumbers = [];
                    secondArrayNumbers = [];
                    break;
                case "*":
                    displayCalculator.textContent = operate(multiply,firstNumber,secondNumber);
                    firstNumber = operate(multiply,firstNumber,secondNumber);
                    firstArrayNumbers = [];
                    secondArrayNumbers = [];
                    break;
                case "/":
                    displayCalculator.textContent = operate(divide,firstNumber,secondNumber);
                    firstNumber = operate(divide,firstNumber,secondNumber);
                    firstArrayNumbers = [];
                    secondArrayNumbers = [];
                    break;
                default:
                    break;
            }
        }
        })
    })






    // if(secondNumber != undefined){
    //     switch (selectOperator) {
    //         case "+":
    //                 displayCalculator.textContent = operate(add,firstNumber,secondNumber);
    //                 firstNumber = operate(add,firstNumber,secondNumber);
    //                 firstArrayNumbers = [];
    //                 secondArrayNumbers = [];
    //                 break;
    //         case "-":
    //                 displayCalculator.textContent = operate(subtract,firstNumber,secondNumber);
    //                 firstNumber = operate(subtract,firstNumber,secondNumber);
    //                 // secondNumber = 0;
    //                 firstArrayNumbers = [];
    //                 secondArrayNumbers = [];
    //                 break;
    //         case "*":
    //                 displayCalculator.textContent = operate(multiply,firstNumber,secondNumber);
    //                 firstNumber = operate(multiply,firstNumber,secondNumber);
    //                 // secondNumber = 0;
    //                 firstArrayNumbers = [];
    //                 secondArrayNumbers = [];
    //                 break;
    //         case "/":
    //                 displayCalculator.textContent = operate(divide,firstNumber,secondNumber);
    //                 firstNumber = operate(divide,firstNumber,secondNumber);
    //                 // secondNumber = 0;
    //                 firstArrayNumbers = [];
    //                 secondArrayNumbers = [];
    //                 break;
    //         default:
    //                 break;
    //     }
    // }
