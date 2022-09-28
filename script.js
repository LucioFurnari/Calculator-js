

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
console.log(operate(divide,2,5));