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

function getKeys() {
    const storedObjects = Object.keys(localStorage);
    let keys = [];
    for (let key in storedObjects) {
        if (Number.isNaN(parseInt(storedObjects[key]))) {
        } else {
            keys.push(parseInt(storedObjects[key]));
        }
    }
    return keys;
}

function saveInLocalStorage(task) {
    let keys = getKeys();
    const maxKey = Math.max(...keys) != -Infinity ? Math.max(...keys) : 0;
    window.localStorage.setItem(maxKey, JSON.stringify(task));
}

function addTask() {
    let input = getInputText().split("em");
    let task = new Task(input[0], input[1]);
    saveInLocalStorage(task);
    clearInput();
    renderTasks();
}

function renderTasks() {
    let keys = getKeys();
    let savedTasks = [];
    for (i in keys) {
        savedTasks.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    addTasksInTable(savedTasks);
}
