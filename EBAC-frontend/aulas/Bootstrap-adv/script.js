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
})




