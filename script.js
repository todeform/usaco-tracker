const table = document.getElementById("table");

function addRow() {
    const row = document.createElement("div");
    row.className = "table-row";

    row.innerHTML = `
        <div class="status" style="top: 20px; left: 20px; width: 20px; height: 20px; background-color: #272840;"></div>

        <input class="link" type="url" style="top: 15px; left: 60px; width: 120px;">

        <input class="time" type="text" style="top: 15px; left: 200px; width: 55px;">

        <textarea class="tags" spellcheck="false" style="top: 15px; left: 275px; width: 100px; padding-top: 6px; resize: none;"></textarea>

        <textarea class="notes" spellcheck="false" style="top: 15px; left: 395px; width: 250px; padding-top: 6px; resize: none;"></textarea>

        <p class="expand-button" style="top: 0px; left: 655px;">⌵</p>
    `;

    row.classList.toggle("expanded");

    row.querySelector(".expand-button").addEventListener("click", () => {
        row.classList.toggle("expanded");
        const fields = row.querySelectorAll(
            ".tags, .notes, .time, .link"
        );
        const makeEditable = fields.length > 0 && fields[0].readOnly;
        fields.forEach(field => {
            field.readOnly = !makeEditable;
        });
    });

    table.appendChild(row);
}

function removeRow() {
    if (table.lastElementChild) {
        table.removeChild(table.lastElementChild);
    }
}