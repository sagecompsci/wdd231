const info = new URLSearchParams(window.location.search);

document.querySelector("#results").innerHTML =
    `
    <p>Thank you for your application. Please verify that your usernames are correct. <br>
     If they are incorrect, dm any server staff.</p>
    
    <p>Discord Username: ${info.get('discord')}</p>
    <p>Minecraft Username: ${info.get('username')}</p>
    <p>We will review your application as soon as we are able.<br>
    We will dm you when we have reviewed your application.<br>
    If you were not whitelisted, we will let you know the reason.</p>
    `
