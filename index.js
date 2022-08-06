// Week 10 Assignment
// Jair Alcon

// This makes the cursor move to 'new-vehicle-make' text input after submitting current data
// found solution here: https://www.techiedelight.com/set-focus-to-input-text-box-javascript/
document.getElementById("add").onclick = function () {
	document.getElementById("new-vehicle-make").focus();
}

// This allows the "ENTER" key to be used to submit data from text boxes
window.addEventListener("keydown", function (event) {
	if (event.defaultPrevented) {
		return; // Do nothing if the event was already processed
	}
	switch (event.key) {		
		case "Enter":
			console.log('-----Enter key was pressed-----');
			// Do something for "enter" or "return" key press.
			// allows the "Enter" key to submit all HTML elements tags 'label' to submit data
			this.document.getElementsByTagName('label');
			// allows the document to create new container that holds the data in the text boxes
			this.document.getElementById('add').click();
			break;
		default:
			return; // Quit when this doesn't handle the key event.
	}
	// Cancel the default action to avoid it being handled twice
	event.preventDefault();
}, true);

// creating variable for assignment 
let id = 0;

document.getElementById('add').addEventListener('click', () => {
	// This assigns a new Text node to the variable createdVehicle
    let createdVehicle = new Text();
	console.log('variable createdVehicle empty string =', createdVehicle);
    
    // This stamps out a new container from the input text which will include the table header and code below
    let table = document.getElementById('vehicle-table');
    console.log('variable table = This is new container from input', table);

	// This is row 1 because row 0 is made above, which includes the th as row 0
    let row = table.insertRow(1);
    console.log('variable row = This is adding another row of data from text input', row);

	// This sets row id for the new data, will be referenced by delete button later
    row.setAttribute('id', `item-${id}`);
	console.log('row.setAttribute: sets new ID to added item', 'id', `item-${id}`)

	// This takes the text from input new-vehicle-make and inserts it into column 0
    row.insertCell(0).innerHTML = document.getElementById('new-vehicle-make').value;
	console.log('row.insertCell(0) =', document.getElementById('new-vehicle-make').value);

	// This takes the text from input new-vehicle-model and inserts it into column 1
    row.insertCell(1).innerHTML = document.getElementById('new-vehicle-model').value;
	console.log('row.insertCell(1) =', document.getElementById('new-vehicle-model').value);

	// This takes the text from input new-vehicle-year and inserts it into column 2
    row.insertCell(2).innerHTML = document.getElementById('new-vehicle-year').value;
	console.log('row.insertCell(2) =', document.getElementById('new-vehicle-year').value);

	// This adds an additional column space for the delete button
    let actions = row.insertCell(3);
    console.log('variable "actions" =', actions);

	// This adds the delete button and it's JS functionality into the html code
	// and increments the id tag assignment
    actions.appendChild(createDeleteButton(id++));
	console.log('This appendsChild ', createDeleteButton(id++));

	// The 3 lines below reset text input boxes back to empty strings after submitting data
    document.getElementById('new-vehicle-make').value = '';
    document.getElementById('new-vehicle-model').value = '';
    document.getElementById('new-vehicle-year').value = '';
});

function createDeleteButton(id) {

	// This creates a new button element
    let btn = document.createElement('button');
	console.log(document.createElement('button'));

	// This inserts the class of 'btn btn-danger' into the button element
    btn.className = 'btn btn-danger';
	console.log(btn.className);

	// This assigns an id to the button element
    btn.id = id;
	console.log(btn.id);

	// This adds the text 'Remove' to the button
    btn.innerHTML = 'Remove';
	console.log(btn.innerHTML);

	//
    btn.onclick = () => {

		// this find the row associated with the button and assigns it to variable elementToDelete
        let elementToDelete = document.getElementById(`item-${id}`);
				
		// this removes the corresponding row the delete button is inside of
        elementToDelete.parentNode.removeChild(elementToDelete);
		console.log('Deleting :', elementToDelete);
    };
	console.log(btn);
    return btn;	
}