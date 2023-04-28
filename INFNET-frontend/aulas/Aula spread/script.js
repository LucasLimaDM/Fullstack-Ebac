const carros = ['carro1', 'carro2', 'carro3', 'carro4', 'carro5'];

const [primeiroCarro, segundoCarro, ...outrosCarros] = carros;
console.log("🚀 carros:", carros);
console.log("🚀 primeiroCarro:", primeiroCarro);
console.log("🚀 segundoCarro:", segundoCarro);
console.log("🚀 outrosCarros:", outrosCarros);

const updatedCars = carros.concat('carro6');
console.log("🚀 ~ file: script.js:14 ~ updatedCars:", updatedCars);



// manter os itens ativados no início do array
const items = ['abobora-on', 'maçã-off', 'uva-on', 'pera-off', 'banana-on', 'tomate-on', 'morango-off', 'cereja-on',];

const onItems = getOnItems(items);
const offItems = getOffItems(items);
const filteredItems = orderItems(onItems, offItems);
console.log("🚀 ~ filteredItems:", filteredItems)




function getOnItems(items) {
    const onItems = items.filter(n => n.includes('on'));
    console.log("🚀 ~ file: script.js:18 ~ onItems:", onItems);
    return onItems
}

function getOffItems(items) {
    const offItems = items.filter(n => n.includes('off'));
    console.log("🚀 ~ file: script.js:20 ~ offItems:", offItems);
    return offItems

}

function orderItems(onItems, offItems) {
    const filteredItems = onItems.concat(offItems);
    console.log("🚀 ~ file: script.js:22 ~ onItems:", onItems);
    console.log("🚀 ~ file: script.js:22 ~ filteredItems:", filteredItems);
    return filteredItems
}


// Não alterar o array original é uma boa prática e pode evitar problemas de perda e alterações indesejadas nos dados inicialmente recebidos


