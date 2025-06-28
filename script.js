let inputText = document.getElementById("inputText");
let addButton = document.getElementById("addButton");
let ulList = document.getElementById("ulList");

addButton.addEventListener("click", function () {
  let input = inputText.value.trim();
  if (input === "") {
    alert("camt be empty");
    return;
  }

  let newList = document.createElement("li");
  let checkbox = document.createElement("input");
  let taskSpan = document.createElement("span");
  let deleteBtn = document.createElement("button");
  checkbox.type = "checkbox";
  taskSpan.innerText = input;
  deleteBtn.innerText = "Delete";

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      taskSpan.style.textDecoration = "line-through";
    } else {
      taskSpan.style.textDecoration = "none";
    }
  });
  deleteBtn.addEventListener("click", function () {
    ulList.removeChild(newList);
  });
  newList.appendChild(checkbox);

  newList.appendChild(taskSpan);

  newList.appendChild(deleteBtn);

  ulList.appendChild(newList);
  inputText.value = "";
});
