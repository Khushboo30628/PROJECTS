let btn = document.querySelector("#add-btn");
let inp = document.querySelector("#task-input");
let inner = document.querySelector(".inner");

btn.addEventListener("click", function () {
    if (inp.value.trim() === "") return;

    // Create task container
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("flex");

    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create task text container
    let taskText = document.createElement("div");
    taskText.classList.add("one");
    taskText.style.display = "flex";
    taskText.style.justifyContent = "space-between";
    taskText.style.alignItems = "center";
    taskText.style.padding = "0 10px";

    // Add task text
    let span = document.createElement("span");
    span.innerText = inp.value;
    span.classList.add("txtcolor");

    // Create delete icon
    let trash = document.createElement("i");
    trash.classList.add("fa-solid", "fa-trash");
    trash.style.cursor = "pointer";

    // Add delete functionality
    trash.addEventListener("click", function () {
        inner.removeChild(taskDiv);
    });

    // Append elements
    taskText.appendChild(span);
    taskText.appendChild(trash);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskText);
    inner.appendChild(taskDiv);

    inp.value = "";
});
