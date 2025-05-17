const date = new Date;

const copyright = document.querySelector("#copyright");
const lastModified = document.querySelector("#lastModified");

copyright.textContent = `${date.getFullYear()}`;
lastModified.textContent = `${document.lastModified}`;