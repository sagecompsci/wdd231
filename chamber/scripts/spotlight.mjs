import {getMemberData} from "./members.mjs";

const filterList = (members) => {
    const filtered = members.filter((member) => member.member >= 2);
    let spotlight = [];

    do {
        for (let i = 0; i < 3; i++) {
            let index  = Math.floor(Math.random() * filtered.length);
            let value = filtered[index];
            if (!spotlight.includes(value)){
                spotlight.push(value);
            }
        }
    } while (spotlight.length <= 2);

    console.log("testing filter list");
    console.log(spotlight);

    return spotlight;
}



const displaySpotlight = (raw_members) => {
    console.log(raw_members);
    const members = filterList(raw_members);
    console.log("testing display spotlight");
    const cards = document.querySelector("#spotlight");

    members.forEach((member) => {
        const card = document.createElement("section");
        card.classList.add("s-card");

        const title = document.createElement("div");
        title.classList.add("title");
        const img = document.createElement("img");
        const name = document.createElement("h2");

        const phone = document.createElement("p");
        const url = document.createElement("a");

        name.textContent = `${member.name}`
        img.setAttribute("src", `${member.image}`);
        img.setAttribute("alt", `${name.textContent} logo`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "100");
        img.setAttribute("height", "100");

        phone.textContent = `${member.phone}`;
        url.setAttribute("href", `${member.url}`);
        url.textContent = `${member.url}`;

        title.appendChild(img);
        title.appendChild(name);
        card.appendChild(title);

        card.appendChild(phone);
        card.appendChild(url);

        cards.appendChild(card);
    });
}


console.log("testing spotlight.mjs");



getMemberData(displaySpotlight);
