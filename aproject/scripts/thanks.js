const info = new URLSearchParams(window.location.search);

document.querySelector("#results").innerHTML =
    `
    <p>Thank you for your application. Please verify that your usernames are correct. <br>
     If they are incorrect, dm any server staff.</p>
    
    <p>Have you ever played an SMP before? <br>
        ${info.get("played")}. ${info.get("describe-played")}</p>
    <p>Have you ever been banned before? <br>
        ${info.get("banned")}. ${info.get("describe-banned")}</p>
    <p>How active would you be? <br>
        ${info.get("active")}. ${info.get("describe-active")}</p>
    <p>Why should we whitelist you? <br>
        ${info.get("whitelist")}</p>  
    <p>What version of minecraft do you play? <br>
        ${info.get("version")}</p>
    
    <p>What is your minecraft usernamen? <br>
        ${info.get('username')}</p>
    <p>What is your discord username? <br>
        ${info.get('discord')}</p>
    
    <p>We will review your application as soon as we are able.<br>
    We will dm you when we have reviewed your application.<br>
    If you were not whitelisted, we will let you know the reason.</p>
    `
localStorage.setItem("name", `${info.get("discord")}`);