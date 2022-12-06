const form = document.getElementById('form-deposito')


function validaNome(nomeCompleto) {
    var nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
    // return volta um booleano para a chamada da function
}

form.addEventListener('submit', function(e){
    
    //para as atualizações no submit
    e.preventDefault()

    //declaração das variaveis
    const valorDeposito = document.getElementById('valorDeposito')
    const numeroContaBeneficiario = document.getElementById('numeroContaBeneficiario')
    const nomeBeneficiario = document.getElementById('nomeBeneficiario')
    
    const mensagemSucesso = `Montante de: R$${valorDeposito.value},00 depositado para o cliente ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value} `
   
    //validador se nomeBeneficiário é completo
    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        alert(mensagemSucesso)
        nomeBeneficiario.value = ''
        valorDeposito.value = ''
        numeroContaBeneficiario.value = '' 
    } else{
        alert('Nome incompleto')
    }
})


