const form = document.querySelector('.sign-up-form');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordError = document.querySelector('.password-error');
const passwordRequirements = document.querySelector('.password-requirements');

form.addEventListener('submit', (e) => {
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        password.classList.add('error');
        confirmPassword.classList.add('error');
        passwordError.style.display = 'block';
    }
});

password.addEventListener('focus', () => {
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
    passwordRequirements.style.display = 'block';
});

password.addEventListener('blur', () => {
    passwordRequirements.style.display = 'none';
    passwordError.style.display = 'none';
});

password.addEventListener('input', () => {
    if (password.value.length < 8) {
        passwordRequirements.style.color = 'red';
    }
    else {
        passwordRequirements.style.color = 'green';
    }
});