var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    toCheckNumber()
}

function decrement(){
    currentNumber = currentNumber - 1 ;
    currentNumberWrapper.innerHTML = currentNumber;
    toCheckNumber()
}

function toCheckNumber(){
    currentNumber < 0 ? currentNumberWrapper.style.color = 'red': currentNumberWrapper.style.color = 'black'
}