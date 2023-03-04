const buttonPlus = document.querySelector('button[value="+"]');
const buttonMinus = document.querySelector('button[value="-"]');
let result = 0;
let counter;
let counterBox = document.querySelector('input[type="number"]');
const displayResult = document.querySelector('#result');

updateCounter();
updateDisplayCounter();

counterBox.addEventListener('keyup', function(){
    updateCounter();
    console.log(counter);
});

buttonPlus.addEventListener('click', function(){
  result += counter;
  updateDisplayCounter();
});  

buttonMinus.addEventListener('click', function(){   
  result -= counter;
  updateDisplayCounter();
});

function updateDisplayCounter(){
  displayResult.innerText = result;
  console.log(result);
};

function updateCounter() {
    counter = Number(counterBox.value);
    console.log(counter);
};