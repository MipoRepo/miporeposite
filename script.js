
// Teemavaihto
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Yhteydenottolomake (esimerkki ilman backendiä)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Kiitos viestistäsi! Otamme yhteyttä pian. 😊');
    form.reset();
});
