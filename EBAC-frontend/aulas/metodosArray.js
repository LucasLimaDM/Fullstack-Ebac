    'Torna um array em string e vice-versa'

'string string string'.split(' ') // [string, string, string]; torna uma string em um array, dividido pelo separador
    
['array', 'array', 'array'].join(' ') // 'array array array'; torna um array em string, dividida pelo separador

    'Métodos de adição e remoção no inicio e fim'

    //Cuidado ao usar esses métodos em variáveis, pois todos retornam valores diferentes, e não o array modificado

[1,2,3].push(4,5) // [1,2,3,4,5]; adiciona valores no fim do array; retorna a largura do array

[1,2,3].pop() // [1,2]; remove o valor do fim do array; retorna o valor removido

[1,2,3].unshift(0) // [0,1,2,3]; adiciona valor no inicio do array; retorna a largura do array

[1,2,3].shift() // [2,3]; remove o valor do inicio do array; retorna o valor removido

    //Cuidado, os arrays não são alterados, os métodos apenas retornam a união ou separação deles

[1,2,3].concat([4,5,6]) // [1,2,3,4,5,6]; une dois arrays em um; retorna o array unido

[1,2,3,4,5,6].slice(3) // [4,5,6]; corta todos os valores antes do separador; retorna o array cortado

'método coringa splice'

// [array].splice(posição, quantidade de valores selecionados, valor a ser colocado no local da remoção)

//remover valor do meio
[1,2,3,'a'].splice(2, 1)

// troca o valor da posição selecionada pelo valor selecionado

[1, 2, 3].splice(2, 1, 'abobora')

    'Métodos de busca'

[1,2,3].indexOf(3) // 2; retorna a posição do valor selecionado

[1,2,3,4,5].find(n => n > 4) // 5; busca algum valor que cumpra o requisito e retorna o primeiro que cumprir

[1,2,3,4,5].findLast((n => n > 2))// 5; busca o ultimo valor que cumpra o requisito

[1,2,3,4,5].findIndex(n => n > 4)// 4; mesmo funcionamento de find, mas retorna a posição do valor encontrado

[1,2,3,4,5].findLastIndex((n => n > 2))// 4; mesmo funcionamento de findLast mas retorna a posiçãodo valor

[1,2,3,4,5].at(-2)// 4; retorna o valor da posição indicada

[1,2,3,4,5].filter(n => n%2 == 0)// [2,4,6,8]; retorna um array com todos os valores que passarem no filtro

[1,2,3,4].some()

[1,2,3].includes(2) // true; retorna true se o array possui o valor selecionado

'métodos de modificação do array'

[1,2,3,4,5].map(n => n*2)// [2,4,6,8,10]; aplica uma propriedade a todos os valores do array

// A minha tarefa do módulo 7 não está marcada como concluída, a pesar de já ter sido corrigida pelo professor, segue o print





// mascara telefone
const telefone = document.querySelector('#telefone');

telefone.addEventListener('keyup', function () { 
    telefone.value = telefone.value.replace(/\D/g,"");
    telefone.value = telefone.value.replace(/^(\d{2})(\d)/g,"($1) $2")
    telefone.value = telefone.value.replace(/(\d)(\d{4})$/,"$1-$2")
})





