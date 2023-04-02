// array to store added fields
let fields = [];

// function to add a new field
function addField(type) {
  // generate a random id for the field
  const id ='Your answer';

  // create a new field element based on the type
  let field;
  if (type === 'text') {
    field = document.createElement('input');
    field.type = 'text';
  } else if (type === 'select') {
    field = document.createElement('select');
    const option1 = document.createElement('option');
    option1.text = 'Option 1';
    field.add(option1);
    const option2 = document.createElement('option');
    option2.text = 'Option 2';
    field.add(option2);
  }

  // set the field's attributes
  field.id = id;
  field.name = id;
  fields.push(id);

  // create a new label element for the field
  const label = document.createElement('label');
  label.for = id;
  label.textContent = `Field ${fields.length}`;

  // add the field and label to the form
  const form = document.getElementById('custom-form');
  form.insertBefore(label, form.lastElementChild);
  form.insertBefore(field, form.lastElementChild);
}

// function to remove the last added field
function removeField() {
  if (fields.length > 0) {
    const id = fields.pop();
    const field = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    field.parentNode.removeChild(field);
    label.parentNode.removeChild(label);
  }
}

// function to submit the form and display the data in a table
function submitForm() {
  const tableBody = document.getElementById('custom-table-body');

  // clear the table
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  // get the form data
  const formData = new FormData(document.getElementById('custom-form'));

  // loop through the form data and add rows to the table
  for (const [name, value] of formData.entries()) {
    const row = document.createElement('tr');
    const header = document.createElement('th');
    header.textContent = name;
    const answer = document.createElement('td');
    answer.textContent = value;
    row.appendChild(header);
    row.appendChild(answer);
    tableBody.appendChild(row);
  }
}