const file = "data/members.json";

async function getData() {
    const response = await fetch(file);
    const data = await response.json();
    display(data.members);
}

const display = (members) => {
    let num = 0;
    const section = document.querySelector("#members");
    members.forEach((member) => {
        const card = document.createElement("section");
        card.classList.add("card");

        const username = document.createElement("h2");
        const roles = document.createElement("ul");
        const joined = document.createElement("p");

        const image = document.createElement("img");
        image.setAttribute("src", `${member.image}`);
        image.setAttribute("alt", `${member.username} profile image`);
        image.setAttribute("height", "240");
        image.setAttribute("width", "240");
        image.style.borderRadius = "50%";

        username.textContent = `${member.username}`;
        joined.textContent = `Joined: ${member.joined}`;

        member.roles.forEach((role) => {
            const li = document.createElement("li");
            if (role === "o") {
                role = "⭐Owner";
            } else if (role === "a") {
                role = "💼Admin";
            } else if (role === "m") {
                role = "👁️Moderator";
            } else if (role === "f") {
                role = "🌾Farmer";
            } else if (role === "p") {
                role = "🕊️Peaceful Player";
            } else if (role === "pvp") {
                role = "⚔️PVP Player";
            } else if (role === "w") {
                role = "🗺️Wandering Player";
            } else if (role === "b") {
                role = "🔨Builder";
            } else if (role === "r") {
                role = "⚙️Redstone Mechanic";
            }

            li.textContent = `${role}`
            roles.appendChild(li);
        })

        card.appendChild(image);
        card.appendChild(username);
        card.appendChild(roles);
        card.appendChild(joined);

        section.appendChild(card);

        num += 1;
    });

    const num_members = document.querySelector(".num_members");
    num_members.textContent = `${num}`;
}

getData();