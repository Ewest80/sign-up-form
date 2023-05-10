const form = document.querySelector('.form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
  if(password.value !== confirmPassword.value) {
    e.preventDefault();
    password.classList.add('error');
    confirmPassword.classList.add('error');
  }  
})

password.addEventListener('focus', () => {
  password.classList.remove('error')
  confirmPassword.classList.remove('error');
});
