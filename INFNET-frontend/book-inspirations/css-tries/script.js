// criar um novo elemento dentro do p e dar a ele configurações
const p = document.querySelector('p')
const a = document.createElement('a')
a.innerText = 'Clique ai'
a.href = '#'
p.appendChild(a)
console.log()
