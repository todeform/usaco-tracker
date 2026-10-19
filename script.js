const table = document.getElementById("table");

function addRow() {
    const row = document.createElement("div");
    row.className = "table-row";

    row.innerHTML = `
        <div class="status independent incomplete" style="top: 20px; left: 20px; width: 20px; height: 20px;"></div>

        <div class="status-menu" hidden>
            <button class="menu-button" data-color="independent">🟢 Independent</button>
            <button class="menu-button" data-color="hints">🟠 Hints</button>
            <button class="menu-button" data-color="solution">🔴 Solution</button>
            <div class="checkbox unchecked">
                <img width=14 height=14 src="images/checkmark.png">
            </div>
            <span class="complete-text">Complete</span>
        </div>

        <input class="link" type="url" style="top: 15px; left: 60px; width: 125px;">

        <input class="time" value="0" type="text" style="top: 15px; left: 205px; width: 55px;">

        <textarea class="tags" spellcheck="false" style="top: 15px; left: 280px; width: 100px; padding-top: 6px; resize: none;"></textarea>

        <textarea class="notes" spellcheck="false" style="top: 15px; left: 400px; width: 245px; padding-top: 6px; resize: none;"></textarea>

        <p class="expand-button" style="top: 0px; left: 655px;">⌵</p>
    `;

    row.classList.toggle("expanded");

    const status = row.querySelector(".status");
    const statusmenu = row.querySelector(".status-menu");
    const checkbox = row.querySelector(".checkbox");

    checkbox.addEventListener("click", () => {
        status.classList.toggle("incomplete");
        checkbox.classList.toggle("unchecked");
    });

    statusmenu.querySelectorAll("[data-color]").forEach(button => {
        button.addEventListener("click", () => {
            status.classList.remove(
                "independent",
                "hints",
                "solution"
            );

            status.classList.add(button.dataset.color);
            statusmenu.hidden = true;
        });
    });

    status.addEventListener("click", () => {
        statusmenu.hidden = !statusmenu.hidden;
    });

    document.addEventListener("click", (event) => {
        if (
            !status.contains(event.target) &&
            !statusmenu.contains(event.target)
        ) {
            statusmenu.hidden = true;
        }
    });

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