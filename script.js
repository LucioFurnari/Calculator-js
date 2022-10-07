const displayCalculator = document.querySelector(".result-display");
const numberBtns = document.querySelectorAll(".number-container button")
const operatorBtns = document.querySelectorAll(".operators-container button");
const turnNegativeBtn = document.querySelector(".negative-btn");
const turnFloatNumberBtn = document.querySelector(".float-btn");
const resultBtn = document.querySelector(".result-btn");
const cleanBtn = document.querySelector(".clean-btn");
const deleteBtn = document.querySelector(".delete-btn");

let firstArrayNumbers = [];
let secondArrayNumbers = [];
let isOperatorCheck = false;
let firstNumber = 0;
let secondNumber;
let isResultValid = false;
let selectOperator;

let isNegative = false;
let getFloatNumber = false;
let isFloatNumber = false;
let isSecondFloatNumber = false;

let lastOperator;
let newOperator;
////////////////////////////////////////

displayCalculator.textContent = firstNumber;
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
    let isArrayFloat;
    if(!isOperatorCheck && value != ""){
        isArrayFloat = firstArrayNumbers.find(elem => elem == ".")
        if(getFloatNumber && isArrayFloat == undefined){
            getFloatNumber = false;
            isFloatNumber = true;
            firstArrayNumbers.push(".");
        };
        firstArrayNumbers.push(value);
        numbers = firstArrayNumbers.join("");
        return (isFloatNumber ? parseFloat(numbers) : parseInt(numbers));
    } else {
        isArrayFloat = secondArrayNumbers.find(elem => elem == ".");
        if(getFloatNumber && isArrayFloat == undefined && !isSecondFloatNumber){
            getFloatNumber = false;
            isSecondFloatNumber = true;
            secondArrayNumbers.push(".");
        };
        secondArrayNumbers.push(value);
        numbers = secondArrayNumbers.join("");
        return (isSecondFloatNumber ? parseFloat(numbers) : parseInt(numbers)); 
    };
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
    } };
};
function setFloatNumber(){
    getFloatNumber = true;
};

function getOperator(event){
if(event.target.value){
    isOperatorCheck = true;
    if(lastOperator && secondNumber){
        newOperator = event.target.value;
        // displayCalculator.textContent  = 
        getResult();
        lastOperator = newOperator;
    } else {
        lastOperator = event.target.value;
    };
}};

function getResult(){
    if(lastOperator && secondNumber || secondNumber == 0){
        let result;
        switch (lastOperator) {
            case "+":
                result = add(firstNumber,secondNumber);
                break;
            case "-":
                result = subtract(firstNumber,secondNumber);
                break;
            case "*":
                result = multiply(firstNumber,secondNumber);
                break;
            case "/":
                result = secondNumber == 0 ? "bruh" : divide(firstNumber,secondNumber);
                // result = divide(firstNumber,secondNumber);
                break;
            default:
                break;
        };
        displayCalculator.textContent = result;
        if(typeof(result) == "string"){
            firstNumber = 0;
        } else {
            firstNumber = result;
        };
        lastOperator = undefined;
        firstArrayNumbers = firstNumber.toString().split("");
        console.log(firstArrayNumbers);
        secondArrayNumbers = [];
        // return result;
    };
}

function cleanNumbers(){
    firstArrayNumbers = [];
    secondArrayNumbers = [];
    firstNumber = 0;
    secondNumber = undefined;
    displayCalculator.textContent = firstNumber;
};

function deleteNumber(){
    let numberToString;
        if(!isOperatorCheck && firstArrayNumbers){
            firstArrayNumbers.splice(-1,1);
            numberToString = firstArrayNumbers.join("");
            firstNumber = numberToString
            if(numberToString == ""){
                numberToString = 0;
            }
            if(isFloatNumber){
                firstNumber = parseFloat(numberToString)
            }else{
                firstNumber = parseInt(numberToString);   
            };
            displayCalculator.textContent = numberToString;
        } else if(isOperatorCheck && secondArrayNumbers){
            secondArrayNumbers.splice(-1,1);
            numberToString = secondArrayNumbers.join("");
            secondNumber = numberToString;
            if(numberToString == ""){
                numberToString = 0;
            }
            if(isSecondFloatNumber){
                secondNumber = parseFloat(numberToString);
            } else {
                secondNumber = parseInt(numberToString);
            };
            displayCalculator.textContent = numberToString;
        };
}
////////////////////////////////////////////////////////////////////////////////

numberBtns.forEach(button => {
    button.addEventListener("click",(event) => {
    if(event.target.value){
        if(!isOperatorCheck){
            firstNumber = getNumber(event.target.value);
            displayCalculator.textContent = firstNumber;
        } else {
            secondNumber = getNumber(event.target.value);
            displayCalculator.textContent = secondNumber;
        }
    }});
});
turnNegativeBtn.addEventListener("click", setNegativeNumber);
turnFloatNumberBtn.addEventListener("click",setFloatNumber);

operatorBtns.forEach(button => {
    button.addEventListener("click",getOperator);
})
resultBtn.addEventListener("click",() => {
    // displayCalculator.textContent = 
    getResult();
    // console.log(getResult());
    isOperatorCheck = false;
});

cleanBtn.addEventListener("click",cleanNumbers);

deleteBtn.addEventListener("click",deleteNumber);