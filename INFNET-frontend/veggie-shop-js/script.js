// form placeholder config

const contatoInputs = document.querySelectorAll('.text-inputs input, .text-inputs textarea');
contatoInputs.forEach(input => {
    const label = document.querySelector(`label[for=${input.id}]`);
    if(input.value.trim() === ''){
        label.classList.remove('hide');
    }
    input.addEventListener('blur', (event)=>{
        const textoDigitado = event.target.value;
        const label = document.querySelector(`label[for=${input.id}]`);
      
        if (textoDigitado !== '') { label.classList.add('hide'); } 
        else { label.classList.remove('hide'); }
    })
});
//TODO: Não permitir o usuário de colar texto
//* Validação no submit não permite entregar com caractere especial, mesmo que o digito entre no campo. Ainda funciona
const telContato = document.querySelector('#tel-contato');
telContato.addEventListener('keypress', e => {
    e.preventDefault();
    e.target.value += e.key.split('').filter(c=>c!=='(' && c!==')' && c!=='-' && c!=='.').join('')
    console.log(e);
});
telContato.addEventListener('input', e => console.log(e));

//submit validation config
const btnSubmit = document.querySelector('#submit-contato');

btnSubmit.addEventListener('click', () => {
    const nomeContato = document.querySelector('#nome-contato');
    const emailContato = document.querySelector('#email-contato');
    const mensagemContato = document.querySelector('#mensagem-contato');
    const radioBtns = document.querySelectorAll('.radio-btn');
    const checkBtns = document.querySelectorAll('.checkbox-btn');
    const selected = document.querySelector('.selected span');

    if(!nomeIsValid(nomeContato.value)){
        alert('O nome deve conter ao menos dois nomes');
    } else if(!emailIsValid(emailContato.value)){
        alert('O email deve ser um email válido');
    } else if(!telIsValid(telContato.value)){
        alert('O telefone deve conter 10 dígitos e sem caracteres especiais');
    } else if(!mensagemIsValid(mensagemContato.value)){
        alert('A mensagem deve conter ao menos 6 símbolos válidos');
    } else if(!activeAreValid(radioBtns)){
        alert('Marque ao menos uma das preferências de carne');
    } else if(!selectIsValid(selected)){
        alert('Selecione ao menos uma carne favorita');
    } else if(!activeAreValid(checkBtns)){
        alert('Marque ao menos uma das preferências de comunicação');
    } else {
        alert('Formulário enviado com sucesso!');
    }
});

function nomeIsValid(nome){
    return nome.trim().includes(' ');
}

function emailIsValid(email){
    return email.includes('@') 
    && email.includes('.') 
    && email.lastIndexOf('.') - email.lastIndexOf('@')  >= 2
    && email.substring(email.lastIndexOf('@') + 1, email.lastIndexOf('.')).trim() !== '';
}

function telIsValid(tel){
    return tel.trim().length === 10
    && !tel.includes('(')
    && !tel.includes(')')
    && !tel.includes('-')
    && !tel.includes('.');
}

function mensagemIsValid(mensagem){
    return mensagem.split('').filter(c=>c!==' ').length >= 6;
}

function activeAreValid(activeBtn){
    return [...activeBtn].map(n => n.classList.contains('checked')).includes(true)
}

function selectIsValid(selected){
    return selected.attributes.value.value !== 'selecione';
}