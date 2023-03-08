const keys = document.querySelectorAll('.tecla');
const result = document.querySelector('.result');
const allNumbers = [''];
let lastNum;

// adiciona events a todas as teclas e as redireciona para o ativaTecla, onde cada uma irá para suas devidas funções
for (const key of keys) {
    
    key.addEventListener('click', function(){
        ativaTecla(key)
    })
}

// redireciona cada tecla clicada para seus devidos comportamentos, iniciando pelos números, operadores e enviando os caracteres especiais para o objeto specialKeys, que contém uma função para cada tecla especial
function ativaTecla(key) {
    
    let keyText = key.innerText;

    if (!(isNaN(keyText))){
        
        allNumbers[allNumbers.length -1] += keyText;
        updateCalc();

        console.log("🚀 allNumbers:", allNumbers)
    } 
    
    lastNum = allNumbers[allNumbers.length - 1];
    console.log("🚀 lastNum:", lastNum)

    if ( key.classList.contains('operator') && lastNum.match(/[0-9]/)) {
        
        operatorAdd(keyText)
        updateCalc()

        console.log("🚀  allNumbers:", allNumbers)
    } 
    if ( key.classList.contains('special')) {
        
        specialKeys[key.id](lastNum)
        
    }

}

function operatorAdd(keyText) {
    allNumbers.push(keyText);
    allNumbers.push('')
}

// dá o comportamento específico para cada tecla especial
const specialKeys = {
    
    delete(lastNumber) {
        deleteNumber(lastNumber)
        updateCalc()
    },
    
    clean(){
        cleanNumbers()
        updateCalc()
    },

    equal() {
        doAccount()
        updateCalc()
    },
    
    dot(lastNumber){
        if (!(lastNumber.includes('.'))) {
            allNumbers[allNumbers.length -1] += '.';
        }
        updateCalc()
    }
    
}




// limpa a o
function cleanNumbers() {
    allNumbers.splice(0, allNumbers.length);
    allNumbers.push('');
}


function testInt(value){
    let number = Number(value);
    let isInt = Math.floor(number) === number;
    return isInt;
}


function doAccount() {
    let realization = eval(allNumbers.join(''));

    cleanNumbers()

    if (!(testInt(realization))){

        realization = realization.toFixed(2);
    } 

    allNumbers.splice(allNumbers.length - 1 , 1, String(realization));
}


function updateCalc() {
    result.innerText = allNumbers.join(''); 
}


function removeEmpty(lastNumber) {

    while (lastNumber === '') {

        allNumbers.pop();
        console.log("🚀 allNumbers:", allNumbers)
        
        lastNumber = allNumbers[allNumbers.length -1];
        lastNum = lastNumber;

    }
}

function deleteNumber(lastNumber) {
    if (allNumbers[0].length > 0) {

        removeEmpty(lastNumber)
    
        allNumbers[allNumbers.length -1] = lastNumber.slice(0, lastNumber.length - 1)

        removeEmpty(lastNumber)

        console.log('delete - allNumbers', allNumbers)

        console.log('delete - allNumbers', allNumbers)
    }
}