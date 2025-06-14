import {displayRoles} from "./members.mjs";

console.log("page testing");
const roles = ["f", "p", "pvp", "w", "b", "r"];
const rolesList = document.querySelector("#roles-list");
const numRoles = document.querySelector("#num-roles");

let num = 0;
roles.forEach((role) => {
    num += 1;
    let li = document.createElement("li");
    role = displayRoles(role);
    li.textContent = `${role}`;
    rolesList.appendChild(li);
    console.log("testing");
    console.log(role);
});

numRoles.textContent = `${num}`;