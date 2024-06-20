class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    // Create a new User object
    const newUser = new User(name, age, email);

    // Add user to the table
    addUserToTable(newUser);

    // Clear the form
    document.getElementById('userForm').reset();
});

function addUserToTable(user) {
    const tableBody = document.getElementById('userTable').querySelector('tbody');
    const newRow = tableBody.insertRow();

    const cellName = newRow.insertCell(0);
    const cellAge = newRow.insertCell(1);
    const cellEmail = newRow.insertCell(2);

    cellName.textContent = user.name;
    cellAge.textContent = user.age;
    cellEmail.textContent = user.email;
}
