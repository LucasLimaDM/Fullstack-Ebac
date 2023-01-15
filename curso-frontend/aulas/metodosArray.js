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



    'Métodos de busca'

[1,2,3].indexOf(3) // 2; retorna a posição do valor selecionado



[1,2,3].includes(2) // true; retorna true se o array possui o valor selecionado













