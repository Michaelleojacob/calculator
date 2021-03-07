let arr = []

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


