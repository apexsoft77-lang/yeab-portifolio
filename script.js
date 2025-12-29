    const themeBtn = document.getElementById('themeBtn');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    themeBtn.addEventListener('click', () => {
        if (html.getAttribute('data-bs-theme') === 'dark') {
            html.setAttribute('data-bs-theme', 'light');
            themeIcon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        } else {
            html.setAttribute('data-bs-theme', 'dark');
            themeIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        }
    });
