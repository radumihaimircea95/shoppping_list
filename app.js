const addItemInput = document.querySelector("#addItemInput");
const addItemBtn = document.querySelector("#addItemBtn");
const newListBtn = document.querySelector("#deleteList");
const shoppingListContainer = document.querySelector("#list");
// adding items to list
function addItemsToList() {
  if (addItemInput === "") {
    alert("You didn`t add anything.");
  } else {
    const ul = document.querySelector(".container > #list > .list-group ");
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = addItemInput.value;
    addItemInput.value = "";
    ul.appendChild(li);
    createBtn(li);
  }
}
// adding items on pressing "Add item" button
addItemBtn.addEventListener("click", () => {
  addItemsToList();
});
// add items on pressing Enter key
addItemInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addItemsToList();
  }
});

newListBtn.addEventListener("click", () => {
  shoppingListContainer.remove();
});

const listUl = document.querySelector(".list-group");
const lis = listUl.children;

function createBtn(li) {
  // create remove button
  const remove = document.createElement("button");
  remove.className = "fa-solid fa-check";
  li.appendChild(remove);
  return li;
}

// loop to add buttons in each li
for (var i = 0; i < lis.length; i++) {
  createBtn(lis[i]);
}

shoppingListContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.className === `fa-solid fa-check`) {
      li.style.backgroundColor = "lightgreen";
      li.innerHTML = li.textContent + " - checked";
    }
  }
});
