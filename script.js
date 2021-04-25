const numButtons = document.querySelectorAll('.numbers');
const currdisplay = document.querySelector('.currDisplay');
const prevdisplay = document.querySelector('.prevDisplay');
const operands = document.querySelectorAll('.operands');
const clearEverything = document.querySelector('.ce');
const enter = document.querySelector('.enter');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const neg = document.querySelector('.neg');
const sqrt = document.querySelector('.sqrt');
let currNum = '';
let dummyCurrNum = '';
let prevNum = '';
let dummyPrevNum = '';
let operater = '';
let dummyOp = '';
let result = '';
let dummyResult = '';


const copyThis = document.getElementById('copyemail');
copyThis.addEventListener('click', () => {
  copyThis.select();
  copyThis.setSelectionRange(0, 99999);
  document.execCommand('copy');
})


//used for testing in the console.
const checkall = () => {
  console.log(`currNum = ${currNum} dummyCurNum = ${dummyCurrNum} prevNum = ${prevNum} dummyPrevNum = ${dummyPrevNum} operater = ${operater} dummyOp = ${dummyOp} result = ${result} dummyResult = ${dummyResult}`);
}

const makeNegative = () => {
  neg.addEventListener('click', () => {
    if(currNum[0] === '-'){
      currNum = currNum.substring(1);
      // if(result !== ''){
      //   currdisplay.textContent = `${result}`
      // }
      currdisplay.textContent = `${prevNum} ${operater} ${currNum}`;
      return;
    }
    currNum = '-' + currNum;
    currdisplay.textContent = `${prevNum} ${operater} ${currNum}`;
    return;
  })
}

const clearAll = () => {
    prevNum = '';
    currNum = '';
    operater = '';
    result = '';
    dummyPrevNum = '';
    dummyCurrNum = '';
    dummyResult = '';
    dummyOp = ''
    prevdisplay.textContent = '';
    currdisplay.textContent = '';
}

const handlerForclearAll = () => {
  clearEverything.addEventListener('click', clearAll);
  window.addEventListener('keydown', (event) => {
    if(event.key === 'Delete'){
      clearAll();
    }
  });
}

//logic for backspace/deleteOne
const deleteOne = () => {
  if(operater === '' && currNum === ''){
    return;
  }
  if(result !== ''){
    prevNum = result;
      operater = '';
      dummyOp = '';
    }
    if(operater !== '' && currNum === ''){
      operater = '';
      currdisplay.textContent = `${prevNum} ${operater} ${currNum}`;
      return;
    }
    currNum = currNum.slice(0, -1);
    dummyCurrNum = currNum;
    currdisplay.textContent = `${prevNum} ${operater} ${currNum}`;
}

//function for holding both click and keydown events to invoke backspace/deleteOne
const handlerFordeleteOne = () => {
  backspace.addEventListener('click', deleteOne);
  window.addEventListener('keydown', (event) => {
    if(event.key === "Backspace"){
      return deleteOne();
    }
    return;
  });
}

const clearCurrNum = () => {
  clear.addEventListener('click', () => {
    if(result !== ''){
      prevNum = result;
    }
    currNum = '';
    dummyCurrNum = '';
    currdisplay.textContent = `${prevNum} ${operater} ${currNum}`;
    return;
  }) 
}

//logic for getting a number
const getCurrNum = (input) => {
  if(currdisplay.textContent.length > 27){
    return;
  }
  if(result !== '' && operater === ''){
    return;
  }
  if(dummyResult !== '' && operater === ''){
    return
  }
  if(input === "."){
    currNum = currNum.toString();
    if (currNum.includes(".")) return
  }
  currNum += input;
  currdisplay.textContent += input;
  dummyCurrNum = currNum;
}

//function that holds the click and keydown events that invoke logic to get a number (getCurrNum)
const userInputgetCurrNum = () => {
  for(let i=0; i<numButtons.length; i++){
    numButtons[i].addEventListener('click', (event) => {
      const userinput = event.target.textContent;
      getCurrNum(userinput);
    });
  }

  window.addEventListener('keydown', (event) => {
    for(let value of numButtons.values()){
      if(event.key === value.textContent){
        getCurrNum(event.key);
      }
    }
  })
}

