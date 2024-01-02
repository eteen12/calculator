let operator = '';
let previousValue = '';
let currentValue = '';




document.addEventListener("DOMContentLoaded",function(){
    //This will store all the componenets from index.html into my JS
    let operators = document.querySelectorAll('.operator');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let decimal = document.querySelector('.decimal');
    let numbers = document.querySelectorAll('.number');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
        currentScreen.textContent=currentValue;
    }))
})

function handleNumber(num){
    currentValue += num;

}