const copyright = document.querySelector("#copyright")
const lastModified = document.querySelector("#lastModified")

const date = new Date;

copyright.innerHTML = `${date.getFullYear()}`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;
