function addAttrs() {
    document
        .querySelector('button[name="salvar"]')
        .setAttribute("onclick", "addTask()");
}

//pega o texto que foi digitado no input
function getInputText() {
    return document.querySelector('input[name="new_task"]').value;
}

//limpa o texto digitado no input
function clearInput() {
    document.querySelector('input[name="new_task"]').value = "";
}

//limpa os dados da tabela
function clearBody() {
    document.querySelector("#bodyTable").innerHTML = "";
}

//Adiciona os elementos no corpo da tabela, criando dinamicamente os elementos
function addBody({ name, date = "--/--", isFinished }, taskID) {
    let body = document.querySelector("#bodyTable");
    let tr = document.createElement("tr");
    let tDate = document.createElement("td");
    let tName = document.createElement("td");
    let tdActions = document.createElement("td");

    if (!isFinished) {
        let finishButton = document.createElement("button");
        let trashButton = document.createElement("button");
        let divButtons = document.createElement("div");
        divButtons.classList.add("btn-group");
        divButtons.setAttribute("role", "group");
        divButtons.setAttribute("aria-label", "First group");

        finishButton.title = "Concluir";
        finishButton.classList.add("btn", "btn-sm", "btn-outline-success");
        finishButton.setAttribute("onclick", `finishTask(${taskID})`);
        finishButton.setAttribute("id", "finishButton");

        divButtons.appendChild(finishButton);

        trashButton.title = "Apagar";
        trashButton.classList.add("btn", "btn-sm", "btn-outline-danger");
        trashButton.setAttribute("onclick", `removeTask(${taskID})`);
        trashButton.setAttribute("id", "trashButton");
        divButtons.appendChild(trashButton);

        tdActions.appendChild(divButtons);
    }
    tName.innerHTML = `${name}`;
    tDate.innerHTML = `${date.slice(0, 5)}`;
    //tdActions = botoes com a propriedade onclick, removeTask(numero da tarefa) - localStorage.removeItetm(tal)

    tr.appendChild(tDate);
    tr.appendChild(tName);
    tr.appendChild(tdActions);

    body.appendChild(tr);
}

//adiciona as tarefas na tabela chamando a funcao addBody dentro de um loop com base na lista de objetos
function addTasksInTable(savedTasks) {
    clearBody();
    for (let task in savedTasks) {
        addBody(savedTasks[task], parseInt(task) + 1);
    }
}
