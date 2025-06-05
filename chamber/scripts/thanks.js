const info = new URLSearchParams(window.location.search);

document.querySelector("#results").innerHTML = `
    <p>${info.get('time')}</p>
    <p>Application for ${info.get('first')} ${info.get('last')}</p>
    <p>Phone: ${info.get('phone')}</p>
    <p>Email: ${info.get('email')}</p>
    <p>${info.get('level')} Membership Level</p>
    <p>${info.get('organization-title')} of ${info.get('organization')}</p>
    <p>${info.get('description')}</p>
    `