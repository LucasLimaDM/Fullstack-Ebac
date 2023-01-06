const formMaiorValor = document.querySelector('.box-comparador')
const valor1 = document.querySelector('#valor1')
const valor2 = document.querySelector('#valor2')
const RespostaMaiorValor = document.querySelector('.resposta-maior-valor')
formMaiorValor.addEventListener('submit', function(e){
   
    // desabilida as funções padrão do submit
    e.preventDefault()

    // faz a seleção do maior valor
    if (Number(valor1.value) < Number(valor2.value)){
        var MaiorValor = valor2.value
    }
    if (Number(valor2.value) < Number(valor1.value)) {
        var MaiorValor = valor1.value
    }

    RespostaMaiorValor.style.display = 'block'
    RespostaMaiorValor.innerHTML = `O maior valor é: <strong>${MaiorValor}</strong>`



})