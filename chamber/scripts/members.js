const file = "data/members.json";

async function getMemberData() {
    const response = await fetch(file);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    const cards = document.querySelector("#cards");
    members.forEach((member) => {
        const card = document.createElement("section");
        const img = document.createElement("img");
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const url = document.createElement("a");

        // name.textContent = `${member.name}`
        name.textContent = "testing";
        img.setAttribute("src", `${member.image}`);
        img.setAttribute("alt", `${name.textContent} logo`);
        img.setAttribute("loading", "lazy");

        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        url.setAttribute("href", `${member.url}`);

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        cards.appendChild(card);
    });
}

getMemberData();