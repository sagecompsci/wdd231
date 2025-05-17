const file = "data/member.json";

async function getMemberData() {
    const response = await fetch(file);
    const data = await response.json();
    displayMembers(data.companies);
}

const displayMembers = (members) => {
    const cards = document.querySelector("#cards");
    members.forEach((member) => {
        const card = document.createElement("section");
        card.classList.add("card");

        const title = document.createElement("div");
        title.classList.add("title");
        const img = document.createElement("img");
        const name = document.createElement("h2");

        const street = document.createElement("p");
        const country = document.createElement("p")
        const phone = document.createElement("p");
        const url = document.createElement("a");

        name.textContent = `${member.name}`
        img.setAttribute("src", `${member.image}`);
        img.setAttribute("alt", `${name.textContent} logo`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "100");
        img.setAttribute("height", "100");

        street.textContent = `${member.street}`;
        country.textContent = `${member.country}`;
        phone.textContent = `${member.phone}`;
        url.setAttribute("href", `${member.url}`);
        url.textContent = `${member.url}`;

        title.appendChild(img);
        title.appendChild(name);
        card.appendChild(title);
        card.appendChild(street);
        card.appendChild(country);
        card.appendChild(phone);
        card.appendChild(url);

        cards.appendChild(card);
    });
}

getMemberData();