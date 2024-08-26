function showMoreInfo(event) {
    const targetId = event.target.getAttribute('data-target');
    const info = document.getElementById(targetId);
    
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('theme-toggle');

    let isNightMode = body.classList.contains('night-mode');
    
    if (isNightMode) {
        body.classList.remove('night-mode');
        button.textContent = 'Switch to Night Mode';
    } else {
        body.classList.add('night-mode');
        button.textContent = 'Switch to Light Mode';
    }
    
    localStorage.setItem('night-mode', !isNightMode);
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const button = document.getElementById('theme-toggle');
    const isNightMode = localStorage.getItem('night-mode') === 'true';
    
    if (isNightMode) {
        body.classList.add('night-mode');
        button.textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('night-mode');
        button.textContent = 'Switch to Night Mode';
    }
    
    button.addEventListener('click', toggleTheme);
    
    const moreInfoButtons = document.querySelectorAll('.more-info');
    moreInfoButtons.forEach(button => button.addEventListener('click', showMoreInfo));
});
