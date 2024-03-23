const toggleBtn = document.getElementById('mode-toggle');
const currentMode = localStorage.getItem('mode') ? localStorage.getItem('mode') : null;

if (currentMode) {
    document.body.classList.add(currentMode);
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    let mode = 'light-mode';
    if (document.body.classList.contains('dark-mode')) {
        mode = 'dark-mode';
    } 
    localStorage.setItem('mode', mode);
});
