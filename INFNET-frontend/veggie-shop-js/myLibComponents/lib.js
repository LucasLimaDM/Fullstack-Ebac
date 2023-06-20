// ! Esse código não foi copiado de nenhuma fonte externa, é uma biblioteca criada por mim -Lucas Lima Dias Messias para o Projeto de Bloco da INFNET 
// form placeholder config
const contatoInputs = document.querySelectorAll('.text-inputs input, .text-inputs textarea');
contatoInputs.forEach(input => {
    input.addEventListener('blur', (event)=>{
        const textoDigitado = event.target.value;
        const label = document.querySelector(`label[for=${input.id}]`);
      
        if (textoDigitado !== '') { label.classList.add('hide'); } 
        else { label.classList.remove('hide'); }
    })
});


// hamburguer-menu config
const menu = document.querySelector('.menu-hamburguer');
const menuBar = document.querySelector('.menu-bar');

menu.onclick = ()=> { menuBar.classList.toggle('open'); }
window.onresize = ()=> { menuBar.classList.remove('open'); }


//radio-button e checkbox

const radioBtns = document.querySelectorAll('.radio-btn');


const activeBtns = document.querySelectorAll('.radio-btn, .checkbox-btn');

activeBtns.forEach(activeBtn => {
    function activeBase(){
        
        if(!activeBtn.classList.contains('checked') && activeBtn.classList.contains('radio-btn')){        

            const sameNameBtns = document.querySelectorAll(`.radio-btn[name=${activeBtn.attributes.name.value}]`);

            sameNameBtns.forEach(btn => { btn.classList.remove('checked') });

        } else if(activeBtn.classList.contains('checkbox-btn')){
            /*Para todas as mark-ones pois as mark-alls vão para a outra função*/

            const checks = [];
            otherSameNameChecks.forEach(el => { checks.push(el.classList.contains('checked')) });

            if(checks.some()){

            }
        }
        activeBtn.classList.toggle('checked');
    }

    function marcaTodos(){

        const otherSameNameChecks = document.querySelectorAll(`.checkbox-btn[name=${activeBtn.attributes.name.value}.mark-one]`);

        const checks = [];

        otherSameNameChecks.forEach(el => {
            checks.push(el.classList.contains('checked'))
        });
        
        if(checks.includes(true)){
            otherSameNameChecks.forEach(checkbox => {
                checkbox.classList.remove('checked');
            })
        } else {
            otherSameNameChecks.forEach(checkbox => {
                checkbox.classList.add('checked');
            });
        }           
    }



    const funcAtiva = activeBtn.classList.contains('mark-all') ? marcaTodos : activeBase; 

    const label = document.querySelector(`label[for=${activeBtn.id}]`);
    label.addEventListener('click', funcAtiva, activeBtn);
    activeBtn.addEventListener('click', funcAtiva, activeBtn);
})

//select 
const selectBtns = document.querySelectorAll('.select-btn');
selectBtns.forEach(selectBtn => {
    const selectBtnName = selectBtn.attributes.name.value;

    const selectOptions = document.querySelectorAll(`.select-btn[name=${selectBtnName}] span`);
    console.log('selectOptions :', selectOptions);

    selectOptions.forEach(option => {

            option.addEventListener('click', ev =>{

                if(ev.target.parentNode.classList.contains('selected')){

                    const selected = ev.target.parentNode;

                    selected.nextElementSibling.classList.toggle('open');

                } else {
                    const selectOption = ev.target.parentNode;

                    console.log('selectOption :', selectOption.previousElementSibling.firstElementChild);

                    selectOption.append(selectOption.previousElementSibling.firstElementChild);

                    selectOption.previousElementSibling.append(option);

                    selectOption.classList.remove('open');
                }
            });       
    })
});



console.log('O código em \'myLibConponents\' não foi copiado de nenhuma fonte externa, é uma biblioteca criada por mim -Lucas Lima Dias Messias para o Projeto de Bloco da INFNET ');