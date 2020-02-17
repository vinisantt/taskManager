class Task {
    constructor(name, date) {
        this.name = name;
        this.date = date;
        this.isFinished = false;
    }

    finishTask() {
        this.isFinished = True;
    }
}

//adiciona uma nova tarefa com base no que foi digitado
function addTask() {
    let input = getInputText().split("em");
    let task = new Task(input[0], input[1].slice(1));
    saveInLocalStorage(task);
    clearInput();
    renderTasks();
}

//remove uma tarefa de acordo com o ID passado
function removeTask(taskID) {
    try {
        localStorage.removeItem(taskID);
    } catch (error) {
        alert("Erro ao apagar essa tarefa! ");
        console.log(error);
    }
    renderTasks();
}

//finaliza uma tarefa de acordo com o ID passados
function finishTask(taskID) {
    try {
        let task = JSON.parse(localStorage.getItem(taskID));
        task.isFinished = true;
        localStorage.setItem(taskID, JSON.stringify(task));
    } catch (error) {
        alert("Erro ao concluir essa tarefa! ");
        console.log(error);
    }
    renderTasks();
}

//pega todas as tarefas do localstorage
function getTasks() {
    let keys = getKeys();
    let savedTasks = [];
    for (i in keys) {
        savedTasks.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return savedTasks;
}

//controlar keys do local storage, esta função retorna a lista de chaves dos objetos ordenadas
function getKeys() {
    const storedObjects = Object.keys(localStorage);
    let keys = [];
    for (let key in storedObjects) {
        if (Number.isNaN(parseInt(storedObjects[key]))) {
        } else {
            keys.push(parseInt(storedObjects[key]));
        }
    }
    return keys.sort((a, b) => (a > b ? 1 : -1));
}

// Salva a tarefa no local storage com key unica e incremental
function saveInLocalStorage(task) {
    let keys = getKeys();
    const maxKey = Math.max(...keys) != -Infinity ? Math.max(...keys) : 0;
    window.localStorage.setItem(maxKey + 1, JSON.stringify(task));
}

//renderiza as tarefas na tabela
function renderTasks() {
    let savedTasks = getTasks();
    addTasksInTable(savedTasks);
}
