function getPin(){
    const random = Math.random()*10000;
    const pin =( random +"").split('.')[0];
    if(pin.length === 4){
        return pin ;
    }else{
        return getPin();
    }
}

// Display generated  pin
function generatePin(){
    const pinInput = document.getElementById('pin').value=getPin()
}

//handle calculator button event
const buttonContainer = document.getElementById("button-container").addEventListener('click', function (event){
   const digit= event.target.innerText;

   if(isNaN(digit)){
    if(digit === 'C'){
        const typeInput = document.getElementById("type-pin");
       typeInput.value='';
    }
   }  else{
       const typeInput = document.getElementById("type-pin");
       typeInput.value=typeInput.value+digit;
   }
})

// verify pin
function checkPin(){
    const pin = document.getElementById('pin').value;
    const typePin = document.getElementById("type-pin").value;
    if(pin === typePin){
        displayMatchResult('block', 'none');
    }else{
        displayMatchResult('none', 'block');
    }
}

function displayMatchResult(correctStatus, incorrectStatus){
    const correct =  document.getElementById("correct");
        correct.style.display = correctStatus;
        const incorrect =  document.getElementById("incorrect");
        incorrect.style.display = incorrectStatus;
}

