let input = document.getElementById("input")
let list = document.getElementById("list")
var todo = [];

function checked() {
    text.style.textDecoration = "line-through"
}

function addnew() {
    if (input.value == "") {
        alert("Nenhum Item Foi Adicionado")
    } else {
        todo.push({
            task: input.value,
            complete: false
        })
        input.value = ""
        show()
    }
}



function deleteItem(id) {
    todo.splice(id, 1)
    console.log("deletarItem", id)
    show()
}


function checked(id) {
    todo[id].complete = !todo[id].complete
    console.log(todo[id].complete, id)

    show()
}


function show() {
    let novaLista = ''


    todo.forEach((item, id) => {
        novaLista = novaLista +
            `<li class="${item.complete && "done"}">
                <img src="./img/checked.svg" alt="check" onclick="checked(${id})">
                ${item.task}
                <img src="./img/cancel.svg" alt="delete" onclick="deleteItem(${id})">
            </li>`

    });
    list.innerHTML = novaLista;

    localStorage.setItem('lista', JSON.stringify(todo))
}

function update() {
    const localStorageTasks = localStorage.getItem('lista')

    if (localStorageTasks) {
        todo = JSON.parse(localStorageTasks)
    }

    console.log(localStorageTasks)
    show()
}

update()