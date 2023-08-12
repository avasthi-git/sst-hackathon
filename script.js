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
