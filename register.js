// Dark/Light Mode Toggle
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Load theme from localStorage if available
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    sunIcon.classList.add('d-none');
    moonIcon.classList.remove('d-none');
} else {
    document.body.classList.remove('dark-mode');
    moonIcon.classList.add('d-none');
    sunIcon.classList.remove('d-none');
}

// Toggle dark/light mode
sunIcon.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    sunIcon.classList.add('d-none');
    moonIcon.classList.remove('d-none');
    localStorage.setItem('theme', 'dark');
});

moonIcon.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    moonIcon.classList.add('d-none');
    sunIcon.classList.remove('d-none');
    localStorage.setItem('theme', 'light');
});

// Responsive Navbar Toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');

navbarToggler.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
});

// Close navbar on clicking outside
document.addEventListener('click', (e) => {
    if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target)) {
        navbarCollapse.classList.remove('show');
    }
});

// Make the form responsive
const form = document.querySelector('form');
const resizeForm = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
        form.classList.remove('w-50');
        form.classList.add('w-75');
    } else {
        form.classList.remove('w-75');
        form.classList.add('w-50');
    }
};

window.addEventListener('resize', resizeForm);
window.addEventListener('load', resizeForm);

// Validate password match in registration form
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const formSubmitButton = document.querySelector('form button[type="submit"]');

formSubmitButton.addEventListener('click', (e) => {
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success mt-3';
        successMessage.innerHTML = '<strong>Your password and confirm password is not same.</strong>';
        form.appendChild(successMessage);
    }
});

// Show success message on form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent default form submission for demonstration
    if (password.value === confirmPassword.value) {
        // Display a success message
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success mt-3';
        successMessage.innerHTML = '<strong>Success!</strong> Your account has been created successfully.';
        form.appendChild(successMessage);

        // Optionally clear the form after submission
        form.reset();
        
        // Optionally, redirect to another page after showing the message (e.g., to the login page)
        // setTimeout(() => window.location.href = 'login.html', 3000);
    }
});
