const addItemInput = document.querySelector("#addItemInput");
const addItemBtn = document.querySelector("#addItemBtn");

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

addItemBtn.addEventListener("click", () => {
  addItemsToList();
});

addItemInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addItemsToList();
  }
});

const listUl = document.querySelector(".list-group");
const lis = listUl.children;

function createBtn(li) {
  // create remove button
  const remove = document.createElement("button");
  remove.className = "fa-sharp fa-solid fa-xmark";
  li.appendChild(remove);
  return li;
}

// loop to add buttons in each li
for (var i = 0; i < lis.length; i++) {
  createBtn(lis[i]);
}
