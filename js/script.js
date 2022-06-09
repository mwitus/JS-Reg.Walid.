const pass = document.querySelector('#password')
const p = document.querySelector('.passinfo')
const letters = /[a-z]/i;
const numbers = /[0-9]/i;
const special = /[!@#$%^&*()]/;
const minValue = 10


const showMsg = () => {
    if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.innerHTML = 'Masz najlepsze hasło na świecie!'
        p.style.color = 'Lime'
    } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.innerHTML = 'Masz dobre hasło. :)'
        p.style.color = 'gold'
    } else {
        p.innerHTML = 'Masz słabe hasło...'
        p.style.color = 'tomato'
    }
}

const checkPassword = () => {
    if (pass.value !== '') {
        showMsg()
    } else {
        p.innerHTML = 'Nie podałeś hasła.'
        p.style.color = ''
    }
}

pass.addEventListener('keyup', checkPassword)