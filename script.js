const displayCalculator = document.querySelector(".result-display");
const numberBtns = document.querySelectorAll(".number-container button")
const operatorBtns = document.querySelectorAll(".operators-container button");
const turnNegativeBtn = document.querySelector(".negative-btn");
const turnFloatNumberBtn = document.querySelector(".float-btn");

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
        }
        firstArrayNumbers.push(value);
        numbers = firstArrayNumbers.join("");
        if(isFloatNumber){ // Cambiar el nombre de la variable
            return parseFloat(numbers);
        } else {
            return parseInt(numbers);
        }
    } else {
        isArrayFloat = secondArrayNumbers.find(elem => elem == ".");
        if(getFloatNumber && isArrayFloat == undefined && !isSecondFloatNumber){
            getFloatNumber = false;
            isSecondFloatNumber = true;
            secondArrayNumbers.push(".");
        }
        secondArrayNumbers.push(value);
        numbers = secondArrayNumbers.join("");
        if(isSecondFloatNumber){ //Cambiar el nombre de la variable
            console.log(numbers); // Sacar
            return parseFloat(numbers);
        } else {
            return parseInt(numbers);
        }
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
function setFloatNumber(){
    getFloatNumber = true;
};
//////////

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
    button.addEventListener("click",(event) => {
        getFloatNumber = false;
        switch (event.target.value) { // Mejorar si es posible
            case "clean":
                isOperatorCheck = false;
                firstArrayNumbers = [];
                secondArrayNumbers = [];
                firstNumber = 0;
                // secondNumber = 0;
                displayCalculator.textContent = firstNumber;
                break;
            case "delete":
            let numberToString;
                if(!isOperatorCheck && firstArrayNumbers){
                    numberToString = firstNumber.toString().split("").slice(0,-1).join("")
                    firstArrayNumbers.splice(-1,1);
                    if(numberToString == ""){
                        numberToString = 0;
                    }
                    console.log(numberToString);
                    if(isFloatNumber){
                        firstNumber = parseFloat(numberToString)
                    }else{
                        firstNumber = parseInt(numberToString);   
                    };
                    console.log(firstNumber);
                    displayCalculator.textContent = firstNumber;
                } else if(isOperatorCheck && secondArrayNumbers){
                    numberToString = secondNumber.toString().split("").slice(0,-1).join("");
                    secondArrayNumbers.splice(-1,1);
                    if(numberToString == ""){
                        numberToString = 0;
                    }
                    if(isSecondFloatNumber){
                        secondNumber = parseFloat(numberToString);
                    } else {
                        secondNumber = parseInt(numberToString);
                    };
                    displayCalculator.textContent = secondNumber;
                };
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
            if(secondNumber == undefined){
                secondNumber = firstNumber;
            }
            switch (selectOperator) {
                case "+":
                    displayCalculator.textContent = operate(add,firstNumber,secondNumber);
                    firstNumber = operate(add,firstNumber,secondNumber);
                    firstArrayNumbers = [];
                    secondArrayNumbers = [];
                    // selectOperator = "";
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
                    if(secondNumber == 0){
                        displayCalculator.textContent = "bruh";
                    } else {
                    displayCalculator.textContent = operate(divide,firstNumber,secondNumber);
                    firstNumber = operate(divide,firstNumber,secondNumber);
                    firstArrayNumbers = [];
                    secondArrayNumbers = [];
                    }
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
