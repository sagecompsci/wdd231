const welcome = document.querySelector("#welcome");
const name = localStorage.getItem("name");

if (name) {
    welcome.textContent = `Welcome back ${name}!`;
}

// localStorage.clear();