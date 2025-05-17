const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets)
}

const displayProphets = (prophets) => {
    const cards = document.querySelector("#cards");
    prophets.forEach((prophet) =>{
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src", `${prophet.imageurl}`);
        portrait.setAttribute("alt", `Portrait of ${fullName.innerHTML}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

getProphetData();