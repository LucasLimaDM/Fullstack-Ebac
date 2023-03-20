const keys = document.querySelectorAll('.tecla');
const result = document.querySelector('.result');
const allNumbers = [''];
const operatorList = ['*', '/', '+', '-']



// adiciona events a todas as teclas e as redireciona para o ativaTecla, onde cada uma irá para suas devidas funções

window.addEventListener('keydown', function(e){
    console.log(e);
    activeKey(e.key);
})

for (const key of keys) {
    
    key.addEventListener('click', function(){
        activeKey(key.innerText)
    })
}

// redireciona cada tecla clicada para seus devidos comportamentos, iniciando pelos números, operadores e enviando os caracteres especiais para o objeto specialKeys, que contém uma função para cada tecla especial
function activeKey(keyValue) {
    
    if (keyValue === 'Enter') {
        keyValue = '=';
    }

    if (!(isNaN(keyValue))){
        
        allNumbers[allNumbers.length -1] += keyValue;
        updateCalc();

        console.log("🚀 allNumbers:", allNumbers)
    } else if ( operatorList.includes(keyValue) && allNumbers[allNumbers.length - 1].match(/[0-9]/)) {
        
        operatorAdd(keyValue);
        updateCalc()

        console.log("🚀  allNumbers:", allNumbers)
    } else {
        const keySymbol = specialSwitch(keyValue);
        console.log("🚀 keySymbol:", keySymbol)

        if (keySymbol) {

            specialKeys[keySymbol](allNumbers[allNumbers.length - 1])

        }
        
    }

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

function specialSwitch(value){
    switch (value) {

        case '.':
            return 'dot';
        
        case 'X':
            return 'delete';
        
        case 'C':
            return 'clean';

        case 'c':
            return 'clean';

        case '=':
            return 'equal';

        default:
            return false;
    }
}

function operatorAdd(keyText) {
    allNumbers.push(keyText);
    allNumbers.push('')
    console.log("🚀 allNumbers:", allNumbers)
    
}

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
    if (allNumbers[allNumbers.length - 1] === '') {
        activeKey(0);
    }
    let realization = eval(allNumbers.join(''));
    console.log("🚀 ~ file: script.js:116 ~ doAccount ~ realization:", realization)

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