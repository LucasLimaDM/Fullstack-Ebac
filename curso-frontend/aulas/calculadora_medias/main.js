const form = document.querySelector('.form-atividade')
const tbody = document.querySelector('table tbody')
const tfoot = document.querySelector('table tfoot')
const nomeAtividade = document.querySelector('#nome-ativ')
const notaAtividade = document.querySelector('#nota-ativ')
const notaMinima = parseFloat(prompt('Digite a média para aprovação: '))
var numeroAtividades = 0
var numeroNotas = 0
var mediaDasNotas = 0
var atividades = []
var notas = []


form.addEventListener('submit', function(e){

    // desabilita a função padrão do submit
    e.preventDefault()

    if (atividades.includes(nomeAtividade.value)) {
        alert('Essa atividade já foi inserida')
    } else {

    // adiciona a linha à tabela
    adicionaLinha()
    // envia os dados para armazenamento em array
    atividades.push(nomeAtividade.value)
    notas.push(Number(notaAtividade.value))
    // atualiza o foot da tabela com a média final e o botão aprovado
    atualizaTfoot()
    }
})


function adicionaLinha() {
    // adiciona a linha à tabela
    let linhaAMais = `<tr> <td>${nomeAtividade.value}</td> <td>${notaAtividade.value}</td> <td> <img src="${notaAtividade.value >= notaMinima ? 'images/aprovado.png' : 'images/reprovado.png' }" alt="${notaAtividade.value >= notaMinima ? 'Emoji festejando' : 'Emoji triste' }"></td></tr>`
    tbody.innerHTML += linhaAMais
}


function atualizaTfoot() {
	var somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        console.log(notas)
        somaDasNotas += notas[i];
    } 
    mediaDasNotas = somaDasNotas / notas.length
    
    tfoot.innerHTML = `<td>Média final</td><td>${mediaDasNotas.toFixed(2)}</td><td> <span class="resultado">${mediaDasNotas >= notaMinima ? 'Aprovado' : 'Reprovado'}</span></td>`

    // atualiza a classe do botão aprovado
    let resultado = document.querySelector('.resultado')
    if (mediaDasNotas >= notaMinima) {
        resultado.classList.add('aprovado')
        resultado.classList.remove('reprovado')
    }else {
        resultado.classList.add('reprovado')
        resultado.classList.remove('aprovado')
    }
}