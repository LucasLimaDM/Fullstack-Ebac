let itemDrop


function dragStart(ev){
    ev.dataTransfer.setData('text', ev.target.id);

    console.log(ev.target.id);
}

function permitDrop(ev){
    ev.preventDefault();
}

function dropMove(ev){
    ev.preventDefault();

    const dragItemId = ev.dataTransfer.getData('text');

    const dragItem = document.querySelector(`#${dragItemId}`);

    if(ev.target.className === 'container'){
        ev.target.append(dragItem);
    }

    console.log('dragItemId :', dragItemId);
    console.log('dragItem :', dragItem);



}