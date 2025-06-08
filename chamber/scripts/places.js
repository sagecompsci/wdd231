const file = "data/places.json";

async function getPlaceData() {
    const response = await fetch(file);
    const data = await response.json();
    displayPlaces(data.places);
}

const displayPlaces = (places) => {
    const places_card = document.querySelector("#places");
    places.forEach((place) => {
        const card = document.createElement("section");
        card.classList.add("place-card");

        const name = document.createElement("h2");
        const description = document.createElement("p");
        const address = document.createElement("address");
        const image = document.createElement("img");
        const learn = document.createElement("button");

        name.textContent = `${place.name}`;
        description.textContent = `${place.description}`;
        address.textContent = `${place.address}`;
        learn.textContent = "Learn More";


        image.setAttribute("src", `${place.image}`);
        image.setAttribute("alt", `${place.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "300");
        image.setAttribute("height", "200");

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(learn);

        places_card.appendChild(card);
    });
}

getPlaceData();