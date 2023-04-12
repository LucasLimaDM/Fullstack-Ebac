const toggler = document.querySelector('#theme');
const page = document.body;

toggler.addEventListener('input', e => {
    const isChecked = e.target.checked
    console.log("🚀 isChecked:", isChecked)

    if (isChecked) {
        page.classList.add('dark');
    } else {
        page.classList.remove('dark')
    }
})






