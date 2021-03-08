let arr = [123]
const display = document.querySelector(".resultdisplay");
display.textContent = arr;
const buttons = document.querySelectorAll('.buttons');

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(e){
        console.log(e.target.className);
        console.log(e);
        console.log(this)

        if(e.target.className === "buttons nine"){
            console.log("nine")
            arr.push(9);
            display.textContent = arr;
        }

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