const compute = function(prevNum, operater, currNum){
    if(operater === '' || prevNum === '' || currNum === ''){
      return;
    }
    currNum = parseFloat(currNum);
    prevNum = parseFloat(prevNum);
    result = parseFloat(result);
    if(operater === '+'){
        result = prevNum + currNum;
        return result;
      }
      if(operater === '-'){
        result = prevNum - currNum;
        return result;
      }
      if(operater === '*'){
        result = prevNum * currNum;
        return result;
      }
      if(operater === '/'){
        result = prevNum / currNum;
        return result;
      }
      if(operater === '^'){
        result = prevNum ** currNum;
        return result;
      }
      if(operater === '%'){
        result = prevNum % currNum;
        return result;
      }
}

//logic to get operater
const getOp = (input) => {
  if(currNum !== '' && prevNum !== '' && operater !== ''){
      compute(prevNum, operater, currNum);
  }

  dummyOp = operater;
  
  operater = input;

  if(prevNum !== '' && operater !== '' && currNum !== ''){
    prevdisplay.textContent = `${prevNum} ${dummyOp} ${currNum}`;
  }

  if(currNum !== ''){
    prevNum = currNum;
    dummyPrevNum = prevNum;
    dummyPrevNum = dummyPrevNum;
    currNum = '';
    currdisplay.textContent = `${prevNum} ${operater} ${currNum}`;
  }
  
  if(result !== ''){
    currdisplay.textContent = `${result} `;
    prevNum = result;
    prevNum = prevNum;
    dummyResult = result;
    result = '';
  }

  if(dummyResult !== ''){
    currdisplay.textContent = `${dummyResult} ${operater} `;
  }
}

//keydown and click event handlers for invoking getOp
const handlerForgetOps = () => {
  for(let i = 0; i<operands.length; i++){
    operands[i].addEventListener('click', (event) => {
      const userinput = event.target.textContent;
      getOp(userinput);
    })
  }
  for(let value of operands.values()){
    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      if(event.key === value.textContent){
        const userinput = event.key;
        getOp(userinput);
      }
    })
  }
}

//logic for getting result (when user hits enter)
const getResult = () => {
    if(operater === '' || prevNum === '' || currNum === '' || currNum === '-'){
      return;
    }
    if(result !== ''){
      prevNum = result;
      prevNum = prevNum;
      result = '';
    }
    compute(prevNum, operater, currNum);
    prevdisplay.textContent = `${prevNum} ${operater} ${currNum}`;
    currdisplay.textContent = `${result}`
    prevNum = '';
    currNum = '';
    operater = '';
    dummyPrevNum = '';
    dummyCurrNum = '';
    dummyResult = '';
    dummyOp = ''
}
//keydown and click event handlers to call/invoke getResult
const handlerForgetResult = () => {
  enter.addEventListener('click', () => {
    getResult();
  })
  window.addEventListener('keydown', (event) => {
    event.preventDefault();
    if(event.key === "Enter"){
      getResult();
    }
  })
}

const getSqrt = () => {
  sqrt.addEventListener('click', (event) => {
    if(result !== '' && operater === '' && currNum === ''){
      currNum = result;
    }
    if(result === '' && dummyResult !== ''){
      currNum = dummyResult;
    }
    if(currNum === ''){
      return;
    }
    operater = event.target.textContent;
    prevdisplay.textContent = `${operater} ${currNum}`
    result = Math.sqrt(currNum);
    currdisplay.textContent = result;
    operater = '';
    currNum = '';
  })
}

const calculator = function(){
  makeNegative();
  userInputgetCurrNum();
  clearCurrNum();
  handlerForclearAll();
  handlerFordeleteOne();
  handlerForgetResult();
  getSqrt();
  handlerForgetOps();
}

calculator();



