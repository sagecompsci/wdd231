const open = document.querySelector("#open");
const close = document.querySelector("#close");
const modal = document.querySelector("#modal");

open.addEventListener("click", () => {
    modal.showModal();
})

close.addEventListener("click", () => {
    modal.close();
})