const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function addChapter() {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
    });
}

button.addEventListener("click", addChapter);