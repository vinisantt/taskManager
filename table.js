function createTable() {
    const table = document.createElement("table");
    const tr = document.createElement("tr");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const thDate = document.createElement("th");
    const thName = document.createElement("th");
    const thActions = document.createElement("th");

    thDate.innerHTML = "Data";
    thDate.setAttribute("scope", "text-center");
    thName.innerHTML = "Nome";
    thName.setAttribute("scope", "text-center");
    thActions.innerHTML = "Ações";
    thActions.setAttribute("scope", "text-center");

    tbody.setAttribute("id", "bodyTable");

    tr.appendChild(thDate);
    tr.appendChild(thName);
    tr.appendChild(thActions);

    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);

    table.className = "table table-striped";

    document.querySelector("#tabela_aqui").appendChild(table);
}
createTable();
