// Minify HTML
document.getElementById('minify-button').addEventListener('click', () => {
    const input = document.getElementById('minify-input').value;
    const minifiedHTML = input.replace(/>\s+</g, '><');
    document.getElementById('minify-input').value = minifiedHTML;
});

// Unminify HTML
document.getElementById('unminify-button').addEventListener('click', () => {
    const input = document.getElementById('unminify-input').value;
    const unminifiedHTML = input.replace(/</g, '\n<').replace(/>/g, '>\n');
    document.getElementById('unminify-input').value = unminifiedHTML;
});

// Theme Switching
/* const darkModeButton = document.getElementById('dark-mode');
const lightModeButton = document.getElementById('light-mode');

darkModeButton.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
});

lightModeButton.addEventListener('click', () => {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
}); */

// Improved Dark Mode Theme Switching (Now Input Fields also get dark!)
const darkModeButton = document.getElementById('dark-mode');
const lightModeButton = document.getElementById('light-mode');
const minifyInput = document.getElementById('minify-input');
const unminifyInput = document.getElementById('unminify-input');

// Update the event listeners for the dark and light mode buttons
darkModeButton.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    minifyInput.classList.add('dark-mode');
    unminifyInput.classList.add('dark-mode');

    // Store the selected theme in Local Storage
    localStorage.setItem('theme', 'dark');
});

lightModeButton.addEventListener('click', () => {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    minifyInput.classList.remove('dark-mode');
    unminifyInput.classList.remove('dark-mode');

    // Store the selected theme in Local Storage
    localStorage.setItem('theme', 'light');
});

// Retrieve the stored theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        darkModeButton.click(); // Trigger the click event to apply the dark theme
    } else {
        lightModeButton.click(); // Trigger the click event to apply the light theme
        }
});
    
// Why Minify Html?

document.getElementById('info-button').addEventListener('click', () => {
    const message = "Minifying HTML reduces the size of your web pages by removing unnecessary spaces, comments, and line breaks. This leads to faster page loading times, better user experience, and lower bandwidth usage. Additionally, smaller file sizes can improve search engine rankings. It's a crucial step before publishing your website!";
    window.alert(message);
});
