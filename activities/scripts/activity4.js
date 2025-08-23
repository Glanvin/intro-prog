/* Gets the input elements by their ID and stores them in variables. */
let newTitle = document.getElementById('newTitle');
let newName = document.getElementById('newName');

/* Updates the title and name on the page with the input values. */
function UpdateContent() {
    /* Updates the inner HTML of the title element with the new title. */
    document.getElementById('title').innerHTML = newTitle.value.trim();
    /* Updates the inner HTML of the full name element with the new name. */
    document.getElementById('fullName').innerHTML = newName.value.trim();
    /* Clears the value of the newTitle input field. */
    newTitle.value = "";
    /* Clears the value of the newName input field. */
    newName.value = "";
}

/* Resets the title and name to their original values. */
function ResetContent() {
    /* Resets the title to its default text. */
    document.getElementById('title').innerHTML = `MY ASSESSMENT TITLE`;
    /* Resets the full name to its default text. */
    document.getElementById('fullName').innerHTML = `MY FULL NAME`;
    /* Clears the value of the newTitle input field. */
    newTitle.value = "";
    /* Clears the value of the newName input field. */
    newName.value = "";
}

/* Adds an event listener that runs when the user tries to refresh the page. */
window.addEventListener('beforeunload', (event) => {
    /* Clears the value of the newTitle input field. */
    newTitle.value = "";
    /* Clears the value of the newName input field. */
    newName.value = "";
});