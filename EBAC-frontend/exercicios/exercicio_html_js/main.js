const formMaiorValor = document.querySelector('.box-comparador')
const valor1 = document.querySelector('#valor1')
const valor2 = document.querySelector('#valor2')
const RespostaMaiorValor = document.querySelector('.resposta-maior-valor')
const valor1Message = document.querySelector('.valor1-message')
const valor2Message = document.querySelector('.valor2-message')

function validaMaiorValor() {
    console.log('action')
    if (Number(valor1.value) <= Number(valor2.value)) {
        console.log('invalid')
        RespostaMaiorValor.innerHTML = 'o primeiro valor deve ser maior'
        RespostaMaiorValor.classList.add('invalid')
        RespostaMaiorValor.classList.remove('valid')
        valor2.classList.remove('valid')
        valor1.classList.remove('valid')
        valor2.classList.add('invalid')
        valor1.classList.add('invalid')
    }
    else{
        console.log('valid')
        RespostaMaiorValor.innerHTML = 'válido'

        RespostaMaiorValor.classList.remove('invalid')
        RespostaMaiorValor.classList.add('valid')
        valor2.classList.add('valid')
        valor1.classList.add('valid')
        valor2.classList.remove('invalid')
        valor1.classList.remove('invalid')
    }
}

formMaiorValor.addEventListener('submit', function(e){ 
    // desabilida as funções padrão do submit
    e.preventDefault()
    // se o primeiro valor for for maior, dá o formulário como aceito
    if (Number(valor1.value) > Number(valor2.value)) {
        RespostaMaiorValor.classList.add('valid')
        
        RespostaMaiorValor.innerHTML = `Formulário aceito <br> O maior valor é: <strong>${valor1.value}</strong>`
    }
})
valor1.addEventListener('keyup', function(){
    validaMaiorValor()
})
valor2.addEventListener('keyup', function(){
    validaMaiorValor()
})
