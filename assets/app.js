const data = {
    apps: [
        { name: "Ishiruka", img: "https://github.com/JOZETHCPM1178/jozeth-web/raw/main/assets/icon.png", url: "https://www.mediafire.com/file/o4zfia09jjve16v/Ishiruka_Ishiruka_v16.apk/file", date: "2025-08-14" }
    ],
    games: [
        { name: "Juego Ejemplo", img: "https://via.placeholder.com/300x200", url: "https://example.com/game.apk", date: "2025-08-12" }
    ],
    files: [
        { name: "Archivo Ejemplo", img: "https://via.placeholder.com/300x200", url: "https://example.com/file.zip", date: "2025-08-11" }
    ]
};

function renderTab(tab) {
    let container = document.getElementById(tab);
    container.innerHTML = "";
    let sorted = data[tab].sort((a,b) => new Date(b.date) - new Date(a.date));
    sorted.forEach(item => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<img src="${item.img}" alt="${item.name}">
                          <h3>${item.name}</h3>
                          <a class="download-btn" href="${item.url}" target="_blank">Descargar</a>`;
        container.appendChild(card);
    });
}

function openTab(tab) {
    document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
    document.getElementById(tab).style.display = "block";
    renderTab(tab);
}

function searchItems() {
    let term = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.querySelectorAll(".card").forEach(card => {
            card.style.display = card.innerText.toLowerCase().includes(term) ? "block" : "none";
        });
    });
}

openTab('apps');
