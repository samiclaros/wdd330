const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

/* COMO LO HICE YO A MI PROPIO CRITERIO Y APUNTES */
/* function addChapter() {
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

button.addEventListener("click", addChapter); */


/* LO QUE DICE LA TAREA */
button.addEventListener("click", function () {
    if (input.value != "") {
        const li = document.createElement("li");
        li.textContent = input.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus()
        });

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = "";
    }
    
    input.focus();
});