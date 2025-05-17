const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const cards = document.querySelector("#cards");

grid.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
})

list.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
})