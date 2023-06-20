// placeholder config
const contatoInputs = document.querySelectorAll('.text-inputs input, .text-inputs textarea');

contatoInputs.forEach(input => {
  input.addEventListener('blur', (event)=>{
    const textoDigitado = event.target.value;
    const label = document.querySelector(`label[for=${input.id}]`);
      
    if(textoDigitado !== ''){
       label.classList.add('hide');
    } else {
      label.classList.remove('hide');
    }
  })
});


// hamburguer-menu config
const menu = document.querySelector('.menu-hamburguer');
const menuBar = document.querySelector('.menu-bar');



menu.onclick = ()=> {
    menuBar.classList.toggle('open');
}
window.onresize = ()=> {
    menuBar.classList.remove('open');
}

