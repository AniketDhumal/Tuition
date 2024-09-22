    // Dark Mode Toggle Script
    document.addEventListener('DOMContentLoaded', function() {
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');

        // Function to apply dark mode
        function applyDarkMode() {
            document.body.classList.add('dark-mode');
            sunIcon.classList.add('d-none');
            moonIcon.classList.remove('d-none');
        }

        // Function to remove dark mode
        function removeDarkMode() {
            document.body.classList.remove('dark-mode');
            moonIcon.classList.add('d-none');
            sunIcon.classList.remove('d-none');
        }

        // Toggle dark mode
        sunIcon.addEventListener('click', function() {
            applyDarkMode();
            localStorage.setItem('theme', 'dark');
        });

        moonIcon.addEventListener('click', function() {
            removeDarkMode();
            localStorage.setItem('theme', 'light');
        });

        // Apply the saved theme on page load
        if (localStorage.getItem('theme') === 'dark') {
            applyDarkMode();
        } else {
            removeDarkMode();
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const toggleButton = document.getElementById('theme-toggle');
        const body = document.body;
        
        // Load stored theme from localStorage if available
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            body.classList.add(storedTheme);
            body.style.colorScheme = storedTheme;
        }
    
        toggleButton.addEventListener('click', function () {
            // Add animation class to body
            body.classList.add('theme-transition');
    
            // Toggle between dark and light mode
            const isDarkMode = body.classList.toggle('dark-mode');
            if (isDarkMode) {
                body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark-mode');
                body.style.colorScheme = 'dark';
            } else {
                body.classList.add('light-mode');
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light-mode');
                body.style.colorScheme = 'light';
            }
    
            // Remove animation class after 8 seconds (to match the animation duration)
            setTimeout(function () {
                body.classList.remove('theme-transition');
            }, 8000); // Match animation duration
        });
    });
    