const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



// event listeners
button.addEventListener("click", () => {
    if (input.value != '') {
        console.log("Add Chapter button clicked!");
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
            input.value = "";
        });
    }

});