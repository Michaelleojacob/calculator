let arr = [];
const display = document.querySelector(".resultdisplay");
display.textContent = arr;
const buttons = document.querySelectorAll('.buttons');

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(e){
        // console.log(e.target.className);
        // console.log(e);
        // console.log(this)
        // console.log(e.target.outerText)
        let buttonClicked = parseInt(e.target.outerText)
        // console.log(buttonClicked);
        arr.push(buttonClicked);
        
        let displayedNumbers = parseInt(arr.join(''))

        display.textContent = displayedNumbers;

    } );
}


const operate = function(a, operater, b){

    if(operater === "+"){
        console.log(add(a,b))
    }
    else if(operater === '-'){
        console.log(subtract(a,b))
    }
    else if(operater === '*'){
        console.log(multiply(a,b))
    }
    else{
        console.log(divide(a,b))
    }
}

const add = function(a,b){
    return a + b;
}

const subtract = function(a,b){
    return a - b;
}

const multiply = function(a,b){
    return a * b;
}

const divide = function(a,b){
    return a / b;
}


