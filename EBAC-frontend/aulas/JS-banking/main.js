 //declaração das variaveis
const form = document.getElementById('form-deposito')
const valorDeposito = document.getElementById('valorDeposito')
const contaBeneficiario = document.getElementById('contaBeneficiario')
const nomeBeneficiario = document.getElementById('nomeBeneficiario')
const descricaoDeposito = document.getElementById('descricaoDeposito')
const respostaDeposito = document.querySelector('.resposta-deposito')
const nameMessage = document.querySelector('.name-message')
const valueMessage = document.querySelector('.value-message')
const accountMessage = document.querySelector('.account-message')

// funções de validação
function validaNome(nomeCompleto) {
    let nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2 
}
function validaConta(conta) {
    return conta.length >= 6
}
function validaValor(valor) {
    return valor > 0
}

// análise instantânea dos inputs
nomeBeneficiario.addEventListener('keyup', function(e){
    if(!validaNome(e.target.value)){
        nomeBeneficiario.classList.add('error')
        nameMessage.classList.add('error')
    }
    else{
        nomeBeneficiario.classList.remove('error')
        nameMessage.classList.remove('error')
    }
})

valorDeposito.addEventListener('keyup', function(e){
    if(!validaValor(e.target.value)){
        valorDeposito.classList.add('error')
        valueMessage.classList.add('error')
    }
    else{
        valorDeposito.classList.remove('error')
        valueMessage.classList.remove('error')
    }
})

contaBeneficiario.addEventListener('keyup', function(e){
    if(!validaConta(e.target.value)){
    contaBeneficiario.classList.add('error')
    accountMessage.classList.add('error')
    }
    else{
        contaBeneficiario.classList.remove('error')
        accountMessage.classList.remove('error')
    }
})
    // validação no envio do formulário
form.addEventListener('submit', function(e){
    
    // parar atualização após submit
    e.preventDefault()

    // mensagem de sucesso
    const mensagemSucesso = `Montante de: <strong>R$${valorDeposito.value},00</strong> depositado para o cliente <strong>${nomeBeneficiario.value}</strong> - conta: <strong>${contaBeneficiario.value}</strong><br>Descrição: <strong>${descricaoDeposito.value}</strong> `

    // verificar se as respostas são validas
    let formValido = (validaNome(nomeBeneficiario.value) & validaConta(contaBeneficiario.value) & validaValor(valorDeposito.value))

    if (formValido) {
        respostaDeposito.innerHTML = mensagemSucesso  
        respostaDeposito.style.border = '3px solid darkgreen'   
        respostaDeposito.style.padding = '20px'
        valorDeposito.value = ''
        contaBeneficiario.value = ''
        nomeBeneficiario.value = ''
        descricaoDeposito.value = ''
    }
})
