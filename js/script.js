const form = document.querySelector('.form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passwordError = document.querySelector('.password-error');
const passwordReq = document.querySelector('.password-requirements');

form.addEventListener('submit', (e) => {
  if(password.value !== confirmPassword.value) {
    e.preventDefault();
    password.classList.add('error');
    confirmPassword.classList.add('error');
    passwordError.style.display = 'block';
  }  
})

password.addEventListener('focus', () => {
  password.classList.remove('error')
  confirmPassword.classList.remove('error');
  passwordReq.style.display = 'block';
});

password.addEventListener('blur', () => {
  passwordReq.style.display = 'none'
  passwordError.style.display = 'none'
});

password.addEventListener('input', () => {
  if (password.value.length < 8) {
    passwordReq.style.color = 'red';
  }
  else {
    passwordReq.style.color = 'green';
  }
})
