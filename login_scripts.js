const container = document.getElementById("container");
const descriptionBtn = document.getElementById('description');
const teamBtn = document.getElementById('team');
const sign_in_Btn = document.getElementById('sign_in');
const get_in_Btn = document.getElementById('get_in');
const input_Id = document.getElementById('input_ID');
const input_Password = document.getElementById('input_Password');
let errStack = 0;
let link = 'main.html';

descriptionBtn.addEventListener('click', () => {
    container.classList.add("active");
});

teamBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

sign_in_Btn.addEventListener('click', (event) => {
    event.preventDefault();
    const enteredId = input_Id.value;
    const enteredPassword = input_Password.value;
    const user = team.find(member => member.id === enteredId);
    if (user) {
        if (enteredPassword === user.password) {
            errStack = 0;
            location.href = link;
        } else {
            alert('Invalid Password');
            errStack++;
        }
    } else {
        alert('Invalid ID');
        errStack++;
    }

    if (errStack >= 5) {
        alert('You have entered an incorrect password 5 times.');
    }
});

get_in_Btn.addEventListener('click', (event) => {
    event.preventDefault();
    const enteredId = input_Id.value;
    const enteredPassword = input_Password.value;
    const user = team.find(member => member.id === enteredId);
    location.href = link;
});

let team = [
    {'id':'rudallls','password':'rudallls00'}
];
