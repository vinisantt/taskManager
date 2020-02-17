function addAttrs() {
    document
        .querySelector('button[name="salvar"]')
        .setAttribute("onclick", "addTask()");
}

function getInputText() {
    return document.querySelector('input[name="new_task"]').value;
}

function clearInput() {
    document.querySelector('input[name="new_task"]').value = "";
}

function clearBody() {
    document.querySelector("#bodyTable").innerHTML = "";
}

function checkChilds(element) {
    let firstChild = element.firstElementChild;
    if (firstChild != null) {
        let child = firstChild.firstElementChild;
        return child.innerHTML != "Nenhuma tarefa encontrada";
    }
    return false;
}

function addBody({ name, date, isFinished }) {
    clearBody();

    let body = document.querySelector("#bodyTable");
    let tr = document.createElement("tr");
    let tDate = document.createElement("td");
    let tName = document.createElement("td");
    let tdActions = document.createElement("td");

    tName.innerHTML = name;
    tDate.innerHTML = date.slice(0, 6);
    //tdActions = botoes com a propriedade onclick, removeTask(numero da tarefa) - localStorage.removeItetm(tal)

    tr.appendChild(tDate);
    tr.appendChild(tName);
    tr.appendChild(tdActions);

    body.appendChild(tr);
}

function addTasksInTable(savedTasks) {
    for (let task in savedTasks) {
        addBody(savedTasks[task]);
    }
}
