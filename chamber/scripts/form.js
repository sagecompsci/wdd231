const title = document.querySelector("#organization-title");
const regEx = /[a-zA-Z- ]{7,}/;
console.log("page load test");

title.addEventListener('input', ()=> {
    let correct = regEx.test(`${title.value}`);

    if (!correct) {
        title.setCustomValidity(false);
    }

    if (correct) {
        title.setCustomValidity(true);
    }
    console.log(title.validity);
});

const form = document.querySelector('.form1');
const timestamp = document.querySelector('#time');
form.addEventListener('submit', () => {
    let date = new Date();
    timestamp.value = `${date.toLocaleTimeString()}   ${date.toLocaleDateString()}`;
});
