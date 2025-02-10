const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-btn");

// Ensure the button works when clicked
addButton.addEventListener("click", addTask);

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Mark task as completed when clicked
        li.addEventListener("click", function () {
            this.classList.toggle("checked");
        });

        // Add a delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for '×' (delete icon)
        span.classList.add("close");

        // Delete task when '×' is clicked
        span.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(span); // Append delete button to task
        listContainer.appendChild(li); // Append task to list

        inputBox.value = ""; // Clear input box
    }
}
