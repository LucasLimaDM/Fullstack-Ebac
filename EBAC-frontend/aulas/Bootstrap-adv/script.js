// theme changer JS
// const toggler = document.querySelector('#theme-changer');
// const page = document.body;

// toggler.addEventListener('input', e => {
//     const isChecked = e.target.checked

//     if (isChecked) {
//         page.classList.add('dark');
//     } else {
//         page.classList.remove('dark')
//     }
// })

document.addEventListener('DOMContentLoaded', () => {
    const modalEx = new bootstrap.Modal('#modal-ex');
    setTimeout(() => {
        modalEx.show()
    }, 4000)
})   /*Faz o modal abrir automaticamente 4 segundos depois de abrir a pagina*/

const btnCheckToast = document.querySelector('#btn-check-toast')
const message = document.querySelector('#toast-message')

if(btnCheckToast){
    btnCheckToast.addEventListener('click',()=> {
        const toast = new bootstrap.Toast(message);
        toast.show();
    })
}


