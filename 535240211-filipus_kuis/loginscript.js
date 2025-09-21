document.getElementById('loginForm')
.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const usernameInput = document.getElementById('username').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    

    const akunAdmin = {
        username: 'filipus',
        email: 'filipus@gmail.com',
        password: '12345'
    };

    if (usernameInput === '' || emailInput === '' || passwordInput === '') {
        alert('Semua kolom harus diisi.');
        return;
    }

    if (usernameInput === akunAdmin.username && emailInput === akunAdmin.email && passwordInput === akunAdmin.password) {
        sessionStorage.setItem('loggedInUser', usernameInput);
        window.location.href = 'main.html';
    } else {
        alert('Username, email, atau password salah.');
    }
});