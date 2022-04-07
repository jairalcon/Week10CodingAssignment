let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdVehicle = new Text();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-vehicle-make').value;
    row.insertCell(1).innerHTML = document.getElementById('new-vehicle-model').value;
    row.insertCell(2).innerHTML = document.getElementById('new-vehicle-year').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-vehicle-make').value = '';
    document.getElementById('new-vehicle-model').value = '';
    document.getElementById('new-vehicle-year').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Remove';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}