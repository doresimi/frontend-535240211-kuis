document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value; 
    const phoneNumber = document.getElementById('noHP').value;

    if (username === '' || email === '' || password === '' || confirmPassword === '' || phoneNumber === '') {
        alert('Semua kolom harus diisi.');
        return;
    }
    if (password.length < 8) {
        alert('Password harus memiliki minimal 8 karakter.');
        return; 
    }
    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok.');
        return;
    }
    alert('Pendaftaran berhasil! Silakan masuk.');
    window.location.href = 'login.html';
});