const precoAlcool = parseFloat(prompt('Digite o preço do litro de Álcool: ').replace(',', '.'));

const precoGasolina = parseFloat(prompt('Digite o preço do litro de Gasolina: ').replace(',', '.'));

const proporcao = (precoAlcool / precoGasolina).toFixed(2);

if(proporcao < 0.7){
    resposta(proporcao, 'Álcool');
} else {
    resposta(proporcao, 'Gasolina');
}



function resposta(proporcao, combustivel){
    alert(`O alcool custa ${proporcao * 100}% do valor da gasolina.
    Vale a pena abastecer com ${combustivel}`);
}
// se o número for NaN retorna falso, caso seja um número comum, retorna true
function validaEntrada(numValidado){
    return !isNaN(numValidado);
}