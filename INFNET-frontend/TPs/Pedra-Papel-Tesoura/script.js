const lanceUsuario = prompt('Escolha entre pedra, papel e tesoura');
const numLanceMaquina = Math.floor(Math.random() * 2);
switch (numLanceMaquina) {
    case 0:
        disputa('pedra');
        break;
    case 1:
        disputa('papel');
        break;
    case 2:
        disputa('tesoura');
        break;
}

function disputa(lanceMaquina) {

    if (lanceMaquina === lanceUsuario) {
        alert(`Você jogou ${lanceUsuario} e empatou com o computador que jogou ${lanceMaquina}`);
    } else {
        console.log('switch')
        switch (lanceUsuario) {
            case 'pedra':
                if (lanceMaquina === 'tesoura') {
                    vitoria(lanceMaquina)
                } else if (lanceMaquina === 'papel') {
                    derrota(lanceMaquina)
                }
                break;
            case 'papel':
                if (lanceMaquina === 'pedra') {
                    vitoria(lanceMaquina)
                } else if (lanceMaquina === 'tesoura') {
                    derrota(lanceMaquina)
                }
                break;
            case 'tesoura':
                if (lanceMaquina === 'papel') {
                    vitoria(lanceMaquina)
                } else if (lanceMaquina === 'pedra') {
                    derrota(lanceMaquina)
                }
                break;
            default:
                alert('Você deve escolher entre pedra, papel ou tesoura!')

        }

    }

}


function vitoria(lanceMaquina) {
    alert(`Parabéns! você jogou ${lanceUsuario} e venceu o computador que jogou ${lanceMaquina}`)
}

function derrota(lanceMaquina) {
    alert(`Que pena! Você jogou ${lanceUsuario} e perdeu para o computador que jogou ${lanceMaquina}`)
}