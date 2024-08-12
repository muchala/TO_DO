let input=document.getElementById("input");
let button= document.getElementById("submit");
let listItem=document.getElementById("taskList");


function addItem() {
    let inputField=input.value.trim()
    if(inputField != "")
    {
        let list=document.createElement("li")
        list.textContent = input.value.trim()
        console.log(input.value)
        
        let deleteButton=document.createElement("button")
        deleteButton.textContent = "Delete";
        listItem.appendChild(list);
        list.appendChild(deleteButton);

        deleteButton.addEventListener("click", function() {
            listItem.removeChild(list);
        });

        input.value = "";

    }

}