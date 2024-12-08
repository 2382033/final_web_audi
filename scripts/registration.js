// Registration Validation
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (password.length < 8 || password.length > 16 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        alert('Password must be 8-16 characters long, with at least one uppercase letter, one lowercase letter, and one number.');
    } else {
        alert('Registration Successful');
    }
});
