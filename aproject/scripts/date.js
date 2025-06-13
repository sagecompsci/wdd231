const date = new Date();

const year = document.querySelector(".year");
const modified = document.querySelector(".modified");

year.textContent = `${date.getFullYear()}`;
modified.textContent = `${document.lastModified}`;